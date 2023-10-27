import React, { useState, useEffect } from 'react';

interface BarChartProps {
  data: number[];
  labels: string[];
  theme?: {
    barColor: string;
    barColorHighlight: string;
    labelColor: string;
    axisColor: string;
  };
  xAxisLabel?: string;
  yAxisLabel?: string;
  title?: string;
  horizontal?: boolean;
  tickInterval?: number;
}

const BarChart: React.FC<BarChartProps> = ({
  data,
  labels,
  theme = {
    barColor: '#4CAF50',
    barColorHighlight: '#37993b',
    labelColor: '#333',
    axisColor: 'black',
  },
  xAxisLabel,
  yAxisLabel,
  title,
  horizontal = false,
  tickInterval = 10,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseOver = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prevCount) => {
        const newCount = prevCount + 1;
        if (newCount >= 100) {
          clearInterval(timer);
          return 100;
        }
        return newCount;
      });
    }, 5);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const maxBarHeight = Math.max(...data);
  const barWidth = 50;
  const chartHeight = 300;
  const chartWidth = data.length * (barWidth + 10);
  const margin = 70;
  const barMargin = 5;

  const yScale = chartHeight / maxBarHeight;

  const yTicks = Array.from(
    { length: Math.floor(maxBarHeight / tickInterval + 1)},
    (_, index) => index * tickInterval
  );

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <svg viewBox={`0 0 ${chartWidth + 200} ${chartHeight + 200}`} width="80vw" height="80vh">
        {yTicks.map((tick) => (
          <g key={tick}>
            <line
              x1={horizontal ? tick * yScale + margin : margin - 5}
              y1={horizontal ? margin - 5 : chartHeight - tick * yScale + margin}
              x2={horizontal ? tick * yScale + margin : margin + chartWidth}
              y2={
                horizontal
                  ? margin + chartWidth
                  : chartHeight - tick * yScale + margin
              }
              stroke={theme.axisColor}
              strokeWidth={1}
            />
            <text
              x={horizontal ? tick * yScale + margin + 5 : margin - 10}
              y={
                horizontal
                  ? margin + 20 + chartWidth
                  : chartHeight - tick * yScale + 4 + margin
              }
              fill={theme.labelColor}
              textAnchor="end"
              style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', fontSize: '14px' }}
            >
              {tick}
            </text>
          </g>
        ))}

        <text
          x={chartWidth / 2 + margin}
          y={horizontal ? margin - 30 : margin - 30}
          fill={theme.labelColor}
          textAnchor="middle"
          className="title-label"
          style={{ fontSize: '20px', fontWeight: 'bold' }}
        >
          {title}
        </text>
        <text
          x={horizontal ? (chartHeight + margin) / 2 : chartWidth / 2 + margin}
          y={horizontal ? chartWidth + margin + 50 : chartHeight + 70 + margin}
          fill={theme.labelColor}
          textAnchor="middle"
          style={{ fontSize: '16px' }}
        >
          {horizontal ? yAxisLabel : xAxisLabel}
        </text>
        <text
          x={horizontal ? -((chartHeight + margin) / 2) : -(chartHeight / 2 + margin)}
          y={horizontal ? 0 : 30}
          fill={theme.labelColor}
          textAnchor="middle"
          transform={horizontal ? 'rotate(-90)' : 'rotate(-90)'}
          style={{ fontSize: '16px' }}
        >
          {horizontal ? xAxisLabel : yAxisLabel}
        </text>

        <line
          x1={margin}
          y1={margin - barMargin}
          x2={margin}
          y2={horizontal ? chartWidth + margin : chartHeight + margin}
          stroke={theme.axisColor}
          strokeWidth={2}
        />
        <line
          x1={margin}
          y1={horizontal ? chartWidth + margin : chartHeight + margin}
          x2={horizontal ? chartHeight + margin : chartHeight + barMargin}
          y2={horizontal ? chartWidth + margin : chartHeight + margin}
          stroke={theme.axisColor}
          strokeWidth={2}
        />

        {data.map((value, index) => (
          <g key={index}>
            <rect
              x={
                margin + (horizontal ? 0 : index * (barWidth + barMargin * 2) + barMargin)
              }
              y={
                horizontal
                  ? index * (barWidth + barMargin * 2) + barMargin + margin
                  : chartHeight - (value * yScale) + margin + value * yScale - (value * yScale * (percent / 100))
              }
              width={horizontal ? (value * yScale * (percent / 100)) : barWidth}
              height={horizontal ? barWidth : value * yScale * (percent / 100)}
              fill={hoveredIndex === index ? theme.barColorHighlight : theme.barColor}
              onMouseOver={() => handleMouseOver(index)}
              onMouseOut={handleMouseOut}
            />
            <text
              x={horizontal ? margin - 10 : margin + index * (barWidth + barMargin * 2) + barWidth / 2}
              y={
                horizontal
                  ? margin + barMargin + index * (barWidth + barMargin * 2) + barWidth / 2
                  : chartHeight + 20 + margin + barMargin
              }
              fill={theme.labelColor}
              textAnchor={horizontal ? 'end' : 'middle'}
              transform={horizontal ? '' : `rotate(-30 ${margin + index * (barWidth + barMargin * 2) + barWidth / 2},${chartHeight + 20 + margin + barMargin})`}
            >
              {labels[index]}
            </text>
            {hoveredIndex === index && (
              <text
                x={horizontal ? value * yScale + margin + 15 : index * (barWidth + 10) + barWidth / 2 + margin + barMargin}
                y={
                  horizontal
                    ? index * (barWidth + 10) + barWidth / 2 + margin + barMargin
                    : chartHeight - (value * yScale) - 10 + margin
                }
                textAnchor="middle"
                fontWeight="bold"
                fill={theme.labelColor}
              >
                {value}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
};

export default BarChart;

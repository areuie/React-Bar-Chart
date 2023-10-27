# How to Implement the BarChart React Component

### 1. Add the Component Files

Place the BarChart.tsx file into your project directory, which contains the BarChart component code.

### 2. Incorporate the Component:

In your React application, import the BarChart component into a component or page where you want to display the bar chart.

Example:
```javascript
import React from 'react';
import BarChart from './BarChart'; // Import the BarChart component
```

### 3. Create a Page or Component:

Create a new component or page (e.g., BarChartPage.tsx) where you will use the BarChart component to display the bar chart.

Example:
```javascript
const BarChartPage = () => {
  const data = [10, 20, 30, 40];
  const labels = ['Label 1', 'Label 2', 'Label 3', 'Label 4'];

  return (
    <div>
      <BarChart
        data={data}
          labels={labels}
          title='Hello'
          xAxisLabel="X-Axis"
          yAxisLabel="Y-Axis"
          theme={{
            barColor: '#8058ad',
            barColorHighlight: '#694394',
            labelColor: '#101747',
            axisColor: '#2c3361',
          }}
          //more props available
      />
    </div>
  );
};
```

### 4. Specify BarChart Properties:

Customize the properties of the BarChart component as needed, such as the data, labels, theme, axis labels, title, orientation (horizontal or vertical), and tick interval.

Note: The tick interval needs to be adjusted for large numbers.

All possible properties:
```javascript
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
  ```

### 5. Run Your Application:

Run your React application to view the bar chart.

An example is deployed at: https://react-bar-chart-elp99kcwr-alisas-projects-bd682151.vercel.app/

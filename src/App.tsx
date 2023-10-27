import BarChart from './BarChart';
import './App.css';

function App() {
  const data1 = [10, 20, 30, 40];
  const labels1 = ['Label 1', 'Label 2', 'Label 3', 'Label 4'];

  const data2 = [22, 25, 28, 21, 23, 26, 27, 24, 20, 19, 22, 21];
  const labels2 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const data3 = [3200, 2900, 3500, 2800, 3100, 3600];
  const labels3 = ['Laptop', 'Smartphone', 'Tablet', 'Headphones', 'Camera', 'Smartwatch'];

  const data4 = [32, 92, 78, 583];
  const labels4 = ['Apples', 'Bananas', 'Oranges', 'Peaches'];


  return (
    <div className=''>
       <BarChart
          data={data1}
          labels={labels1}
          title='Hello'
          xAxisLabel="X-Axis"
          yAxisLabel="Y-Axis"
          theme={{
            barColor: '#ba5665',
            barColorHighlight: '#9e3645',
            labelColor: 'grey',
            axisColor: 'grey',
          }}
        />

      <BarChart
          data={data2}
          labels={labels2}
          title='Temperatures in a Year'
          xAxisLabel="Months"
          yAxisLabel="Temperature (C)"
          theme={{
            barColor: '#8058ad',
            barColorHighlight: '#694394',
            labelColor: '#101747',
            axisColor: '#2c3361',
          }}
        />

      <BarChart
          data={data3}
          labels={labels3}
          xAxisLabel="Products"
          yAxisLabel="# of Sales"
          title='Number of Sales of Products Sold'
          theme={{
            barColor: '#4755a6',
            barColorHighlight: '#2b3880',
            labelColor: 'grey',
            axisColor: 'grey',
          }}
          tickInterval={1000}
        />

      <BarChart
          data={data4}
          labels={labels4}
          xAxisLabel="Fruit"
          yAxisLabel="# of Fruit"
          title='Types of Favourite Fruit'
          theme={{
            barColor: '#4fb879',
            barColorHighlight: '#2f8a53',
            labelColor: 'grey',
            axisColor: 'grey',
          }}
          tickInterval={50}
        />

      <BarChart
          data={data4}
          labels={labels4}
          xAxisLabel="Fruit"
          yAxisLabel="# of Fruit"
          title='Types of Favourite Fruit'
          horizontal= {true}
          theme={{
            barColor: '#d6c567',
            barColorHighlight: '#d1bc43',
            labelColor: 'grey',
            axisColor: 'grey',
          }}
          tickInterval={50}
        />
    </div>
  );
}

export default App;

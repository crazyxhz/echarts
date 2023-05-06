import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ReactEcharts from 'echarts-for-react';
const data1 = {
  labels: ['Apples', 'Oranges'],
  series: [60, 40]
};

const data2 = {
  labels: ['Bananas'],
  series: [100]
};
function PieChart() {
  const option = {
    series: [
      {
        type: 'pie',
        radius: ['40%', '60%'],
        label: {
          normal: {
            position: 'center'
          }
        },
        data: data1
      },
      {
        type: 'pie',
        radius: ['0%', '40%'],
        data: data2
      }
    ]
  };

  return <ReactEcharts option={option} />;
}
function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<div>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Rspack + React</h1>
			<div className="card">
				<button onClick={() => setCount(count => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Rspack and React logos to learn more
			</p>
      <PieChart/>
		</div>
	);
}

export default App;

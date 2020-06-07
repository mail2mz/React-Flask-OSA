import React from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';


var startButton = 'N';
var stopButton = 'N';
var singleButton = 'N';


function getDataToPlot() {
	   axios.get('http://localhost:4000/OSAEqptPost/cmd', 'TRACE')
      .then(res => console.log(res.data))
		      .catch((error) => {console.log(error);})
}

function componentDidMount() {
    this.getDataToPlot();
    this.interval = setInterval(() => {
      this.getDataToPlot();
    }, 1000);
 }

 function componentWillUnmount() {
   clearInterval(this.interval);
 }


function startButtonPressed() {

	   {/* axios.get('https://flaskosa.herokuapp.com/cmd/Start')*/}
	   axios.post('http://localhost:4000/OSAEqptPost/cmd', 'STATR')
      .then(res => console.log(res.data))
		      .catch((error) => {console.log(error);})
	    startButton = 'Y'; stopButton = 'N';singleButton = 'N';
	   alert('You clicked start button!');
}

function stopButtonPressed() {

	    {/*axios.get('https://flaskosa.herokuapp.com/cmd/Stop')*/}
	    axios.post('http://localhost:4000/OSAEqptPost/cmd', 'STOP')
		      .then(res => {console.log(res.data); })
		      .catch((error) => {console.log(error);})
		startButton = 'N'; stopButton = 'Y';singleButton = 'N';
		alert('You clicked stop button!');
}

function singleButtonPressed() {

	    {/*axios.get('https://flaskosa.herokuapp.com/cmd/Single')*/}
	    axios.post('http://localhost:4000/OSAEqptPost/cmd', 'SINGLE')
		      .then(res => {console.log(res.data); })
		      .catch((error) => {console.log(error);})
		startButton = 'N'; stopButton = 'N';singleButton = 'Y';
		alert('You clicked single button!');
}

export default class PlotOSA extends React.Component {




  render() {
    return (

     <div>
			<button onClick={startButtonPressed}>Start</button>
			<button onClick={stopButtonPressed}>Stop</button>
			<button onClick={singleButtonPressed}>SingleTrace</button>

      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 820, height: 240, title: 'OSA Plot'} }
      />

      </div>
    );
  }
}
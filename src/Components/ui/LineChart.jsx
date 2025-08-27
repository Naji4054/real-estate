import React from "react";
import ReactApexChart from "react-apexcharts";


const LineChart = ({ state, type }) => {
   

    

    return (
      <div>
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type={type} height={150} />
          </div>
        <div id="html-dist"></div>
      </div>
    );
  }

//   const domContainer = document.querySelector('#app');
//   ReactDOM.render(<ApexChart />, domContainer);

  export default LineChart
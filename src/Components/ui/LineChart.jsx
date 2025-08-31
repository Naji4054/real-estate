import React from "react";
import ReactApexChart from "react-apexcharts";


const LineChart = ({ state, type }) => {
   

    

    return (
      <div>
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type={type} height={120} width={250} />
          </div>
        <div id="html-dist"></div>
      </div>
    );
  }


  export default LineChart
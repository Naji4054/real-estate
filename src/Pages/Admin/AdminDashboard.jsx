import React from 'react'
import ReactApexChart from 'apexcharts'
import LineChart from '../../Components/ui/LineChart'
import { BuildingStorefrontIcon } from '@heroicons/react/24/outline';



const AdminDashboard = () => {

  const [chartData, setChartData] = React.useState({
      
    series: [{
        name: "Desktops",
        data: [500, 380, 650],
        
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        },
        toolbar:{
          show: true,
          tools:{
            download:false
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      // grid: {
      //   row: {
      //     colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      //     opacity: 0.5
      //   },
      // },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        labels: {
          show: false
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      },
      grid : {
        show: false
      }
    },          
});
  const [barData, setBarData] = React.useState({
      
    series: [{
        name: "Desktops",
        data: [120, 350, 110, 200,450,250,190],
        
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        },
        toolbar:{
          show: true,
          tools:{
            download:false
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      // grid: {
      //   row: {
      //     colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      //     opacity: 0.5
      //   },
      // },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        labels: {
          show: false
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      },
      grid : {
        show: false
      }
    },          
});

  return (
    <div>
      <div className="max-w-[250px] shadow-[12px_12px_13px_4px_whitesmoke] ">
        <h1 className='text-[16px] font-semibold py-[12px] px-[17px]'>Sales</h1>
        <p className='text-[14px] text-[#6a6767]py-[12px] px-[17px]'>Last year</p>
        <div className='w-full'>
        <LineChart state={chartData} type='area'/>
        </div>
        <div className='flex justify-between'>
          <p className='text-[18px] font-bold py-[12px] px-[17px]'>175k</p>
          <p className='text-[13px] text-[#ff5a3c] py-[12px] px-[17px]'>-16.2%</p>
        </div>
      </div>
      <div className="max-w-[250px] shadow-[12px_12px_13px_4px_whitesmoke] py-[12px] px-[17px] ">
        <div className='max-w-[25px] min-h-[25px]'>
         <BuildingStorefrontIcon/>
        </div>
          <h1 className='text-[16px] font-semibold '>Total Profit</h1>
          <p className='text-[14px] text-[#6a6767]'>Last week</p>
          <p className='text-[14px] '>1.28k</p>
        <div>
          <p className='text-[13px] text-[#ff5a3c] '>-16.2%</p>
        </div>
      </div>
      <div className="max-w-[250px] shadow-[12px_12px_13px_4px_whitesmoke] py-[12px] px-[17px] ">
        <div className='max-w-[25px] min-h-[25px]'>
         <BuildingStorefrontIcon/>
        </div>
          <h1 className='text-[16px] font-semibold '>Total Profit</h1>
          <p className='text-[14px] text-[#6a6767]'>Last week</p>
          <p className='text-[14px] '>1.28k</p>
        <div>
          <p className='text-[13px] text-[#ff5a3c] '>-16.2%</p>
        </div>
      </div>
      <div className="max-w-[250px] shadow-[12px_12px_13px_4px_whitesmoke] ">
        <h1 className='text-[16px] font-semibold py-[12px] px-[17px]'>Sales</h1>
        <p className='text-[14px] text-[#6a6767]py-[12px] px-[17px]'>Last year</p>
        <div className='w-full'>
        <LineChart state={barData} type='bar'/>
        </div>
        <div className='flex justify-between'>
          <p className='text-[18px] font-bold py-[12px] px-[17px]'>175k</p>
          <p className='text-[13px] text-[#ff5a3c] py-[12px] px-[17px]'>-16.2%</p>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard

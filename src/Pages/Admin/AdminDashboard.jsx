import React from 'react'
import ReactApexChart from 'apexcharts'
import LineChart from '../../Components/ui/LineChart'
import { BuildingStorefrontIcon } from '@heroicons/react/24/outline';
import RadarChart from './RadarChart';
import SalesTable from './SalesTable';
import LastTransactionTable from './TransactionTable';
import EarningsChart from './EarningsChart';
import { BarChart } from '@mui/x-charts/BarChart';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Typography from '@mui/material/Typography';
import Timeline from './Timeline';
import AgentsOverview from './AgentsOverview';



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
   <>
    <div className=' container mx-auto grid grid-cols-4 gap-[20px]'>
      <div className="max-w-[250px] shadow-[12px_12px_13px_4px_whitesmoke] grid-custom">
        <div>
          <h1 className='text-[18px] font-semibold '>Sales</h1>
          <p className='text-[14px] text-[#6a6767]'>Last year</p>
        </div>
        <div className='w-full'>
        <LineChart state={chartData} type='area'/>
        </div>
        <div className='flex justify-between'>
          <p className='text-[18px] font-bold '>175k</p>
          <p className='text-[13px] text-[#ff5a3c] '>-16.2%</p>
        </div>
      </div>

      <div className="max-w-[250px] shadow-[12px_12px_13px_4px_whitesmoke] grid-custom ">
        <div className='max-w-[36px] min-h-[25px]'>
         <BuildingStorefrontIcon/>
        </div>
        <div className='place-content-center'>
          <h1 className='text-[18px] font-semibold '>Total Profit</h1>
          <p className='text-[14px] text-[#6a6767]'>Last week</p>
          <p className='text-[14px] '>1.28k</p>
        </div>
        <div>
          <p className='text-[13px] text-[#ff5a3c] '>-16.2%</p>
        </div>
      </div>

      <div className="max-w-[250px] shadow-[12px_12px_13px_4px_whitesmoke]  grid-custom">
        <div className='max-w-[36px] min-h-[25px]'>
         <BuildingStorefrontIcon/>
        </div>
        <div className='place-content-center'>
          <h1 className='text-[18px] font-semibold '>Total Profit</h1>
          <p className='text-[14px] text-[#6a6767]'>Last week</p>
          <p className='text-[14px] '>1.28k</p>
        </div>
        <div>
          <p className='text-[13px] text-[#ff5a3c] '>-16.2%</p>
        </div>
      </div>

      <div className="max-w-[250px] shadow-[12px_12px_13px_4px_whitesmoke] grid-custom">
        <div>
          <h1 className='text-[18px] font-semibold '>Sales</h1>
          <p className='text-[14px] text-[#6a6767]'>Last year</p>
        </div>
        <div className='w-full'>
        <LineChart state={barData} type='bar'/>
        </div>
        <div className='flex justify-between'>
          <p className='text-[18px] font-bold '>175k</p>
          <p className='text-[13px] text-[#ff5a3c] '>-16.2%</p>
        </div>
      </div>  
    </div>

    <section className='grid grid-cols-3  gap-[20px] mt-8 mb-10'>
      <div className='grid-custom3  shadow-[12px_12px_13px_4px_whitesmoke] col-start-1 col-end-3'>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">Project Status</Typography>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Box>
       <Box>
       <BarChart
          xAxis={[
            {
              scaleType: 'band',
              data: ['Apartments', 'Villas', 'Offices', 'Houses','Condos'],
              categoryGapRatio: 0.6, // A smaller number means wider bars
            },
          ]}
          series={[{ data: [10, 16, 19, 11,7] }]}
          height={400}
          width={800}
      />
       </Box>
      </div>
      <div className=' shadow-[12px_12px_13px_4px_whitesmoke]'>
          <RadarChart/>
      </div>
    </section>
    <section className='grid grid-cols-3 gap-[20px]' >
      <div>
        <SalesTable/>
      </div>
      <div>
        <EarningsChart/>
      </div>
      <div>
        <LastTransactionTable/>
      </div>
    </section>
    <section className='grid grid-cols-5'>
      <div className='col-start-1 col-end-3'>
        <Timeline/>
      </div>
      
      <div className='col-start-3 col-end-6'>
        <AgentsOverview/>
      </div>
    </section>
  
   </>
  )
}

export default AdminDashboard;

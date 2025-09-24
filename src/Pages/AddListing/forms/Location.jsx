import React from 'react'

const Location = () => {
  return (
    <div>
       <form name= "location">
            <div className='mb-[50px]'>
              <p className='mb-5 text-[18px] font-semibold'>Location</p>
              <div className='grid grid-cols-2 gap-8'>
                <input  className='border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px]' type="number" placeholder='Latitude'/>
                <input  className='border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px]' type="number" placeholder='Longitude'/>
              </div>
            </div>
            <div>
              <button className="border border-solid border-[#ff5a3c] text-[white] p-[8px_18px] bg-[#ff5a3c] w-[300px]">Next</button>
            </div>
        </form>
    </div>
  )
}

export default Location

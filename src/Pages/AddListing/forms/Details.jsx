import React from 'react'
import { PencilIcon } from '@heroicons/react/24/outline'

const Details = () => {
  return (
    <div>
        <form name= "details">

{/* details section */}

            <div className='mb-[50px]'>
            <p className='mb-5 text-[18px] font-semibold'>Details</p>
                <div className='grid grid-cols-5 gap-8'>
                <div className='relative'>
                    <input className='w-full border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px] pr-10' type="number" placeholder='Bedroom'/>
                    <PencilIcon className='absolute top-[33%] right-4 h-5 w-5 text-[#ff5a3c] ' />
                </div>
                <div className='relative'>
                    <input className='w-full border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px] pr-10' type="number" placeholder='Washroom' />
                    <PencilIcon className='absolute top-[33%] right-4 h-5 w-5 text-[#ff5a3c] ' />
                </div>
                <div className='relative'>
                    <input className='w-full border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px] pr-10' type="number" placeholder='Area in Sqft' />
                    <PencilIcon className='absolute top-[33%] right-4 h-5 w-5 text-[#ff5a3c] ' />
                </div>
                <div className='relative'>
                    <input className='w-full border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px] pr-10' type="number" placeholder='Garages' />
                    <PencilIcon className='absolute top-[33%] right-4 h-5 w-5 text-[#ff5a3c]' />
                </div>
                <div className='relative'>
                    <input className='w-full border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px] pr-10' type="text" placeholder='Garage Size in Sqft' />
                    <PencilIcon className='absolute top-[33%] right-4 h-5 w-5 text-[#ff5a3c]' />
                </div>
                </div>
            </div>

{/* aminities section */}

            <div className='mb-[50px]'>
            <p className='mb-5 text-[18px] font-semibold'>Amenities</p>
                <div className='grid grid-cols-4 gap-8'>
                <div className="flex items-center space-x-2">
                    <input type="checkbox" id="furnished" className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded" />
                    <label htmlFor="furnished" className="text-gray-900">Furnished</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input type="checkbox" id="kitchen" className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded" />
                    <label htmlFor="kitchen" className="text-gray-900">Kitchen</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input type="checkbox" id="backyard" className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded" />
                    <label htmlFor="backyard" className="text-gray-900">BackYard</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input type="checkbox" id="swimming-pool" className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded" />
                    <label htmlFor="swimming-pool" className="text-gray-900">Swimming pool</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input type="checkbox" id="ventilation" className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded" />
                    <label htmlFor="ventilation" className="text-gray-900">Ventilation</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input type="checkbox" id="fireplace" className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded" />
                    <label htmlFor="fireplace" className="text-gray-900">Fireplace</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input type="checkbox" id="elevator" className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded" />
                    <label htmlFor="elevator" className="text-gray-900">Elavator</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input type="checkbox" id="elevator" className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded" />
                    <label htmlFor="elevator" className="text-gray-900">Garage Attached</label>
                </div>
                </div>
            </div>
            <div className="flex justify-between items-center gap-2 ">
                <button className="border border-solid border-[#ff5a3c] text-[white] p-[8px_18px] bg-[#ff5a3c]">Cancel</button>
                <button className="border border-solid border-[#ff5a3c] text-[white] p-[8px_18px] bg-[#ff5a3c] w-[300px]">Next</button>
            </div>
        </form>
    </div>
  )
}

export default Details

import React from 'react'
import { PencilIcon } from '@heroicons/react/24/solid'

const AddListing = () => {
  return (
    <section className='mb-[100px]'>
      <div className="account-bg-image mb-24">
        <div className='container mx-auto'>
          <div>
            <h1 className='text-[36px] font-semibold'>Add Listing</h1>
            <p>home addlisting</p>
          </div>
        </div>
      </div>

      <div className='container mx-auto'>
        <form>
          <div className='mb-[50px]'>
            <p className='mb-5 text-[18px] font-semibold'>Property Description</p>
            <div className='flex flex-col gap-8'>
              <textarea className='w-full min-h-[65px] border border-solid border-black] px-[15px] py-[10px]' placeholder='Title*'></textarea>
              <textarea className='w-full h-[150px] border border-solid border-[#e4ecf2]] px-[15px] py-[10px]' placeholder='Description'></textarea>
            </div>
          </div>
          <div className='mb-[50px]'>
            <p className='mb-5 text-[18px] font-semibold'>Property Price</p>
            <div className='grid grid-cols-2 gap-8'>
                <div className='relative'>
                  <input className='w-full border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px] pr-10' type="number" placeholder='Price in $ (only numbers)*'/>
                  <PencilIcon className='absolute top-[33%] right-4 h-5 w-5 text-[#ff5a3c] ' />
                </div>
                <div className='relative'>
                  <input className='w-full border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px] pr-10' type="number" placeholder='Before Price Label (ex: from)' />
                  <PencilIcon className='absolute top-[33%] right-4  h-5 w-5 text-[#ff5a3c] ' />
                </div>
                <div className='relative'>
                  <input className='w-full border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px] pr-10' type="number" placeholder='After Price Label (ex: /month)' />
                  <PencilIcon className='absolute top-[33%] right-4  h-5 w-5 text-[#ff5a3c] ' />
                </div>
                <div className='relative'>
                  <input className='w-full border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px] pr-10' type="number" placeholder='Yearly Tax Rate' />
                  <PencilIcon className='absolute top-[33%] right-4  h-5 w-5 text-[#ff5a3c]' />
                </div>
            </div>
          </div>
          <div className='mb-[50px]'>
            <p className='mb-5 text-[18px] font-semibold'>Select Category</p>
            <div className='grid grid-cols-3 gap-8 mb-[50px]'>
              <select className='border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px]' name="location" required>
                <option value="location" disabled selected hidden>Choose location</option>
                <option value="newyork">New York</option>
                <option value="los angeles">Los Angeles</option>
                <option value="florida">Florida</option>
                <option value="south carolina">South Crolina</option>
              </select>
              <select className='border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px]' name="location" required>
                <option value="category" disabled selected hidden>Choose Category</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="villa">Villa</option>
                <option value="shop">Shop</option>
                <option value="condo">Condo</option>
                <option value="office">Office</option>
              </select>
              <select className='border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px]' name="location" required>
                <option value="sale / rent" disabled selected hidden>Sale / Rent</option>
                <option value="sale">For Sale</option>
                <option value="rent">For Rent</option>
              </select>
            </div>
          </div>
          
          
          {/* media section */}

          <div className='mb-[50px]'>
            <p className='mb-5 text-[18px] font-semibold'>Photos  /  Videos</p>
            <div className='grid grid-cols-2 gap-8'>
            <input className='border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px]' type="text" placeholder='upload image max-size: 5 mb'/>
            <input className='border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px]' type="text" placeholder='upload image max-size: 5 mb'/>
            <input className='border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px]' type="text" placeholder='upload image max-size: 5 mb'/>
            <input className='border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px]' type="text" placeholder='upload image max-size: 5 mb'/>
            </div>
          </div>

          {/* location section */}
          <div className='mb-[50px]'>
            <p className='mb-5 text-[18px] font-semibold'>Location</p>
            <div className='grid grid-cols-2 gap-8'>
              <input  className='border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px]' type="number" placeholder='Latitude'/>
              <input  className='border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px]' type="number" placeholder='Longitude'/>
            </div>
          </div>

          {/* details section */}
          <div className='mb-[50px]'>
          <p className='mb-5 text-[18px] font-semibold'>Location</p>
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
          <p className='mb-5 text-[18px] font-semibold'>Location</p>

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
    </section>
  )
}

export default AddListing

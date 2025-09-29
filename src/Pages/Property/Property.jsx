import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(price) {
  return `${price}`;
}

const Property = () => {
  return (
    <section>
      <div className="account-bg-image mb-24">
        <div className='container mx-auto'>
          <div>
            <h1 className='text-[36px] font-semibold'>View Properties</h1>
            <p>home property</p>
          </div>
        </div>
      </div>

    <div className=' container mx-auto grid grid-cols-4 gap-14'>

      <div className='col-start-1 col-end-2'>

          {/* filter by price*/}


        <div className='mb-[60px]'>
          <div>
            <p className='text-[18px] mb-3 font-semibold'>Filter by Price</p>
          </div>
          <div>
          <Box sx={{ width: 250 }}>
            <Slider
              aria-label="Temperature"
              defaultValue={30}
              getAriaValueText={valuetext}
              color="secondary"
            />
          </Box>
        </div>
        </div>
          
          {/* propety type */}

          <div className='mb-[60px]'>
            <div>
              <p className='text-[18px] mb-4 font-semibold'>Property Type</p>
            </div>
            <div className='flex flex-col gap-3'>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="house" className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded" />
                <label htmlFor="house">House</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="villa" className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded" />
                <label htmlFor="villa">Villa</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="office" className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded" />
                <label htmlFor="office">Office</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="shop" className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded" />
                <label htmlFor="shop">Shop</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="apartment" className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded" />
                <label htmlFor="apartment">Apartment</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="studio" className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded" />
                <label htmlFor="studio">Studio</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="single-family-home" className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded" />
                <label htmlFor="single-family-home">Single Family Home</label>
              </div>
            </div>
          </div>


        {/* location */}
          <div className='mb-[60px]'>
            <div>
                <p className='text-[18px] mb-4 font-semibold'>Location</p>
            </div>
            <div className='flex flex-col gap-3'>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="new-york" className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded" />
                <label htmlFor="new-york">New York</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="south-carolina" className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded" />
                <label htmlFor="south-carolina">South Carolina</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="los-angeles" className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded" />
                <label htmlFor="los-angeles">Los Angeles</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="florida" className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded" />
                <label htmlFor="florida">Florida</label>
              </div>
            </div>
          </div>

        {/* amenities */}

          <div className='mb-[60px]'>
            <div>
              <p className='text-[18px] mb-4 font-semibold'>Amenities</p>
            </div>
            <div className='flex flex-col gap-3'>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="furnished" className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded" />
                <label htmlFor="furnished">Furnished</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="swimming-pool" className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded" />
                <label htmlFor="swimming-pool">Swimming pool</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="backyard" className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded" />
                <label htmlFor="backyard">Backyard</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="elevator" className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded" />
                <label htmlFor="elevator">Elevator</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="garage-attached" className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded" />
                <label htmlFor="garage-attached">Garage Attached</label>
              </div>
            </div>

          </div>


        {/* sell/ rent*/}

        <div className='mb-[60px]'>
          <div>
            <p className='text-[18px] mb-4 font-semibold'>Sell / Rent</p>
          </div>
          <div >
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="rent" className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded" />
              <label htmlFor="rent">  For Sale</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="rent" className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded" />
              <label htmlFor="rent">For Rent</label>
            </div>
          </div>
        </div>
        
      </div>

      <div className='col-start-2 col-end-5'>
        <p className='bg-black'>properties here</p>
      </div>

     </div>
    </section>
  )
}

export default Property

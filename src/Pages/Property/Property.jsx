import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import axios from 'axios'
import { useEffect, useState, useCallback} from 'react'
import PropertyCards from './PropertyCards';
import SearchBar from '../../Components/SearchBar';


const Property = () => {


  function valuetext(price) {
    return `${price}`;
  }

  
  const [filters, setFilters] = useState({
    priceRange:[0, 5000000],
    propertyTypes: [],
    locations:[],
    amenities:[],
    propertyStatus:[]
  })

  const [searchValue, setSearchValue] = useState('')
  const [minMaxPrice, setMinMaxPrice] = useState([500, 600000])

  const [propertyData, setPropertyData] = useState([])

  // handler for search 
  const handleSearchChange = (value)=> {
    setSearchValue(value)
  }
  // handler for price 
  const handlePriceChange = (event, newValue) =>{
    setFilters (prev => ({...prev, priceRange: newValue}))
  }
  //handler for filter
  const handleCheckboxChange = (filterType, value) => {
    setFilters(prevFilters => {
      const currentValues = prevFilters[filterType];
      const newValues = currentValues.includes(value)
      ?currentValues.filter(v => v !== value):[...currentValues, value]
      return { ...prevFilters, [filterType]: newValues };
    })
  }
 
  const featchData = useCallback(async () => {
    // Determine the max price for the initial slider range from the backend later,
    // for now, hardcode or fetch a max value if available.
  
    try {
      const res = await axios.post('http://localhost:3000/api/v1/property/list', {
        filters: {
          price: filters.priceRange,
          category: filters.propertyTypes, // Property Type maps to 'category' in model
          location: filters.locations,
          amenities: filters.amenities,
          property: filters.propertyStatus, // Sell/Rent maps to 'property' in model
        },
        searchValue: searchValue,
        page: 1, // Reset to page 1 on filter/search change
        limit: 10
      });
      setPropertyData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  }, [filters, searchValue]); // Depend on filters and searchValue

  // Effect to re-fetch data whenever filters or search value changes
  useEffect(() => {
    featchData();
  }, [featchData]);

    
 const CheckboxFilter = ({ id, label, value, filterType }) => (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={id}
        className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded"
        checked={filters[filterType].includes(value)}
        onChange={() => handleCheckboxChange(filterType, value)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );

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

    <div className=' container mx-auto grid grid-cols-4 gap-14 '>

      <div className='col-start-1 col-end-2 bg-white rounded-xl shadow-[0_0_20px_0_rgba(0,0,0,0.08)] p-6 self-start'>
          {/* search-bar*/}


        <div className='mb-[60px] border border-gray-300'>
        <SearchBar handleSearch={handleSearchChange} />
        </div>


          {/* filter by price*/}



          <div className='mb-[40px]'>
            <div>
              <p className='text-[18px] mb-3 font-semibold'>Filter by Price <span className='hidden'>({valuetext(filters.priceRange[0])} - {valuetext(filters.priceRange[1])})</span></p>
            </div>
            <div>
              <Box sx={{ width: 180 }}>
                <Slider
                  getAriaLabel={() => 'Price range'}
                  value={filters.priceRange}
                  onChange={handlePriceChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  color="secondary"
                  min={minMaxPrice[0]}
                  max={minMaxPrice[1]}
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
              {/* NOTE: value must match the `category` field data in your MongoDB documents */}
              <CheckboxFilter id="house" label="House" value="House" filterType="propertyTypes" />
              <CheckboxFilter id="villa" label="Villa" value="Villa" filterType="propertyTypes" />
              <CheckboxFilter id="office" label="Office" value="Office" filterType="propertyTypes" />
              <CheckboxFilter id="shop" label="Shop" value="Shop" filterType="propertyTypes" />
              <CheckboxFilter id="apartment" label="Apartment" value="apartment" filterType="propertyTypes" />
              <CheckboxFilter id="studio" label="Studio" value="studio" filterType="propertyTypes" />
              <CheckboxFilter id="single-family-home" label="Single Family Home" value="Single Family Home" filterType="propertyTypes" />
            </div>
          </div>


          {/* location */}

          <div className='mb-[60px]'>
            <div>
              <p className='text-[18px] mb-4 font-semibold'>Location</p>
            </div>
            <div className='flex flex-col gap-3'>
              {/* NOTE: value must match the `location` field data in your MongoDB documents */}
              <CheckboxFilter id="new-york" label="New York" value="New York" filterType="locations" />
              <CheckboxFilter id="south-carolina" label="South Carolina" value="South Carolina" filterType="locations" />
              <CheckboxFilter id="los-angeles" label="Los Angeles" value="Los Angeles" filterType="locations" />
              <CheckboxFilter id="florida" label="Florida" value="Florida" filterType="locations" />
            </div>
          </div>

          {/* amenities */}

          <div className='mb-[60px]'>
            <div>
              <p className='text-[18px] mb-4 font-semibold'>Amenities</p>
            </div>
            <div className='flex flex-col gap-3'>
              {/* NOTE: id/label is descriptive, value must match the amenity field name in the model */}
              <CheckboxFilter id="furnished" label="Furnished" value="furnished" filterType="amenities" />
              <CheckboxFilter id="swimming-pool" label="Swimming pool" value="swimmingpool" filterType="amenities" />
              <CheckboxFilter id="backyard" label="Backyard" value="backyard" filterType="amenities" />
              <CheckboxFilter id="elavator" label="Elevator" value="elavator" filterType="amenities" />
              <CheckboxFilter id="garage-attached" label="Garage Attached" value="garageattached" filterType="amenities" />
            </div>
          </div>

          {/* sell/ rent*/}

          <div className='mb-[60px]'>
            <div>
              <p className='text-[18px] mb-4 font-semibold'>Sell / Rent</p>
            </div>
            <div>
              {/* NOTE: value must match the `property` enum in the model: 'sale' or 'rent' */}
              <CheckboxFilter id="for-sale" label="For Sale" value="sale" filterType="propertyStatus" />
              <CheckboxFilter id="for-rent" label="For Rent" value="rent" filterType="propertyStatus" />
            </div>
          </div>

          <div className='mt-10'> 
            <button
              
              className="w-full py-3 px-4 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 bg-[#ff5a3c]"
            >
              Reset Filters
            </button>
           </div>
      </div>

      <div className='col-start-2 col-end-5 bg-white rounded-xl shadow-[0_0_20px_0_rgba(0,0,0,0.08)] p-6'>
      <div className="flex flex-col justify-center items-center mb-[50px]">
                <h3 className=" text-[#ff5a3c] bg-[#ffeae6] p-[2px_14px] rounded-[25px]">Properties</h3>
            </div>
            <div className='container mx-auto grid grid-cols-2 gap-y-8' >
                
                {
                 propertyData.map((item)=> <PropertyCards key={item.id} data={item}/>)
                }     
                        
            </div>
            
      </div>

     </div>
    </section>
  )
}

export default Property

import { PencilIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


const PropertyInfo = ({ handleFormChange }) => {

  const token = sessionStorage.getItem('access_token')
    const handleSubmit = (e)=> {
        e.preventDefault()
        handleFormChange('media')
        axios.post('http://localhost:3000/api/v1/property/add/info', formData, {
          headers: {
            "Authorization" :` Bearer ${token}`
          }

        }).then(res=> {
          const {propertyId} = res.data.data
          sessionStorage.setItem('newPropertyId' , propertyId )
          sessionStorage.setItem('currentStep', 'media')
        })
    }

    const [formData, setFormData] = useState({})

    const handleInputChange = (e)=> {
      const { value, name } = e.target;
      setFormData(prev=> ({ ...prev, [name]: value}))
    }

    useEffect(()=>{
     console.log(formData, 'form data')
    }, [formData])

  return (
    <div>
      <form name= "propertyinfo" onSubmit={handleSubmit}>
          <div className='mb-[50px]'>
            <p className='mb-5 text-[18px] font-semibold'>Property Description</p>
            <div className='flex flex-col gap-8'>
              <textarea className='w-full min-h-[65px] border border-solid border-black] px-[15px] py-[10px]'  name= "title"onChange= { handleInputChange } placeholder='Title*'></textarea>
              <textarea className='w-full h-[150px] border border-solid border-[#e4ecf2]] px-[15px] py-[10px]'  name= "description"onChange= { handleInputChange } placeholder='Description'></textarea>
            </div>
          </div>
          <div className='mb-[50px]'>
            <p className='mb-5 text-[18px] font-semibold'>Property Price</p>
            <div className='grid grid-cols-2 gap-8'>
                <div className='relative'>
                  <input className='w-full border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px] pr-10' name= "priceExact" onChange={handleInputChange} type="number" placeholder='Price in $ (only numbers)*'/>
                  <PencilIcon className='absolute top-[33%] right-4 h-5 w-5 text-[#ff5a3c] ' />
                </div>
                <div className='relative'>
                  <input className='w-full border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px] pr-10' name= "beforePrice"onChange={handleInputChange} type="number" placeholder='Before Price Label (ex: from)' />
                  <PencilIcon className='absolute top-[33%] right-4  h-5 w-5 text-[#ff5a3c] ' />
                </div>
                <div className='relative'>
                  <input className='w-full border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px] pr-10' name= "afterPrice " onChange={handleInputChange} type="number" placeholder='After Price Label (ex: /month)' />
                  <PencilIcon className='absolute top-[33%] right-4  h-5 w-5 text-[#ff5a3c] ' />
                </div>
                <div className='relative'>
                  <input className='w-full border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px] pr-10'  name= "tax" onChange={handleInputChange} type="number" placeholder='Yearly Tax Rate' />
                  <PencilIcon className='absolute top-[33%] right-4  h-5 w-5 text-[#ff5a3c]' />
                </div>
            </div>
          </div>
          <div className='mb-[50px]'>
            <p className='mb-5 text-[18px] font-semibold'>Select Category</p>
            <div className='grid grid-cols-3 gap-8 mb-[50px]'>
              <select className='border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px]' onChange={handleInputChange} name="location" required>
                <option value="location" disabled selected hidden>Choose location</option>
                <option value="newyork">New York</option>
                <option value="los angeles">Los Angeles</option>
                <option value="florida">Florida</option>
                <option value="south carolina">South Crolina</option>
              </select>
              <select className='border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px]' onChange={handleInputChange} name="category" required>
                <option value="category" disabled selected hidden>Choose Category</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="villa">Villa</option>
                <option value="shop">Shop</option>
                <option value="condo">Condo</option>
                <option value="office">Office</option>
              </select>
              <select className='border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px]' onChange={handleInputChange} name="saleType" required>
                <option value="sale / rent" disabled selected hidden>Sale / Rent</option>
                <option value="sale">For Sale</option>
                <option value="rent">For Rent</option>
              </select>
            </div>
          </div>
          <div>
            <button className="border border-solid border-[#ff5a3c] text-[white] p-[8px_18px] bg-[#ff5a3c] w-[300px]">Next</button>
          </div>
        </form>  
    </div>
  )
}

export default PropertyInfo

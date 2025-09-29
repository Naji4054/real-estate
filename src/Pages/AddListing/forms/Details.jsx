import { PencilIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getSession } from '../../../Utils/storageHelpers'

const defaultFormData = {
    bedroom: 0,
    washroom: 0,
    area: 0,
    garage: 0,
    garagearea: 0,
    furnished: false,
    kitchen: false,
    backyard: false,
    swimmingpool: false,
    ventilation: false,
    fireplace: false,
    elavator: false,
    garageattached: false

}

const Details = ({handleFormChange}) => {

    
   
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
      e.preventDefault()
      const token = getSession('access_token')
        const propertyId = sessionStorage.getItem('newPropertyId')

         if(propertyId){
            const details = {bedroom: formData.bedroom,
                washroom: formData.washroom,
                area: formData.area,
                garage: formData.garage,
                garagearea: formData.garagearea}

            const amenities = {
                furnished: formData.furnished,
                kitchen: formData.kitchen,
                backyard: formData.backyard,
                swimmingpool: formData.swimmingpool,
                ventilation: formData.ventilation,
                fireplace: formData.fireplace,
                elavator: formData.elavator,
                garageattached: formData.garageattached
            }   
            
            try {
                const token = sessionStorage.getItem('access_token')
                const res = await axios.post('http://localhost:3000/api/v1/property/add/details', {details, amenities, propertyId}, {
                    headers: {
                      "Authorization" :` Bearer ${token}`
                    }
                }).then(res=> {
    
                    const {propertyId} = res.data.data
                    sessionStorage.setItem('newPropertyId' , propertyId )
                    sessionStorage.setItem('currentStep', 'propertyInfo')
                    handleFormChange('propertyInfo')
                    navigate('/properties')
                  })
                
            } catch (err) {
                console.error(err);
            }
    
         }
      }
    const [formData, setFormData] = useState({

    })

    const handleInputChange = (e)=> {
      const { value, name, checked } = e.target
      
      if (checked) {
          setFormData(prev=> ({...prev, [name]: checked}))
         
      } else if (value) {
        setFormData(prev=> ({...prev, [name]: value}))
      }
  }

  useEffect(()=>{
    console.log(formData, 'form data')
   }, [formData])


  return (
    <div>
        <form  onSubmit={handleSubmit} name= "details">

{/* details section */}

            <div className='mb-[50px]'>
            <p className='mb-5 text-[18px] font-semibold'>Details</p>
                <div className='grid grid-cols-5 gap-8'>
                <div className='relative'>
                    <input className='w-full border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px] pr-10' onChange={handleInputChange} name= "bedroom" type="number" placeholder='Bedroom'/>
                    <PencilIcon className='absolute top-[33%] right-4 h-5 w-5 text-[#ff5a3c] ' />
                </div>
                <div className='relative'>
                    <input className='w-full border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px] pr-10' onChange={handleInputChange} name="washroom" type="number" placeholder='Washroom' />
                    <PencilIcon className='absolute top-[33%] right-4 h-5 w-5 text-[#ff5a3c] ' />
                </div>
                <div className='relative'>
                    <input className='w-full border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px] pr-10' onChange={handleInputChange} name= "area" type="number" placeholder='Area in Sqft' />
                    <PencilIcon className='absolute top-[33%] right-4 h-5 w-5 text-[#ff5a3c] ' />
                </div>
                <div className='relative'>
                    <input className='w-full border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px] pr-10' onChange={handleInputChange} name="garage" type="number" placeholder='Garages' />
                    <PencilIcon className='absolute top-[33%] right-4 h-5 w-5 text-[#ff5a3c]' />
                </div>
                <div className='relative'>
                    <input className='w-full border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px] pr-10' onChange={handleInputChange} name="garagearea" type="text" placeholder='Garage Size in Sqft' />
                    <PencilIcon className='absolute top-[33%] right-4 h-5 w-5 text-[#ff5a3c]' />
                </div>
                </div>
            </div>

{/* aminities section */}

            <div className='mb-[50px]'>
            <p className='mb-5 text-[18px] font-semibold'>Amenities</p>
                <div className='grid grid-cols-4 gap-8'>
                <div className="flex items-center space-x-2">
                    <input onChange={handleInputChange} name="furnished" type="checkbox" id="furnished" className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded" />
                    <label htmlFor="furnished" className="text-gray-900">Furnished</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input onChange={handleInputChange} name= "kitchen" type="checkbox" id="kitchen" className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded" />
                    <label htmlFor="kitchen" className="text-gray-900">Kitchen</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input onChange={handleInputChange} name="backyard" type="checkbox" id="backyard" className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded" />
                    <label htmlFor="backyard" className="text-gray-900">BackYard</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input onChange={handleInputChange} name="swimmingpool" type="checkbox" id="swimming-pool" className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded" />
                    <label htmlFor="swimming-pool" className="text-gray-900">Swimming pool</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input onChange={handleInputChange} name= "ventilation" type="checkbox" id="ventilation" className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded" />
                    <label htmlFor="ventilation" className="text-gray-900">Ventilation</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input onChange={handleInputChange} name="fireplace" type="checkbox" id="fireplace" className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded" />
                    <label htmlFor="fireplace" className="text-gray-900">Fireplace</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input onChange={handleInputChange} name= "elevator" type="checkbox" id="elevator" className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded" />
                    <label htmlFor="elevator" className="text-gray-900">Elavator</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input onChange={handleInputChange} name="garageattached" type="checkbox" id="garageattached" className="h-5 w-5 text-[#ff5a3c] focus:ring-[#ff5a3c] border-gray-300 rounded" />
                    <label htmlFor="elevator" className="text-gray-900">Garage Attached</label>
                </div>
                </div>
            </div>
            <div className="flex justify-between items-center gap-2 ">
                <button className="border border-solid border-[#ff5a3c] text-[white] p-[8px_18px] bg-[#ff5a3c]" type="submit">Cancel</button>
                <button className="border border-solid border-[#ff5a3c] text-[white] p-[8px_18px] bg-[#ff5a3c] w-[300px]">Next</button>
            </div>
        </form>
    </div>
  )
}

export default Details

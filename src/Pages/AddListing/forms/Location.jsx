import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getSession } from '../../../Utils/storageHelpers'

const Location = ({handleFormChange}) => {

  const token = sessionStorage.getItem('access_token')

    const [formData, setFormData] = useState({})

    const handleSubmit = async (e) => {
      e.preventDefault()

        const propertyId = getSession('newPropertyId')
        
        const locationPoint = {
          longitude : formData.longitude,
          latitude: formData.latitude
        }
        console.log(locationPoint,"locaiton forntend")

         if( propertyId ){

          try {
            
            const res = await axios.post('http://localhost:3000/api/v1/property/add/location',{locationPoint, propertyId}, {
                headers: {
                  "Authorization" :` Bearer ${token}`
                }
            }).then(res=> {
                console.log(res.data);
                sessionStorage.setItem('newPropertyId' , propertyId )
                sessionStorage.setItem('currentStep', 'details')
                handleFormChange('details')
              })
            
            } catch (err) {
                console.error(err);
            }
          } else {
            console.log("property id not found")
          }
    }    
    
    const handleInputChange = (e)=> {
      const { name, value } = e.target
      setFormData(prev=> ({...prev, [name]: value}))
  }

  useEffect(()=>{
    console.log(formData, 'form data')
   }, [formData])


 
  return (
    <div>
       <form onSubmit={ handleSubmit } name= "location">
            <div className='mb-[50px]'>
              <p className='mb-5 text-[18px] font-semibold'>Location</p>
              <div className='grid grid-cols-2 gap-8'>
                <input name = "latitude"  className='border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px]' onChange={handleInputChange} type="text" placeholder='Latitude'/>
                <input name = "longitude" className='border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px]' onChange={handleInputChange} type="text" placeholder='Longitude'/>
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

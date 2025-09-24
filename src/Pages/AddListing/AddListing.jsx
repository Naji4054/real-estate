import React, { useEffect } from 'react'
import axios from 'axios'
import { PencilIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import Media from './forms/Media'
import Location from './forms/Location'
import PropertyInfo from './forms/PropertyInfo'
import Details from './forms/Details'


  const formNames = [
    'propertyInfo',
    'media',
    'location',
    'details'
]

const AddListing = () => {

  const [activeForm, setActiveForm] = useState('propertyInfo')
  const [propertyId, setPropertyId] = useState(null)
  const handleFormChange = (val)=> {
    setActiveForm(val)
  }

  useEffect(()=> {
    // fetch the property id from session/cookies and set to propertyId state
    const newPropertyId = sessionStorage.getItem('newPropertyId')
    if (newPropertyId) {
      setPropertyId(newPropertyId)
    }
    // also set current step and set value to activeForm state
    const currentStep = sessionStorage.getItem('currentStep')
    if (currentStep) {
      setActiveForm(currentStep)
    }
    
  }, [])



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
      <div>{activeForm}</div>
      <div className='container mx-auto'>

        { activeForm === 'propertyInfo' && <PropertyInfo handleFormChange={handleFormChange}/> }        
        { activeForm === 'media' && <Media handleFormChange={handleFormChange} /> }
        { activeForm === 'location' && <Location/> }
        { activeForm === 'details' && <Details/> }

      </div>
    </section>
  )
}

export default AddListing

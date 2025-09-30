import React, { useCallback, useEffect } from 'react'

import useCalendlyPopup from '../../Utils/Meeting';
import { PopupButton } from 'react-calendly';


const PropertyCards = (props) => {

    const property = props.data;
   

useEffect(()=>{
    console.log(property, 'property')
},[property])

 

  return (
    <div className='mx-auto'>
      <div className='max-w-[350px]'>
            <div className='mb-[10px]'>
                <img src={`http://localhost:3000${property.media[0]}`} alt="image" className='w-full min-h-[262px]' />
            </div>
            <div className='mb-3 text-center font-bold'>
                <h3 >{property.title}</h3>
            </div>
            <div className='flex justify-between pl-5 pr-5'>
              <div className='flex gap-[10px]'>
                <img src="/images/bed-icon.png" alt="bedroom" className='w-[15px] h-[23px]' />
                <p>{property.details.bedroom}</p>
              </div>
              <div className='flex gap-[10px]'>
                <img src="/images/shower-icon.png" alt="washroom" className='w-[15px] h-[19px]'/>
                <p>{property.details.washroom}</p>
              </div>
              <div className='flex gap-[8px]' >
                <img src="/images/area-icon.png" alt="area"  className='w-[15px] h-[19px]'/>
                <p>{property.details.area} Sq.Ft</p>
              </div>
              <div className='flex'>
                <p className='font-medium'>{property.category}</p>
              </div>
              
              
            </div>
            <div className='flex justify-center border border-solid border-[#ff5a3c] text-[white] p-[8px_18px] bg-[#ff5a3c] rounded-[5px]' >
            <PopupButton
        url="https://calendly.com/mhdnaji488"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
      />
              </div>

       </div>
    </div>
  )
}

export default PropertyCards

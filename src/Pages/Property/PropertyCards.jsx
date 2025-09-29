import React, { useEffect } from 'react'

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

       </div>
    </div>
  )
}

export default PropertyCards

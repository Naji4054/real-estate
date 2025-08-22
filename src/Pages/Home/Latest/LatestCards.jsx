import React from 'react'

const LatestCards = (props) => {
    const NewProperties = props.data;
  return (
    <>
    <div className='max-w-[350px]'>
            <div className='mb-[10px]'>
                <img src={NewProperties.image} alt="image" className='w-full min-h-[262px]' />
            </div>
            <div className='mb-3 text-center font-bold'>
                <h3 >{NewProperties.title}</h3>
            </div>
            <div className='flex justify-between pl-5 pr-5'>
              <div className='flex gap-[10px]'>
                <img src="/images/bed-icon.png" alt="bedroom" />
                <p>{NewProperties.bedroom}</p>
              </div>
              <div className='flex gap-[10px]'>
                <img src="/images/shower-icon.png" alt="washroom" />
                <p>{NewProperties.washroom}</p>
              </div>
              <div className='flex'>
                <img src="/images/area-icon.png" alt="area" />
                <p>{NewProperties.area} Sq.Ft</p>
              </div>
              <div className='flex'>
                <p className='font-medium'>{NewProperties.category}</p>
              </div>
            </div>

       </div>
    </>
  )
}

export default LatestCards

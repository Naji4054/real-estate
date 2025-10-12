import React from 'react'
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const CategoriesCards = (props) => {
const data = props.data
  return (
    
      <div>
            
            <Link to={'/properties'}><img src ={data.image} alt="category imgae"  className='w-full' /></Link>
           
              <div className='px-[15px] py-[15px]'>
                <div className='text-[white] text-[13px]'>
                  <p>{data.property}</p>
                </div>
                <div className='text-[white] text-[18px] font-medium'>
                  <p>{data.category}</p>
                </div>
              </div>
              <div className='flex justify-between text-[white] px-[15px]'>
               <Link to={'/properties'}> <p className='text-[16px]'>MORE DETAILS</p></Link>
                <ArrowRightCircleIcon className='max-w-[20px]'/>
              </div>
            
      </div>
   
  )
}

export default CategoriesCards

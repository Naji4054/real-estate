import React from 'react'
import { categoriesData } from '../../../Data/categories'
import CategoriesCards from './CategoriesCards'


const Categories = () => {
  return (
   <>
  <section  id='category' className="mb-[100px]">
     <div className="container max-w-[64%] h-[900px] mx-auto grid grid-cols-3 grid-rows-8 gap-7 px-auto">
      <div>
          <p className='text-[37px] font-semibold leading-snug'>Discover Your Perfect Property With Us !</p>
          <p className='text-[#7A7A7A] text-[17px] pt-[40px] pb-[20px] leading-relaxed'>Your one-stop destination for apartments, villas, and commercial spaces. Start your search now to find a space that feels right. Your new beginning is just a click away.</p>
          
        </div>
        {
          categoriesData.map((item)=> <CategoriesCards key ={item.id} data={item}/>)
        } 
     </div>
  </section>
   </>
  )
}

export default Categories

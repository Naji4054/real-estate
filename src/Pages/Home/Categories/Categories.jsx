import React from 'react'
import { categoriesData } from '../../../Data/categories'
import CategoriesCards from './CategoriesCards'

const Categories = () => {
  return (
   <>
  <section  id='category'>
     <div className="container max-w-[60%] h-[800px] mx-auto grid grid-cols-3 grid-rows-8 gap-7 px-auto">
      <div>
          <p className='text-[35px] font-semibold leading-snug'>Discover Your Perfect Property With Us !</p>
          <p className='text-[#7A7A7A] pt-[40px] leading-relaxed'>Your one-stop destination for apartments, villas, and commercial spaces. Start your search now to find a space that feels right.</p>
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

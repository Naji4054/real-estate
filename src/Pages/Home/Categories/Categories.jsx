import React from 'react'
import { categoriesData } from '../../../Data/categories'
import CategoriesCards from './CategoriesCards'

const Categories = () => {
  return (
   <>
  <section  id='category'>
     <div className="container max-w-[60%] mx-auto grid grid-cols-3 grid-rows-4 gap-3 px-auto">
      <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, mollitia.</p>
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

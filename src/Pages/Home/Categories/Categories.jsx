import React from 'react'
import { categoriesData } from '../../../Data/categories'
import CategoriesCards from './CategoriesCards'

const Categories = () => {
  return (
   <>
  <section >
        {/* <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, mollitia.</p>
        </div> */}
      {
        categoriesData.map((item)=> <CategoriesCards key ={item.id} data={item}/>)
      }
  </section>
   </>
  )
}

export default Categories

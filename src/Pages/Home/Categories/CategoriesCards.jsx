import React from 'react'

const CategoriesCards = (props) => {
const data = props.data
  return (
    
      <div>
            
            <img src ={data.image} alt="category imgae"  className='w-full' />
      </div>
   
  )
}

export default CategoriesCards

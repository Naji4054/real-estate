import React from 'react'

const CategoriesCards = (props) => {
const data = props.data
  return (
    
      <div className='max-w-[300px]'>
            
            <img src ={data.image} alt="category imgae"  />
      </div>
   
  )
}

export default CategoriesCards

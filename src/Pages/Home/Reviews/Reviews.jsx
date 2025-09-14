import React from 'react'
import { reviewsData } from '../../../Data/reviews'
import ReviewsCards from './ReviewsCards'
import Carousel from '../../../Components/ui/Carousel'

const Reviews = () => {
  return (
   <section className='mb-[50px]'>
     <div className='flex gap-7'>
     
      {
        reviewsData.map((item) =><ReviewsCards  key={item.id} data = {item} />)
      }
       
    </div>
   </section>
  )
}

export default Reviews

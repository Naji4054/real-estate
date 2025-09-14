import React from 'react'
import { reviewsData } from '../../../Data/reviews'
import ReviewsCards from './ReviewsCards'
import Carousel from '../../../Components/ui/Carousel'

const Reviews = () => {
  return (
   <section className='mb-[50px]'>
     <div className="flex flex-col justify-center items-center mb-[50px]">
        <h3 className=" text-[#ff5a3c] bg-[#ffeae6] p-[2px_14px] rounded-[25px]">Our Testimonials</h3>
         <h1 className="text-[41px] font-semibold">Reviews</h1>
    </div>
     <div >
  <Carousel>
        {
            reviewsData.map((item) =><ReviewsCards  key={item.id} data = {item} />)
        }
  </Carousel>
        
      
    </div>
   </section>
  )
}

export default Reviews

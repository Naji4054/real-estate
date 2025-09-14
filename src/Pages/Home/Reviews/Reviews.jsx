import React from 'react'
import { reviewsData } from '../../../Data/reviews'
import ReviewsCards from './ReviewsCards'
import SliderComponent from '../../../Components/ui/CarouselNew'

const Reviews = () => {
    const reviewSliderSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
    }
  return (
   <section className='mb-[50px]'>
     <div >
  <SliderComponent settings={reviewSliderSettings}>
  {
            reviewsData.map((item) =><ReviewsCards  key={item.id} data = {item} />)
        }
  </SliderComponent>
        
      
    </div>
   </section>
  )
}

export default Reviews

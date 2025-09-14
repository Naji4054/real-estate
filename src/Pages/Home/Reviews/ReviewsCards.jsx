import React from 'react'
import Avatar from '@mui/material/Avatar';


const ReviewsCards = (props) => {
    const data = props.data
  return (
   <div className='max-w-[350px] border-[1px_solid_whitesmoke] shadow-[10px_10px_25px_15px_whitesmoke]'>
     <div className='px-[20px] py-[40px]'>
      <p className='text-[#5c727d] text-[16px]'>{data.reviewText}</p>
    </div>
    <div className='flex gap-[24px] px-[20px] pb-[25px]' >
        <div>
            <Avatar src={data.avatar} alt='avatar-image'/>
        </div>
        <div >
            <div>
                <p className='font-semibold text-[16px]'>{data.reviewerName}</p>
            </div>
            <div className='text-[#5c727d] text-[13px] '>
                <p>{data.reviewerTitle}</p>
            </div>
        </div>
    </div>
   </div>
  )
}

export default ReviewsCards

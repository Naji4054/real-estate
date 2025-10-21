import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
  return (
  <section id="about">
    <div className='grid grid-cols-2 container mx-auto'>
      <div id="aboutImage">
        <div>
          <img src="/images/about-us.jpg" alt="about" />
        </div>
      </div>
      <div id="aboutSection">
        <div>
          <div className="flex flex-col justify-center items-center mb-[50px]">
                <h3 className=" text-[#ff5a3c] bg-[#ffeae6] p-[2px_14px] rounded-[25px]">About us</h3>
                <h1 className="text-[41px] font-semibold">Leading Real Estate Marketplace</h1>
                <p className='text-[#7A7A7A] text-[17px] pt-[40px] pb-[20px] leading-relaxed'>Your one-stop destination for apartments, villas, and commercial spaces. Start your search now to find a space that feels right. Your new beginning is just a click away.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About;

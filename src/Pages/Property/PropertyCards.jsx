import React, { useEffect } from 'react'
import { PopupButton } from 'react-calendly';
import { IconBrandWhatsappFilled ,IconMailFilled} from '@tabler/icons-react';
import useWhatsapp from '../../Utils/useWhatsapp';
import { getSession } from '../../Utils/storageHelpers';
import axios from 'axios';

const PropertyCards = (props) => {

    const property = props.data;
   // initialize the usewhtsapp hook and pass the arguments later
    const startWhatsapp = useWhatsapp()

// useEffect(()=>{
//     console.log(property, 'property')
// },[property])


// emial enquiry

  const handleEmailEnquiry = async() => {
    const token = getSession('access_token')
    await axios.post('http://localhost:3000/api/v1/property/send-mail', {propertyId: property._id}, {
      headers: {
          "Authorization" :` Bearer ${token}`
        }
    }).then(res=> {
      console.log(res.data)
    }).catch(err=> {
      console.error(err)
    })
  }

  return (
    <div className='mx-auto'>
      <div className='max-w-[350px] transform  transition-all duration-300  cursor-pointer hover:shadow-xl hover:scale-[1.08] '>
            <div className='mb-[10px] max-w-[350px] h-[262px]'>
                <img src={`http://localhost:3000${property.media[0]}`} alt="image" className='w-full h-full' />
            </div>
            <div className='mb-1 text-center font-bold'>
                <h3 >{property.title}</h3>
            </div>
            <div className='flex justify-between pl-5 pr-5 mb-1'>
              <div className='flex gap-[10px]'>
                <img src="/images/bed-icon.png" alt="bedroom" className='w-[15px] h-[23px]' />
                <p>{property.details.bedroom}</p>
              </div>
              <div className='flex gap-[10px]'>
                <img src="/images/shower-icon.png" alt="washroom" className='w-[15px] h-[19px]'/>
                <p>{property.details.washroom}</p>
              </div>
              <div className='flex gap-[8px]' >
                <img src="/images/area-icon.png" alt="area"  className='w-[15px] h-[19px]'/>
                <p>{property.details.area} Sq.Ft</p>
              </div>
              <div className='flex'>
                <p className='font-semibold'>{property.category}</p>
              </div>
              
              
            </div>
            <div className='flex justify-between items-center max-w-[260px] mx-auto' >
              <div>
                <PopupButton
                  url="https://calendly.com/mhdnaji488"
                  /*
                  * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                  * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                  */
                  rootElement={document.getElementById("root")}
                  className=' text-[#ff5a3c] bg-[#ffeae6] p-[2px_4px] rounded-[5px]'
                  text="Schedule Meeting!"
                />
              </div>
              <div>
                <button onClick={()=> startWhatsapp(
                  // change the parameters to the required field
                  property._id,
                  property.title,
                  property.category
                )}><IconBrandWhatsappFilled className='text-[#25D366]'/></button>
              </div>
              <div>
                <button onClick={handleEmailEnquiry}><IconMailFilled/></button>
              </div>
            </div>

       </div>
    </div>
  )
}

export default PropertyCards;

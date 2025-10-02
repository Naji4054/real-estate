import React from 'react'
import { getSession } from '../../Utils/storageHelpers'
import Property from './Property'
import axios from 'axios'

const EmailEnquiry = () => {
    const token = getSession('access_token')
    const emailOnClick = async () => {
        const PropertyId = getSession('newPropertyId')
        if(PropertyId){
           try {
            await axios.post('http://localhost:3000/api/v1/property/send-mail', {PropertyId}, {
                headers: {
                    "Authorization" :` Bearer ${token}`
                  }
            }).then(res => {
                console.log(res.data)
            })
           } catch (error) {
            console.log(error)
           }
        } else {
            console.log('property ID not found')
        }
    } 
  return (
    <div>
      
    </div>
  )
}

export default EmailEnquiry;

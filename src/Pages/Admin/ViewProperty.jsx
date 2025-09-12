import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import PropertyCard from './PropertyCard'
import Loading from '../../Components/Loading'
import { Box } from '@mui/system'


const ViewProperty = () => {

    const { id } = useParams()
    
    const [singleProperty , setSingleProperty] = useState()
    const [loading, setLoading] = useState(false)

    const fetchViewData = async (propertyId) => {
      setLoading(true)
        await axios.get(`http://localhost:3000/admin/property/view/${propertyId}`).then(res => {
          setSingleProperty(res.data.data)
        })
        .catch(err => console.log(err)).finally(()=> setLoading(false))
      }
      React.useEffect(()=>{
        if (id) {
          fetchViewData(id)
        }
      },[id])
      
  return (
    <>
    {
      loading && <Loading/>
    }
    {
      !singleProperty && !loading && <p>No property found</p>
    }
    {
      singleProperty &&  <PropertyCard singleProperty={singleProperty}/>
    }
    </>
  )
}

export default ViewProperty

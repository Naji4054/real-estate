import React from 'react'
import { useLocation } from 'react-router-dom'
import AdminFooter from './AdminFooter'
import Footer from './Footer'

const MainFooter = () => {
    
    const location = useLocation()

    

    if (location.pathname.split('/').includes('admin')){
        return <AdminFooter/>
    }
    else {
        return <Footer/>
    }
  
}

export default MainFooter

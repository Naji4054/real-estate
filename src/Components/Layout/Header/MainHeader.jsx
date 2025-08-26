import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from './Header'
import AdminHeader from './AdminHeader'

const MainHeader = () => {

   const location = useLocation() 

   useEffect(()=> {
    console.log(location.pathname, 'loc')
   }, [location.pathname])



     

   if (location.pathname.split('/').includes('admin')) {

        return <AdminHeader/>
   } else {
        
        return <Header/>    
   }
}

export default MainHeader

import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';
import { getSession, removeSession, setSession } from '../../Utils/storageHelpers';
import { useNavigate } from 'react-router-dom';
import { SERVER_URL } from '../../Utils/url';
import toast from 'react-hot-toast';



const defaultValue = {
    login: () => {},
    logout: () => {},
    initAuth: () => {},
    isLoggedIn: false,
    loading: false,
    signup: () => {},
}

const AuthContext = createContext(defaultValue);

const AuthProvider = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loading, setLoading] = useState(false)
    
    const navigator = useNavigate()

    const signup = async (data) => {
        await axios.post(SERVER_URL + '/auth/register', data)
        .then(res => {
            setSession('access_token', res.data.token)
            setSession('user_data', res.data.data)
            navigator('/login')
        })
        .catch(err=> {
            toast.error(err.response.data.message)
        })
    }

    const login =  async (data) => {
        setLoading(true)
        await axios.post(SERVER_URL + '/auth/login', data)
        .then(res =>{

            setSession('access_token', res.data.token)
            setSession('user_data', res.data.data)
            setIsLoggedIn(true)
            navigator('/')
            
        })
        .catch(error=>{
            setIsLoggedIn(false)

        }).finally(()=> {
            setLoading(false)
        })
    
    }
   
    const logout = () => {
        setIsLoggedIn(false)
        navigator('/login')
        removeSession(['user_data', 'access_token'])
    }

    useEffect(()=> {
        const token = getSession('access_token')
        if (!token) {
            setIsLoggedIn(false)
        } else {
            setIsLoggedIn(true)
        }
    }, [])

    return (
        <>
        <AuthContext.Provider value={{ login, logout, isLoggedIn, loading,signup }}>
         {children}
        </AuthContext.Provider>
        </>
    )
}

export {AuthContext, AuthProvider};


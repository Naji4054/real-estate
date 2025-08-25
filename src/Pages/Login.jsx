import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './Context/AuthContext';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import Joi from 'joi'

const Login = () => {

 const { loading, login } = useContext(AuthContext)


 const schema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required().messages({
        'string.empty': 'Email is required',
        'string.email': 'Invalid email address',
    }),
    password: Joi.string().min(8).required().messages({
        'string.empty': 'Password is required',
        'string.min': 'Password must be at least 8 characters long',
    }),
});


  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({})


  const handleInputChange = (e) => {

    const { value, name } = e.target

    setUserData(prev=> ({...prev, [name]: value }))
  }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { error } = schema.validate(userData, { abortEarly: false });
        console.log(error, 'errors')
                
        
        if (error) {
            
            const validationErrors = {};

            error.details.forEach((detail) => {
                validationErrors[detail.path[0]] = detail.message;
            });
        
            setErrors(validationErrors);
            console.log(validationErrors); // Log the errors to see them
            return;
        } else {
              login(userData)
        }

                
    }

  return (

    <>
    <section >
        <div className="account-bg-image mb-24">

            <div className='container mx-auto'>
                <div>
                    <h1 className='text-[36px] font-semibold'>Account</h1>
                    <p>home login</p>
                </div>
            </div>
        </div>
       <div className=' container mx-auto mb-36'>
            <div className='max-w-[500px] mx-auto mb-28'>
                <h1 className='text-[41px] text-center font-bold'>Sign In </h1>
                <h1 className='text-[41px] text-center mb-5 font-bold'>To Your Account</h1>
                <p className='text-[#6a6767] text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Sit aliquid, Non distinctio vel iste.</p>
            </div>
            <div className='  grid grid-cols-2 gap-10'>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className='max-w-[500px] mb-5'>
                            <input type="email" placeholder='Email' name='email'  value ={userData.email}  onChange={handleInputChange}  className='w-full min-h-[50px] border border-solid border-[#c4c5c6] placeholder:text-[gray] px-2 py-1' />
                            {errors.email && <p className="text-red-500">{errors.email}</p>}
                        </div>
                        <div className='max-w-[500px] mb-5'>
                            <input type="password" placeholder='Password' name='password' value ={userData.password}  onChange={handleInputChange} className='w-full min-h-[50px] border border-solid border-[#c4c5c6] placeholder:text-[gray] px-2 py-1'/>
                            {errors.password && <p className="text-red-500">{errors.password}</p>}
                        </div>
                        <div className=' mb-5'>
                        <button type='submit' className="border border-solid border-[#ff5a3c] text-[white] p-[8px_18px] bg-[#ff5a3c] rounded-[5px]">{loading ? 'Loading...' : 'LOGIN'}</button>
                        </div>
                        <div>
                            <a href="#">FORGOT YOUR PASSWORD?</a>
                        </div>
                    </form>
                </div>
                <div>
                <div className='flex items-center flex-col'>
                        <div className='max-w-[500px] text-center'>
                            <h1 className='text-[22px] font-medium  mb-5'>DON'T HAVE AN ACCOUNT?</h1>
                            <p className='text-[#6a6767]  mb-8'>Add items to your wishlistget personalised recommendations
                            check out more quickly track your orders register</p>
                        </div>
                        <div >
                            <button className="border border-solid border-[#ff5a3c] text-[white] p-[8px_18px] bg-[#ff5a3c] rounded-[5px]"><Link to={'/signup'}>CREATE ACCOUNT</Link></button>
                        </div>
                </div>
                </div>
            </div>
       </div>
    </section>
    </>
  )
}

export default Login;

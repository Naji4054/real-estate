import React, { useContext, useState } from 'react'
import { AuthContext } from './AuthContext'

const SignUp = () => {

    const {signup} = useContext(AuthContext);

    const [userData, setUserData] = useState({
        firstName:'',
        lastName:'',
        email: '',
        password: ''
      })

      const handleInput = (e) => {
        const {value, name} = e.target;
        setUserData(prev=> ({...prev, [name]:value}))
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        const payload = { ...userData, name: `${userData.firstName} ${userData.lastName}` }
        signup(payload)

      }


  return (
    <div className=' max-w-[600px] mx-auto'>
      <form onSubmit={handleSubmit}>
        <div className='max-w-[600px] mb-5'>
            <input type="text" placeholder='First Name' name='firstName' value = {userData.firstName} onChange={handleInput}   className='w-full min-h-[50px] border border-solid border-[#c4c5c6] placeholder:text-[gray] px-2 py-1' />
        </div>
        <div className='max-w-[600px] mb-5'>
            <input type="text" placeholder='Last Name' name='lastName' value = {userData.lastName}  onChange={handleInput} className='w-full min-h-[50px] border border-solid border-[#c4c5c6] placeholder:text-[gray] px-2 py-1'/>
        </div>
        <div className='max-w-[600px] mb-5'>
            <input type="email" placeholder='Email' name='email' value = {userData.email} onChange={handleInput}   className='w-full min-h-[50px] border border-solid border-[#c4c5c6] placeholder:text-[gray] px-2 py-1' />
        </div>
        <div className='max-w-[600px] mb-5'>
            <input type="password" placeholder='Password' name='password' value = {userData.Password} onChange={handleInput}  className='w-full min-h-[50px] border border-solid border-[#c4c5c6] placeholder:text-[gray] px-2 py-1'/>
        </div>
        <div className='max-w-[600px] mb-5'>
            <input type="passowrd" placeholder='Confirm Password' name='password' value = {userData.Confirmpassword} onChange={handleInput}   className='w-full min-h-[50px] border border-solid border-[#c4c5c6] placeholder:text-[gray] px-2 py-1' />
        </div>
        <div className=' max-w-[600px] mb-5'>
            <input type="checkbox" name='consentA'/>
            <label for="box-1">I consent to Herboil processing my personal data in order to send personalized marketing material in accordance with the consent form and the privacy policy.</label>
        </div>
        <div className=' max-w-[600px] mb-5'>
            <input type="checkbox" name='consentA' />
            <label htmlFor="box-2">By clicking create account, I consent to the privacy policy.</label>
        </div>
        <button  className="border border-solid border-[#ff5a3c] text-[white] p-[8px_18px] bg-[#ff5a3c] rounded-[5px]" type = "submit">Sign Up & Continue</button>
      </form>
    </div>
  )
}

export default SignUp

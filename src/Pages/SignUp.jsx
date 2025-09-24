import React, { useContext, useState } from 'react'
import { AuthContext } from './Context/AuthContext'
import Joi from 'joi';

const SignUp = () => {


    const {signup} = useContext(AuthContext);

    const [userData, setUserData] = useState({
        firstName:'',
        lastName:'',
        email: '',
        password: '',
        confirmPassword: '',
        consentB: false,
        dob: '', 
        country:'' , 
        phone: ''
      })

      const schema = Joi.object({
        email: Joi.string().email({ tlds: { allow: false } }).required().messages({  //create validateion in schema 
            'string.empty': 'Email is required',
            'string.email': 'Invalid email address',
        }),
        firstName: Joi.string().min(3).max(20).required().messages({
            'string.empty': ' First Name is required',
            'string.min': 'Name must be at least 3 characters long',
            'string.max': 'Name must not be greater than 20 characters long',
        }),
        lastName: Joi.string().min(3).max(20).required().messages({
            'string.empty': ' Last Name is required',
            'string.min': 'Name must be at least 3 characters long',
            'string.max': 'Name must not be greater than 20 characters long',
        }),
        password: Joi.string().min(8).required().messages({
            'string.empty': 'Password is required',
            'string.min': 'Password must be at least 8 characters long',
        }),
        confirmPassword: Joi.any().valid(Joi.ref("password")).required().messages({
         "any.only": "Passwords do not match",
         "any.required": "Confirm password is required"
        }),
        consentB: Joi.boolean().valid(true).required().messages({
            "any.only": "You must agree to the privacy policy"
        }),
        dob: Joi.date().required().messages({
            'string.empty': ' dob is required'
        }),
        country: Joi.string().required().messages({
            'string.empty': ' country is required'
        }),
        phone: Joi.number().required().messages({
            'string.empty': ' phone is required'
        })
    });

    const [errors, setErrors] = useState({})

      const handleInput = (e) => {
        const {value, name} = e.target;
        setUserData(prev=> ({...prev, [name]:value}));
        console.log(e.target.name)
        console.log(e.target.value)
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        const payload = { ...userData, name: `${userData.firstName} ${userData.lastName}` }
        
        const { error } = schema.validate(userData, { abortEarly: false }); // validate schema for userdata
        console.log(error, 'errors')

         
        if (error) {
            
            const validationErrors = {};

            error.details.forEach((detail) => {
                validationErrors[detail.path[0]] = detail.message;
            }); // map the  details object (message: "Email is required", path: ["email"], type: "string.empty")to the respective  key and  value is thier respective error message 
        
            setErrors(validationErrors);
            console.log(validationErrors); // Log the errors to see them
            return;
        } else {
            signup(payload)
            
        }

      }


  return (
    <>
  <section className='mb-36'>
        <div className="account-bg-image mb-24">
            <div className='container mx-auto'>
                <div>
                    <h1 className='text-[36px] font-semibold'>Account</h1>
                    <p>home sign up</p>
                </div>
            </div>
        </div>
        <div className='max-w-[500px] mx-auto mb-16'>
            <h1 className='text-[41px] text-center font-bold'>Sign UP </h1>
            <h1 className='text-[41px] text-center mb-5 font-bold'>To Create Account</h1>
            <p className='text-[#6a6767] text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Sit aliquid, Non distinctio vel iste.</p>
        </div>
        <div className=' max-w-[600px] mx-auto'>
            <form onSubmit={handleSubmit}>
                <div className='max-w-[600px] mb-9'>
                    <input type="text" placeholder='First Name *' name='firstName' value = {userData.firstName} onChange={handleInput}   className='w-full min-h-[65px] border border-solid border-[#c4c5c6] placeholder:text-[#afaeae] px-4 py-1' />
                    {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
                </div>
                <div className='max-w-[600px] mb-9'>
                    <input type="text" placeholder='Last Name *' name='lastName' value = {userData.lastName}  onChange={handleInput} className='w-full min-h-[65px] border border-solid border-[#c4c5c6] placeholder:text-[#afaeae] px-4 py-1'/>
                    {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
                </div>
                <div className='max-w-[600px] mb-9'>
                    <input type="email" placeholder='Email *' name='email' value = {userData.email} onChange={handleInput}   className='w-full min-h-[65px] border border-solid border-[#c4c5c6] placeholder:text-[#afaeae] px-4 py-1' />
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>
                <div className='max-w-[600px] mb-9'>
                    <input type="date" placeholder='DOB' name='dob' value = {userData.dob}  onChange={handleInput} className='w-full min-h-[65px] border border-solid border-[#c4c5c6] placeholder:text-[#afaeae] px-4 py-1'/>
                    {errors.dob && <p className="text-red-500">{errors.dob}</p>}
                </div>
                <div className='max-w-[600px] mb-9'>
                    <input type="text" placeholder='Country' name='country' value = {userData.country}  onChange={handleInput} className='w-full min-h-[65px] border border-solid border-[#c4c5c6] placeholder:text-[#afaeae] px-4 py-1'/>
                    {errors.country && <p className="text-red-500">{errors.country}</p>}
                </div>
                <div className='max-w-[600px] mb-9'>
                    <input type="number" placeholder='Phone' name='phone' value = {userData.phone}  onChange={handleInput} className='w-full min-h-[65px] border border-solid border-[#c4c5c6] placeholder:text-[#afaeae] px-4 py-1'/>
                    {errors.phone && <p className="text-red-500">{errors.phone}</p>}
                </div>
                <div className='max-w-[600px] mb-9'>
                    <input type="password" placeholder='Password *' name='password' value = {userData.password} onChange={handleInput}  className='w-full min-h-[65px] border border-solid border-[#c4c5c6] placeholder:text-[#afaeae] px-4 py-1'/>
                    {errors.password && <p className="text-red-500">{errors.password}</p>}
                </div>
                <div className='max-w-[600px] mb-9'>
                    <input type="password" placeholder='Confirm Password *' name='confirmPassword' value = {userData.confirmPassword} onChange={handleInput}   className='w-full min-h-[65px] border border-solid border-[#c4c5c6] placeholder:text-[#afaeae] px-4 py-1' />
                    {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
                </div>
                <div className=' text-[#6a6767] max-w-[600px] mb-9 flex justify-center items-center gap-[10px]'>
                    <input type="checkbox" name='consentA' />
                    <label htmlFor="box-1">I consent to Herboil processing my personal data in order to send personalized marketing material in accordance with the consent form and the privacy policy.</label>
                </div>
                <div className=' text-[#6a6767] gap-[10px] max-w-[600px]mb-1 flex items-center'>
                    <input type="checkbox" name='consentB'checked ={userData.consentB} onChange = {(e) => setUserData(prev => ({...prev , consentB:e.target.checked}))} />
                    <label htmlFor="box-2">By clicking create account, I consent to the privacy policy *.</label>
                </div>
                    {errors.consentB && <p className="text-red-500  mb-8">{errors.consentB}</p>}
                <div className='max-w-[600px] mt-8'>
                    <button  className=" w-full border border-solid border-[#ff5a3c] text-[white] p-[8px_18px] bg-[#ff5a3c] rounded-[5px]" type = "submit">Sign Up & Continue</button>
                </div>
            </form>
        </div>
  </section>

    </>
    )
}

export default SignUp

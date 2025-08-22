import React from 'react'
import { UserIcon } from "@heroicons/react/24/solid";
import {LockClosedIcon } from "@heroicons/react/24/solid";



const Login = () => {
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
                    <form>
                        <div className='max-w-[500px] mb-5'>
                            <input type="email" placeholder='Email' className='w-full min-h-[50px] border border-solid border-[#c4c5c6] placeholder:text-[gray] px-2 py-1' />
                        </div>
                        <div className='max-w-[500px] mb-5'>
                            <input type="text" placeholder='Password' className='w-full min-h-[50px] border border-solid border-[#c4c5c6] placeholder:text-[gray] px-2 py-1'/>
                        </div>
                        <div className=' mb-5'>
                        <button className="border border-solid border-[#ff5a3c] text-[white] p-[8px_18px] bg-[#ff5a3c] rounded-[5px]">LOGIN</button>
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
                            <button className="border border-solid border-[#ff5a3c] text-[white] p-[8px_18px] bg-[#ff5a3c] rounded-[5px]">CREATE ACCOUNT</button>
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

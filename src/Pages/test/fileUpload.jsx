import axios from 'axios'
import React, { useState } from 'react'

const FileUpload = () => {
    const [file, setFile] = useState('')
    
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const formData = new FormData();
        
        for (let i= 0 ; file.length > i; i ++ ){
            formData.append('filename', file[i]);
        }
        console.log(formData.get('filename'));
        axios.post('http://localhost:3000/api/test/upload', formData).then(res=> res.data)
    }
   
  return (
    <div>
      <form onSubmit={handleSubmit} method='POST'>
        <div className='mb-[50px]'>
            <p className='mb-5 text-[18px] font-semibold'>Photos  /  Videos</p>
            <div className='grid grid-cols-2 gap-8'>
                <input className='border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px]' type="file" onChange={(e)=> setFile(e.target.files)} placeholder='upload image max-size: 5 mb'/>
                <input className='border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px]' type="file" onChange={(e)=> setFile(e.target.files)} placeholder='upload image max-size: 5 mb'/>
                <input className='border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px]' type="file" onChange={(e)=> setFile(e.target.files)} placeholder='upload image max-size: 5 mb'/>
                <input className='border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px]' type="file" onChange={(e)=> setFile(e.target.files)} placeholder='upload image max-size: 5 mb'/>
                <div>
                    <button className='border-black border-[1px]'>Submit</button>
                </div>
            </div>
        </div>
      </form>
    </div>
  )
}

export default FileUpload

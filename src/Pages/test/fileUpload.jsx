// import axios from 'axios'
// import React, { useState } from 'react'

// const FileUpload = () => {
    
//     const [uploadedFiles, setUploadedFiles] = useState({
//     })

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         const formData = new FormData()

//         Object.keys(uploadedFiles).map(key=> {
//             formData.append(key, uploadedFiles[key])
//         })
        
//         try {
//             const res = await axios.post('http://localhost:3000/api/test/upload', formData);
//             console.log(res.data);
//         } catch (err) {
//             console.error(err);
//         }
//     }
    
//     const handleFileChange = (e)=> {
//         const { name, files } = e.target
        
//         setUploadedFiles(prev=> ({...prev, [name]: files[0]}))
//     }

//     // useEffect(()=> {
//     //     console.log(uploadedFiles, 'uploaded files')
//     // }, [uploadedFiles])

//   return (
//     <div>
//       <form onSubmit={handleSubmit} method='POST'>
//         <div className='mb-[50px]'>
//             <p className='mb-5 text-[18px] font-semibold'>Photos  /  Videos</p>
//             <div className='grid grid-cols-2 gap-8'>
//                 <input className='border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px]' type="file" name='field1' onChange={handleFileChange} placeholder='upload image max-size: 5 mb'/>
//                 <input className='border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px]' type="file" name='field2' onChange={handleFileChange} placeholder='upload image max-size: 5 mb'/>
//                 <input className='border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px]' type="file" name='field3' onChange={handleFileChange} placeholder='upload image max-size: 5 mb'/>
//                 <input className='border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px]' type="file" name='field4' onChange={handleFileChange} placeholder='upload image max-size: 5 mb'/>
//                 <div>
//                     <button className='border-black border-[1px]'>Submit</button>
//                 </div>
//             </div>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default FileUpload

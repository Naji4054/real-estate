import React from 'react'

const Location = ({handleFormChange}) => {

  const token = sessionStorage.getItem('access_token')
    const [uploadedFiles, setUploadedFiles] = useState({
    })
    const handleSubmit = async (e) => {
      e.preventDefault()
      const formData = new FormData()
      Object.keys(uploadedFiles).map(key=> {
        formData.append(key, uploadedFiles[key])
          })
          handleFormChange('details')
          try {
            const res = await axios.post('http://localhost:3000/api/test/upload', formData, {
                headers: {
                  "Authorization" :` Bearer ${token}`
                }
            }).then(res=> {
                const {propertyId} = res.data.data
                sessionStorage.setItem('newPropertyId' , propertyId )
                sessionStorage.setItem('currentStep', 'details')
              })
            console.log(res.data);
        } catch (err) {
            console.error(err);
        }
      }
    
    const handleFileChange = (e)=> {
      const { name, files } = e.target
      setUploadedFiles(prev=> ({...prev, [name]: files[0]}))
  }

  useEffect(()=> {
      console.log(uploadedFiles, 'uploaded files')
  }, [uploadedFiles])

 
  return (
    <div>
       <form name= "location">
            <div className='mb-[50px]'>
              <p className='mb-5 text-[18px] font-semibold'>Location</p>
              <div className='grid grid-cols-2 gap-8'>
                <input  className='border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px]' type="number" placeholder='Latitude'/>
                <input  className='border border-solid border-[#e4ecf2] px-[15px] py-[10px] min-h-[65px]' type="number" placeholder='Longitude'/>
              </div>
            </div>
            <div>
              <button className="border border-solid border-[#ff5a3c] text-[white] p-[8px_18px] bg-[#ff5a3c] w-[300px]">Next</button>
            </div>
        </form>
    </div>
  )

}
export default Location

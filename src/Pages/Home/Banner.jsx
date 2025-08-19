import { useState } from "react";
import Select from "react-dropdown-select";


const Banner =()=> {

    const options = [
        {
          value: 1,
          label: 'Chicago'
        },
        {
          value: 2,
          label: 'London'
        },
        {
          value: 3,
          label: 'New York'
        },
        {
          value: 4,
          label: 'New Jersey'
        }
      ];
    const options1 = [
        {
          value: 1,
          label: 'Open House'
        },
        {
          value: 1,
          label: 'Rent'
        },
        {
          value: 1,
          label: 'Sale'
        },
        {
          value: 1,
          label: 'Sold'
        },
        
      ];
    const options2 = [
        {
          value: 1,
          label: 'Apartments'
        },
        {
          value: 2,
          label: 'Condos'
        },
        {
          value: 2,
          label: 'Houses'
        },
      ];

      const [values, setValues] = useState()

    return (
        <>
        <section className="relative">
            <div className="bg-[url(./../public/images/banner-image.png)] bg-cover w-full min-h-[500px] flex items-center justify-center flex-col">
                <div className="overlay absolute w-full min-h-[500px] bg-[#2a2a2a88]"></div>
                <div className="flex items-center flex-col text-white z-10 gap-4">
                    <p className="flex items-center"><span><img src="/images/home-icon.png" alt="home-icon"/></span>Qurter Real Estate</p>
                    <h1 className="text-[40px] max-w-[500px] text-center">FIND YOUR DREAM HOUSE WITH US</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, sequi.</p>
                    <div>
                        <button className="border border-solid border-[#ff5a3c] text-[white] p-[11px_18px] bg-[#ff5a3c]">MAKE AN ENQUIRY</button>
                    </div>
                </div>
              
            </div>
            <div className="max-w-[70%] mx-auto bg-[#ffffff] relative flex justify-between px-10 py-5 top-[-37px] wrapper items-center shadow-[2px_2px_10px_-1px_rgba(0,0,0,0.3)]">
                <Select placeholder="Locality" options={options} onChange={(values) => setValues(values)}  />
                <Select placeholder="Property Status" options={options1} onChange={(values) => setValues(values)} />
                <Select placeholder="Property Type" options={options2} onChange={(values) => setValues(values)} />
                <div>
                    <button className="border border-solid border-[#ff5a3c] text-[white] p-[11px_18px] bg-[#ff5a3c]">SEARCH</button>
                </div>
            </div>
        </section>
        </>
    )
}
export default Banner;


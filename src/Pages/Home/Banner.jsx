import { useState } from "react";
import Select from "react-dropdown-select";


const Banner =()=> {

    const options = [
        {
          value: 1,
          label: 'Leanne Graham'
        },
        {
          value: 2,
          label: 'Ervin Howell'
        }
      ];

      const [values, setValues] = useState('Ervin Howell')

    return (
        <>
        <section className="relative">
            <div className="bg-[url(./../public/images/banner-image.png)] bg-cover w-full min-h-[650px] flex items-center justify-center flex-col">
                <div className="overlay absolute w-full min-h-[650px] bg-[#2a2a2a88]"></div>
                <div>
                    <p><span><img src="/images/home-icon.png" alt="home-icon"/></span>Qurter Real Estate</p>
                    <h1>FIND YOUR DREAM HOUSE WITH US</h1>
                </div>
              
            </div>
            <div className="max-w-[70%] mx-auto bg-yellow-300 relative flex justify-between px-10 py-5 top-[-37px]">
                <Select options={options} onChange={(values) => setValues(values)} />
                <Select options={options} onChange={(values) => setValues(values)} />
                <Select options={options} onChange={(values) => setValues(values)} />
                <div>
                    <button>SEARCH</button>
                </div>
            </div>
        </section>
        </>
    )
}
export default Banner;


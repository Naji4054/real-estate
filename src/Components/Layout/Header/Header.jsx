import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Pages/Context/AuthContext";

 const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const { isLoggedIn, logout } = useContext(AuthContext)

    return (
        <>
        <nav className="flex justify-between "> 
            <div>
                <img src="/images/brand-logo.png" alt="brand-logo" />
            </div>
            <div>
                <ul className="flex gap-[5em]" >
                    <li><a href="/">Home</a></li>
                    <li className="relative group">
                        <NavLink to={'/about '}>About</NavLink>
                     
                                <div className="bg-red-200 rounded-sm p-4 absolute hidden group-hover:block">
                                    <ul className="flex flex-col">
                                        <button><li>Services</li></button>
                                        <button><li>Our Team</li></button>
                                        <button><li>FAQ</li></button>
                                    </ul>
                                </div> 
                    </li>
                    <li className="relative group">
                        <button onClick={()=> setIsOpen(prev=> !prev)}>Pages</button>
                     
                                <div className="bg-red-200 rounded-sm p-4 absolute hidden group-hover:block">
                                    <ul className="flex flex-col">
                                        <button><li>View Property</li></button>
                                        <button><li>Add Listing</li></button>
                                        <button><li>Contact</li></button>
                                    </ul>
                                </div> 
                    </li>
                    <li>Property</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className="flex item gap-2">
                <div>
                    <button className="border border-solid border-[#ff5a3c] text-[white] p-[8px_18px] bg-[#ff5a3c] rounded-[5px]">ADD LISTING</button>
                </div>
                {
                    !isLoggedIn && (<div>
                                        <Link to={'/login'} > <button className="border border-solid border-[#ff5a3c] text-[white] p-[8px_18px] bg-[#ff5a3c] rounded-[5px]">LOGIN</button></Link>
                                  </div>)
                }
                {
                    isLoggedIn && <button className="border border-solid border-[#ff5a3c] text-[white] p-[8px_18px] bg-[#ff5a3c] rounded-[5px]" onClick={logout}>LOGOUT</button>
                }
            </div>
        </nav>
        </>
    )
 }
 export default Header;
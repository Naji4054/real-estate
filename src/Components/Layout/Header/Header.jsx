import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Pages/Context/AuthContext";

 const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const { isLoggedIn, logout } = useContext(AuthContext)

    return (
        <>
        <nav className="flex justify-between p-[2px]"> 
            <div>
                <img src="/images/brand-logo.png" alt="brand-logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex gap-[5em]" >
                    <li className="font-medium text-[17px]">
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li className="font-medium text-[17px]">
                        <Link to={'/about '}>About</Link>
                    </li>
                    <li className="font-medium text-[17px]">
                        <Link to={'/properties'}>Properties</Link>
                    </li>
                    <li className="font-medium text-[17px]">
                        <Link to={'/'}>Contact</Link>
                    </li>
                </ul>
            </div>

            <div className="flex item gap-2 items-center">
                <div>
                   <Link to ={'/addlisting'}> <button className="border border-solid border-[#ff5a3c] text-[white] p-[5px_18px] bg-[#ff5a3c] rounded-[5px]">ADD LISTING</button></Link>
                </div>
                {
                    !isLoggedIn && (<div>
                                        <Link to={'/login'} > <button className="border border-solid border-[#ff5a3c] text-[white] p-[5px_18px] bg-[#ff5a3c] rounded-[5px]">LOGIN</button></Link>
                                  </div>)
                }
                {
                    isLoggedIn && (<div><button className="border border-solid border-[#ff5a3c] text-[white] p-[5px_18px] bg-[#ff5a3c] rounded-[5px]" onClick={logout}>LOGOUT</button></div>)
                }
            </div>
        </nav>
        </>
    )
 }
 export default Header;
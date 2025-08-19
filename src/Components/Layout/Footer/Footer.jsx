const Footer = () => {
    return (
        <>
        <section className="bg-[#171b2a] grid grid-cols-5 gap-7 text-white p-[50px_25px]">
            <div className="max-w-[330px] ">
                <div  className="mb-5">
                    <img src="/images/brand-logo.png" alt="brand-logo" />
                </div>
                <div className="mb-3">
                    <p className="text-[#d7d4d4]">Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.
                    </p>
                </div>
                <div className="mb-3">
                    <p className="flex items-center gap-2 text-[#d7d4d4]"><span><img src="/images/location-pin.png" alt="location-pin" /></span>Brooklyn, New York, United States</p>
                </div>
                <div className="mb-3">
                    <p className="flex items-center gap-2 text-[#d7d4d4]"><span><img src="/images/phone-icon.png" alt="location-pin" /></span>+0123-456789</p>
                </div>
                <div className="mb-3">
                    <p className="flex items-center gap-2 text-[#d7d4d4]"><span><img src="/images/mail-icon.png" alt="location-pin" /></span>example@example.com</p>
                </div>
                <div className="flex gap-4">
                    <a href="#"><img src="/images/facebook-icon.png" alt="faceboook" /></a>
                    <a href="#"><img src="/images/linkedin-icon.png" alt="linkedin" /></a>
                    <a href="#"><img src="/images/twitter-icon.png" alt="twitter" /></a>
                    <a href="#"><img src="/images/youtube-icon.png" alt="youtube" /></a>
                </div>
            </div>

            <div>
                <div>
                    <h4 className="text-[21px] mb-5">Company</h4>
                </div>
                <div>
                    <ul>
                        <li className="mb-3 text-[#d7d4d4]">About</li>
                        <li className="mb-3 text-[#d7d4d4]">Blog</li>
                        <li className="mb-3 text-[#d7d4d4]">All Products</li>
                        <li className="mb-3 text-[#d7d4d4]">Locations Map</li>
                        <li className="mb-3 text-[#d7d4d4]">FAQ</li>
                        <li className="mb-3 text-[#d7d4d4]">Contact Us</li>
                    </ul>
                </div>
            </div>
            <div>
                <div>
                    <h4 className="text-[21px] mb-5">Services</h4>
                </div>
                <div>
                    <ul>
                        <li className="mb-3 text-[#d7d4d4]">Order Tracking</li>
                        <li className="mb-3 text-[#d7d4d4]">Wish List</li>
                        <li className="mb-3 text-[#d7d4d4]">Login</li>
                        <li className="mb-3 text-[#d7d4d4]">My Account</li>
                        <li className="mb-3 text-[#d7d4d4]">Terms & Conditions</li>
                        <li className="mb-3 text-[#d7d4d4]">Promotional Offers</li>
                    </ul>
                </div>
            </div>
            <div>
                <div>
                    <h4 className="text-[21px] mb-5">Customer Care</h4>
                </div>
                <div>
                    <ul>
                        <li className="mb-3 text-[#d7d4d4]">Login</li>
                        <li className="mb-3 text-[#d7d4d4]">My account</li>
                        <li className="mb-3 text-[#d7d4d4]">Wish List</li>
                        <li className="mb-3 text-[#d7d4d4]">Order tracking</li>
                        <li className="mb-3 text-[#d7d4d4]">FAQ</li>
                        <li className="mb-3 text-[#d7d4d4]">Contact Us</li>
                    </ul>
                </div>
            </div>
            <div>
                <div>
                    <h4 className="text-[21px] mb-5">News Letter</h4>
                </div>
                <div className="mb-3">
                    <p className="mb-3 text-[#d7d4d4]">Subscribe to our weekly Newsletter and receive updates via email.</p>
                    <span className="flex items-center text-[#d7d4d4]"><input  className="flex basis-[85%] min-h-[40px]" type="email" placeholder="Email*" /><div className="bg-[#ff5a3c]"><img className="p-[10px]" src="/images/messenger.png" alt="messenger" /></div></span>
                </div>
                <div>
                <h4 className="mb-3 text-[#d7d4d4]">We Accept</h4>
                <img src="/images/payment-options.png" alt="payment" />
                </div>
            </div>
            
        </section>
        </>
    )
}
export default Footer;


const Footer = () => {
    return (
        <>
        <section className="bg-[#171b2a] grid grid-cols-5 gap-7 text-white">
            <div className="max-w-[330px] ">
                <div  className="mb-5">
                    <img src="/images/brand-logo.png" alt="brand-logo" />
                </div>
                <div className="mb-3">
                    <p>Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.
                    </p>
                </div>
                <div className="mb-3">
                    <p className="flex items-center gap-2"><span><img src="/images/location-pin.png" alt="location-pin" /></span>Brooklyn, New York, United States</p>
                </div>
                <div className="mb-3">
                    <p className="flex items-center gap-2 "><span><img src="/images/phone-icon.png" alt="location-pin" /></span>+0123-456789</p>
                </div>
                <div className="mb-3">
                    <p className="flex items-center gap-2"><span><img src="/images/mail-icon.png" alt="location-pin" /></span>example@example.com</p>
                </div>
            </div>

            <div>
                <div>
                    <h4 className="text-[21px] mb-5">Company</h4>
                </div>
                <div>
                    <ul>
                        <li className="mb-3">About</li>
                        <li className="mb-3">Blog</li>
                        <li className="mb-3">All Products</li>
                        <li className="mb-3">Locations Map</li>
                        <li className="mb-3">FAQ</li>
                        <li className="mb-3">Contact Us</li>
                    </ul>
                </div>
            </div>
            <div>
                <div>
                    <h4 className="text-[21px] mb-5">Services</h4>
                </div>
                <div>
                    <ul>
                        <li className="mb-3">Order Tracking</li>
                        <li className="mb-3">Wish List</li>
                        <li className="mb-3">Login</li>
                        <li className="mb-3">My Account</li>
                        <li className="mb-3">Terms $ Conditions</li>
                        <li className="mb-3">Promotional Offers</li>
                    </ul>
                </div>
            </div>
            <div>
                <div>
                    <h4 className="text-[21px] mb-5">Customer Care</h4>
                </div>
                <div>
                    <ul>
                        <li className="mb-3">Login</li>
                        <li className="mb-3">My account</li>
                        <li className="mb-3">Wish List</li>
                        <li className="mb-3">Order tracking</li>
                        <li className="mb-3">FAQ</li>
                        <li className="mb-3">Contact Us</li>
                    </ul>
                </div>
            </div>
            <div>
                <div>
                    <h4 className="text-[21px] mb-5">News Letter</h4>
                </div>
                <div className="mb-3">
                    <p className="mb-3">Subscribe to our weekly Newsletter and receive updates via email.</p>
                    <span className="flex items-center"><input  className="flex basis-[85%] min-h-[40px]" type="email" placeholder="Email*" /><img src="/images/messenger.png" alt="messenger" /></span>
                </div>
                <div>
                <h4 className="mb-3">We Accept</h4>
                <img src="/images/payment-options.png" alt="payment" />
                </div>
            </div>
            
        </section>
        </>
    )
}
export default Footer;


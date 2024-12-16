const Footer = () => {
    return (
        <footer className="w-full py-12 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Address Section */}
                    <div className="text-[#9F9F9F] space-y-4">
                        <p className="text-base leading-6">
                            400 University Drive Suite 200 Coral Gables,<br />
                            FL 33134 USA
                        </p>
                    </div>

                    {/* Links Section */}
                    <div className="space-y-6">
                        <ul className="space-y-4">
                            <li className="text-[#9F9F9F] font-medium text-base">Links</li>
                            <li className="hover:text-pink cursor-pointer">Home</li>
                            <li className="hover:text-pink cursor-pointer">Shop</li>
                            <li className="hover:text-pink cursor-pointer">About</li>
                            <li className="hover:text-pink cursor-pointer">Contact</li>
                        </ul>
                    </div>

                    {/* Help Section */}
                    <div className="space-y-6">
                        <ul className="space-y-4">
                            <li className="text-[#9F9F9F] font-medium text-base">Help</li>
                            <li className="hover:text-pink cursor-pointer">Payment Options</li>
                            <li className="hover:text-pink cursor-pointer">Returns</li>
                            <li className="hover:text-pink cursor-pointer">Privacy Policies</li>
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div className="space-y-6">
                        <h3 className="text-[#9F9F9F] font-medium text-base">Newsletter</h3>
                        <div className="space-y-4">
                            <div className="relative">
                                <input 
                                    type="email" 
                                    placeholder="Enter Your Email Address"
                                    className="w-full pb-2 text-sm text-[#9F9F9F] border-b border-black focus:outline-none"
                                />
                            </div>
                            <button className="text-sm font-medium border-b border-black hover:text-pink transition-colors">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-[#D9D9D9]">
                    <p className="text-base leading-6 text-center md:text-left">
                        2022 Meubel House. All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;


import Image from "next/image"
import { Search } from 'lucide-react';

const Navbar = () => {
    return (
        <div>
            <nav className="w-full bg-slate-400 py-3 px-4 text-inherit flex flex-wrap justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center space-x-3">
                    <Image 
                        src="/Hekto.png" 
                        alt="Logo" 
                        width={98} 
                        height={34} 
                        className="font-sans"
                    />
                </div>

                {/* Navigation Links */}
                <ul className="hidden md:flex md:space-x-8 text-sm">
                    <li><a href="/" className="hover:text-red-500 opacity-5">Home</a></li>
                    <li><a href="" className="hover:text-red-500">Page</a></li>
                    <li><a href="" className="hover:text-red-500">Product</a></li>
                    <li><a href="" className="hover:text-red-500">Blog</a></li>
                    <li><a href="" className="hover:text-red-500">Shop</a></li>
                    <li><a href="" className="hover:text-red-500">Contact</a></li>
                </ul>

                {/* Search Section */}
                <div className="flex items-center space-x-2">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="hidden md:block w-40 h-8 px-2 border rounded"
                    />
                    <button className="p-2 bg-white border rounded">
                        <Search size={20} />
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button className="p-2">
                        {/* Replace with a hamburger menu icon */}
                        <Search size={24} />
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown */}
            <div className="md:hidden bg-slate-300 w-full flex flex-col space-y-2 px-4 py-2">
                <a href="/" className="hover:text-red-500">Home</a>
                <a href="" className="hover:text-red-500">Page</a>
                <a href="" className="hover:text-red-500">Product</a>
                <a href="" className="hover:text-red-500">Blog</a>
                <a href="" className="hover:text-red-500">Shop</a>
                <a href="" className="hover:text-red-500">Contact</a>
            </div>
        </div>
    );
};

export default Navbar;

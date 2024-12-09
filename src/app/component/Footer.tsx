
import Image from "next/image"
const Footer = () => {
    return (

<div>
<footer className="bg-slate-200 text-gray-400 py-10">
  <div className="container mx-auto px-6">
    <div className="flex flex-wrap justify-between">
      
      <div className="w-full md:w-1/4 text-center md:text-left mb-8 md:mb-0">
      <Image src="/Hekto.png" alt="Logo" width={98}  height={34}    className='weight-700 size-[34px] line height-[34px] font-sans text-1x text-[#ODOE43]  top-3px'></Image>
        <p className="text-sm">© 2024 Company Name. All rights reserved.</p>
      </div>

      
      <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
        <h4 className="text-lg font-semibold mb-4">Categories</h4>
        <ul>
          <li><a href="#" className="text-sm hover:text-blue-400">Laptop & Computer</a></li>
          <li><a href="#" className="text-sm hover:text-blue-400">Camera & Photography</a></li>
          <li><a href="#" className="text-sm hover:text-blue-400">Smart Phone & Tablet</a></li>
          <li><a href="#" className="text-sm hover:text-blue-400">Water prof Headfone</a></li>
        </ul>
      </div>

      
      <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
        <h4 className="text-lg font-semibold mb-4">Customer Care</h4>
        <ul>
          <li><a href="#" className="text-sm hover:text-blue-400">Contact Us</a></li>
          <li><a href="#" className="text-sm hover:text-blue-400">FAQs</a></li>
          <li><a href="#" className="text-sm hover:text-blue-400">Shipping Info</a></li>
          <li><a href="#" className="text-sm hover:text-blue-400">Returns</a></li>
        </ul>
      </div>

      
      <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
        <h4 className="text-lg font-semibold mb-4">Pages</h4>
        <ul>
          <li><a href="#" className="text-sm hover:text-blue-400">About Us</a></li>
          <li><a href="#" className="text-sm hover:text-blue-400">Privacy Policy</a></li>
          <li><a href="#" className="text-sm hover:text-blue-400">Terms of Service</a></li>
          <li><a href="#" className="text-sm hover:text-blue-400">Blog</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
</div>
    )
    }
    export default Footer
import React, { useState } from 'react'
import { LuBarChart2 } from "react-icons/lu";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [show , setShow] = useState(false)
    const handelshow = ()=>{
        setShow(!show)
    }
  return (
    <>
    <nav className='pt-[33px]'>
        <div className="container">
            <div className="menu_row flex justify-between">
                 <div className="menu_logo">
                    <img src="images/EbTan.png" alt="logo" />
                 </div>
                 <div>
                    <div className="menu relative">
                    <LuBarChart2 onClick={handelshow} className='text-3xl -rotate-90 active:text-brand_color'/>
                    {
                        show&&
                    <ul className='w-[400px] p-5 rounded-xl bg-brand_color text-center flex flex-col gap-5 absolute right-0 top-full'>
                        <li><Link className='text-lg font-bold text-white'>Home</Link></li>
                        <li><Link className='text-lg font-bold text-white'>About</Link></li>
                        <li><Link className='text-lg font-bold text-white'>Product</Link></li>
                        <li><Link className='text-lg font-bold text-white'>Contact</Link></li>
                    </ul>
                    
                    }

                    </div>
                 </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
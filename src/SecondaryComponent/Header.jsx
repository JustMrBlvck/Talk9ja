import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
       
       <div className='h-[150px] bg-[green] hidden md:hidden lg:grid lg:grid-rows-[25%,50%,25%]'>
           <div className='bg-[#000] grid grid-cols-[20%,55%,25%] border-b-[.3px] border-[white]'>
                 <div className='flex justify-center items-center'>
                    <button className='text-2xl text-[white]'><FaBarsStaggered /></button> 
                    <span className='text-SecondaryColor font-Custom font-medium text-[12px] ml-[30px]'>TRENDING</span>
                 </div>

                 <div className='text-[#c7c5c5] flex items-center text-[15px]'>
                      <a href="">Whew! Remy Ma Responds After Tay Roc Shared A Message About....</a>
                 </div>

                 <div className='text-white flex items-center justify-center gap-3'>
                    <a href=""><FaSearch /></a>
                    <a href=""><FaTiktok /></a>
                 </div>
              </div>

            <div className='bg-[#1A1B1D] grid grid-cols-[25%,50%,25%]'>
                 <div className='bg-[blue]'>
                     {/* <img src={} alt="" /> */}
                 </div>

                 <div className='flex justify-center items-center text-SecondaryColor font-Custom font-bold text-4xl'>
                     <h1>The Scene 9ja</h1>
                 </div>

                 <div className='text-SecondaryColor flex justify-center items-center gap-3'>
                     <a href=""><FaFacebookF /></a>
                     <a href=""><FaXTwitter /></a>
                     <a href=""><FaInstagram /></a>
                     <a href=""><FaYoutube /></a>
                     <a href=""><FaTiktok /></a>
                 </div>
              </div>

              
              <div className='bg-[#FFFF] text-[#1A1B1D] font-Custom font-bold flex justify-center items-center border-b-[2px] borader-[green]'>
                 <ul className='flex gap-5'>
                     <li><Link>Entertainment</Link></li>
                     <li><Link>Events</Link></li>
                     <li><Link to='/news' className='hover:border-b-[2px] border-[#D7AE61]'>News</Link></li>
                     <li><Link>Politics</Link></li>
                     <li><Link>Sports</Link></li>
                     <li><Link>Fashion</Link></li>
                     <li><Link>Tech</Link></li>
                     <li><Link>Beauty</Link></li>
                 </ul>
              </div>
        </div>
           
    </div>
  )
}

export default Header
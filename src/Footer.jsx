import React from 'react'

const Footer = () => {
    return (
        <>
            <div id='footerWrapper' className='bg-[#00252E]  lg:h-[50vh] box-content relative flex items-center justify-center mt-[10vh] pt-[15vh]'>
                <div id="modal" style={{ boxShadow: "0px 0px 14px 0px #000000" }} className='absolute w-[90%] h-[20vh] bg-white flex flex-col items-center justify-center -top-[10vh] rounded-xl gap-4
                     md:w-[30%] md:h-[25vh]
                
                '>
                    <p className='text-[20px] font-semibold font-[poppins] md:text-2xl'>Ready To Build Your Community?</p>
                    <button style={{ boxShadow: "2px 3px 6px 1px #FF52C12A" }} className='w-[280px] h-[40px] text-white font-bold text-sm md:text-lg bg-[#FF52C1] hover:bg-[#FF9ADB] rounded-full shado'>Get started for free</button>

                </div>

                <div id="footer" className='h-full  w-[90%] flex justify-around content-start flex-col md:h-[55%]'>
                    <div id="logo" className='mb-3 bg-transparent pt-4 w-[65%] lg:w-[20%]'>
                        <img src="/logo.png" alt="" className='h-full w-[70%]' style={{ fill: 'white' }} />
                    </div>

                    <div id="content" className='flex text-white justify-evenly text-[14px] flex-1 gap-4 flex-col md:flex-row'>
                        <div id='details' className='w-full gap-3 flex flex-col justify-evenly text-lg'>
                            <p id="loc" className='flex '>
                                <span className=' lg:mr-4 w-[10%] flex items-start mr-4'><img src="./Icons/loc.svg" alt="" /></span>
                                <li className='list-none list-outside'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </li>
                            </p>

                            <p id="mobile" className='flex'>
                                <span className=' flex items-start mr-4'><img src="./Icons/phone.svg" alt="" /></span>
                                +1-543-123-4567
                            </p>
                            <p id="mail" className='flex'>
                                <span className=' flex items-start mr-4'><img src="./Icons/mail.svg" alt="" /></span>
                                example@huddle.com
                            </p>
                        </div>

                        <div id="general" className='w-full text-lg gap-4 flex flex-col flex-wrap lg:max-h-[150px]'>
                            <p>About us</p>
                            <p>What we do</p>
                            <p>FAQ</p>
                            <p>Carreer</p>
                            <p>Blog</p>
                            <p>Contact Us</p>
                        </div>

                        <div className='w-full text-2xl flex flex-col items-center gap-3'>
                            <div id="socialMedia" className='flex items-center justify-center gap-4'>
                                <span id="facebook" className='border rounded-full p-2 px-3 hover:text-[#FF52C1] hover:border-[#FF52C1]'>
                                    <i className="ri-facebook-fill text-3xl"></i>
                                </span>
                                <span id="twitt" className='border rounded-full p-2 hover:text-[#FF52C1] hover:border-[#FF52C1]'>
                                    <i className="ri-twitter-fill text-3xl"></i>
                                </span>
                                <span id='insta' className='border rounded-full p-2 hover:text-[#FF52C1] hover:border-[#FF52C1]'>
                                    <i className="ri-instagram-fill text-3xl"></i>
                                </span>
                            </div>
                            <p className='text-sm'>&copy; Copyright 2018 Huddle. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Footer
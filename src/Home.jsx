import React from 'react'
const Home = () => {
  return (
    <div id='heroWrapper' className='h-screen w-full bg-[#edfbff]'>

      <div id='bg' className="w-full h-full absolute z-0">
        <img src="/topRight.svg" className='h-[70%] absolute top-0 right-0' />
        <img src="/topLeft.svg" className='h-[70%] absolute top-0 left-0' />
      </div>
      <div id='fg' className="w-full h-full absolute bg-transparent pt-[20px]">

        <header className="h-[10vh] flex items-center justify-between px-3 lg:px-5">
          <img src="/logo.png" alt="huddle" className='lg:h-[40%]' />
          <button id="freeBtn" className='md:w-[200px] md:h-[48px] py-4 md:py-0 w-[40%] font-bold text-[18px] hover:text-[#808E9A] text-[#00252E] bg-white rounded-full shadow-md'>Try it free</button>
        </header>


        <main className='lg:pt-[71px] p-3 md:p-20 flex flex-col md:flex-row items-center justify-evenly md:justify-between w-[100%] h-[90%]'>
          <div id="left" className='flex items-center justify-start md:justify-center flex-col w-full md:w-[47%] md:h-full'>
            <div id="group2" className=' min-h-max h-[65%] flex pt-3 flex-col gap-5 items-center md:justify-between md:items-start lg:pl-[20px]'>
              <h1 className='font-[poppins] font-semibold text-3xl lg:text-5xl md:text-left text-center'>
                Build The Community <br /> Your Fans Will Love
              </h1>
              <p className='md:text-left text-center w-[80%] text-[16px] md:text-[20px] md:px-0 font-[open sans] lg:pr-20'>
                Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
              </p>
              <button style={{ boxShadow: "2px 3px 6px 1px #FF52C12A" }} className='w-[280px] shrink-0 h-[56px] text-white font-bold text-sm bg-[#FF52C1] hover:bg-[#FF9ADB] rounded-full shado'>Get started for free</button>
            </div>
          </div>

          <div id="right_imgWrapper" className='md:w-[50%] w-[80%]'>
            <img src="/Hero.png" alt="" className='h-full w-full' />
          </div>

        </main>
      </div>
    </div>
  )
}

export default Home
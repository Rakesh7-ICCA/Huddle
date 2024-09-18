import React from 'react'

const Card = ({ img, text, side, head, content}) => {

  let s = side ? "-reverse" : ""
  console.log(s)
  return (
    <div id='card' className={`w-[90%] rounded-xl justify-items-center relative grid h-[588px] 
      md:h-[50%] md:flex md:flex-row${s} md:items-center md:justify-evenly
      lg:px-[5%] lg:h-[50vh] 
    `}>
      <div id="imgWrapper" className='w-[75%] md:w-[75%] lg:h-full flex items-center justify-center
      '>
        <img src={"/" + img} alt="" className=' w-[75%]' />
      </div>
      <div id="detail" className='flex px-[50px] flex-col justify-evenly items-center 
      md:justify-center md:items-start md:pl-[10%] 
      lg:px-[3%] lg-w[50%]'>

        <h2 className='text-xl font-semibold font-[poppins] 
        lg:text-2xl 
        md:mb-[20px]'>
          {head}
          </h2>
        <p className='text-xl  font-normal text-center text-[#808E9A] 
        md:text-lg md:text-left'>
          {content}
          </p>

      </div>
    </div>

  )
}

export default Card
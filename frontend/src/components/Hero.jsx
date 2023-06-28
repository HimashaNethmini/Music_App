import React from 'react'

function Hero() {
  return (
    <div className='wrapper bg-[#081730] flex items-center justify-between px-[5rem] w-[100%] h-[35rem] relative'>

        {/* Left side */}
        <div className="headings flex flex-col items-start justify-center h-[100%]">
            <span>
                Experience The
            </span>

            <span>
                <b> Best Quality Music  </b>
            </span>

            <span className='text-[15px] text-[#52D6E]'>
                Come on Come on turn the App on
                <br/>
                it's friday night and won't be lone
            </span>
        </div>

        {/* Right side */}
        <div className="images">

        </div>
      
    </div>
  )
}

export default Hero;

import React from 'react'

function CenterMenu() {
    const lifeStyle = "mr-[3rem] hover:cursor-pointer"

  return (
    <div className='menu flex'>
        <ul className='flex w-[100%] justify-between'>
            <li className={lifeStyle}>Home</li>
            <li className={lifeStyle}>About</li>
            <li className={lifeStyle}>Preformer</li>
            <li className={lifeStyle}>Event Schedule</li>
        </ul>
      
    </div>
  )
}

export default CenterMenu;

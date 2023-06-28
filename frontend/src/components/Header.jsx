import React from 'react'
import CenterMenu from './CenterMenu';

function Header() {
  return (
    <div className='header'>
        <img src={require ("../img/MuzicLogo.png")} alt="" />
        <CenterMenu/>
        <div className="buttons">
            <button>Sign up</button>
            <button>Log in</button>
        </div>
      
    </div>
  )
}

export default Header;

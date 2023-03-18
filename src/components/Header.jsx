import React from 'react'
// imagen
import  logo  from '../assets/logo-diego.png'
 

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href="#">
            <img className='h-[75px] to-gray-800 from-gray-800 bg-top mix-blend-darken' src={logo} alt="imagen logo" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
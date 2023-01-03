import React from 'react'
import User from './User'

const Header = () => {
  return (
    <header className='flex justify-between items-center p-5 text-sm text-gray-700'>
      <section className='block relative'>
        <ul className='flex space-x-4 items-center'>
            <li className='link'>About</li>
            <li className='link'>Store</li>
        </ul>
      </section>

      <section>
      <ul className='flex space-x-4 items-center'>
            <li className='link'>Gmail</li>
            <li className='link'>Images</li>
            <User />
        </ul>
      </section>
    </header>
  )
}

export default Header

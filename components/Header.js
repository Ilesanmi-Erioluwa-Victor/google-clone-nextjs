import React from 'react'
import User from './User'

const Header = () => {
  return (
    <header className='flex justify-between items-center p-5 text-sm text-gray-700'>
      <section className='block relative'>
        <ul className='flex space-x-4 items-center'>
            <li>About</li>
            <li>Store</li>
        </ul>
      </section>

      <section>
      <ul className='flex space-x-4 items-center'>
            <li>Gmail</li>
            <li>Images</li>
            <User />
        </ul>
      </section>
    </header>
  )
}

export default Header

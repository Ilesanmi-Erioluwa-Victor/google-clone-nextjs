import React from 'react'
import User from './User'

const Header = () => {
  return (
    <header>
      <section className=''>
        <ul>
            <li>About</li>
            <li>Store</li>
        </ul>
      </section>

      <section>
      <ul>
            <li>Gmail</li>
            <li>Images</li>
            <User />
        </ul>
      </section>
    </header>
  )
}

export default Header

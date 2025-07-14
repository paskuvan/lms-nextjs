import React from 'react'


const navItems = [
    { label:'Home', href: '/' },
    { label: 'Companions', href: '/companions' },
    { label: 'My Journey', href: 'my-journey' },
]

const NavItems = () => {
  return (
    <nav className='flex items-center gap-4'>
     Nav items
      </nav>
  )
}

export default NavItems
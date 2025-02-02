import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='rootLayout'>
        <header>
            <Link to="/">
                <img src="/logo.png" alt="Logo" />
                <span>Frooty AI</span>
            </Link>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default RootLayout
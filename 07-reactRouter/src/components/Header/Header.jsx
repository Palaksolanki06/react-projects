import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          <div className="flex items-center lg:order-2">
            <Link to="/" className="text-gray-800 px-4 py-2">Log in</Link>
            <Link to="/" className="text-white bg-orange-700 px-4 py-2 rounded-lg">
              Get started
            </Link>
          </div>

          <ul className="flex gap-6">
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/github">
                Github
              </NavLink>
            </li>
          </ul>

        </div>
      </nav>
    </header>
  )
}
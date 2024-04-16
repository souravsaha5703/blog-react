import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-slate-950 w-full p-2">
        <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-between max-md:flex-col">
          <span className="text-sm text-gray-500 sm:text-center font-noto">© 2023 <a href="https://flowbite.com/" className="hover:underline">Blog™</a>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-lg font-medium text-gray-500 sm:mt-0 font-noto capitalize max-md:flex-col">
            <li>
              <Link className="hover:underline me-4 md:me-6">About</Link>
            </li>
            <li>
              <Link className="hover:underline me-4 md:me-6">Contact us</Link>
            </li>
            <li>
              <Link className="hover:underline me-4 md:me-6">Privacy policy</Link>
            </li>
            <li>
              <Link className="hover:underline me-4 md:me-6">Licensing</Link>
            </li>
          </ul>
        </div>
      </footer>
  )
}

export default Footer
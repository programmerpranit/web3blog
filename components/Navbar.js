import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { load } from '../src/func';


const Navbar = () => {

  const [addressAccount, setAddressAccount] = useState(null)

  const [refresh, setRefresh] = useState(true);


  const loadBlogs = () => {
    load().then((e) => {
      setAddressAccount(e.addressAccount);
    });
  }

  useEffect(() => {
    if (!refresh) return;

    setRefresh(false);

    loadBlogs();
  });



  return (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">W3Blog</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">Welcome</a>
      <a className="mr-5 hover:text-gray-900">{addressAccount}</a>
    </nav>

    <Link href={'/addblog'}><button className="inline-flex items-center bg-black border-0 py-1 px-3 focus:outline-none rounded text-base text-white mt-4 md:mt-0">Add Blog</button></Link>
  </div>
</header>
  )
}

export default Navbar
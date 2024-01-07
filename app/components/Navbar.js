'use client';
import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../images/textlogo.svg';
import facebook from '../images/faceboo-icon.svg';

const Navbar = () => {
  const router = useRouter();
  let element;

  const gotoId = (id) => {
    if (router.pathname !== '/') {
      router.push('/');
      setTimeout(() => {
        element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 500);
    } else {
      element = document.getElementById(id);
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  let menuRef = useRef();

  return (
    <nav className="flex justify-between items-center w[92%] mx-28 my-5 rounded-xl py-4 px-4 bg-purple max-md:m-0 max-md:rounded-none  ">
      <div>
        <Image src={logo} width={200} height={50} alt="logo" />
      </div>
      <div className="nav-links duration-500 md:static absolute max-md:bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
        <div className="flex md:flex-row flex-col space-x-8 md:items-center md:gap-[4vw]">
          <nav className="flex sm:justify-center space-x-4">
            {['Home', 'About us', 'Gallery', 'Contact '].map((title) => (
              <p
                key={title}
                className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 cursor-pointer text-white"
                onClick={() => {
                  gotoId(title.toLowerCase());
                }}
              >
                {title}
              </p>
            ))}
          </nav>
        </div>
      </div>
      <div className="flex gap-x-4">
        <Image src={facebook} height={20} width={40} />
        <button className="btn btn-white rounded-xl">DONATE </button>
      </div>
    </nav>
  );
};

export default Navbar;

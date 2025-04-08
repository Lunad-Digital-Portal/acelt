// "use client";
// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleToggle = () => {
//     setMenuOpen((prev) => !prev);
//   };
// const navlink=[
//   {label:"Home",link:"/"},
//   {label:"Products",link:"/pages/products"},
//   {label:"Projects",link:"/pages/projects"},
//   {label:"About",link:"/pages/about-us"},
//   {label:"Contact",link:"/pages/contact-us"},
// ]
//   return (
    
//     <header className="sticky top-0 left-0 right-0 flex  py-3 px-4 sm:px-10  font-[sans-serif] min-h-[70px] tracking-wide z-50 text-transparent bg-clip bg-gray-50">
//       <div className="flex flex-wrap items-center gap-5 justify-between w-full">
//         {/* Logo */}
//         <Link href="/">
//           <Image
//             src='/logo.png'
//             alt="logo"
//             width={144}
//             height={40}
//             className="w-36"
//           />
//         </Link>

//         <div
//           className={`max-lg:hidden lg:block ${
//             menuOpen ? 'block' : 'hidden'
//           } max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}
//         >
//           {/* Close Button */}
//           <button
//             onClick={handleToggle}
//             className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-3.5 h-3.5 fill-black"
//               viewBox="0 0 320.591 320.591"
//             >
//               <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
//               <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
//             </svg>
//           </button>

//           {/* Menu Items */}
//           <ul className="lg:flex lg:justify-between lg:ml-14 lg:gap-x-5 max-lg:space-y-3 max-lg:fixed  max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 ">
//             <li className="mb-6 hidden max-lg:block">
//               <Link href="/">
//                 <Image
//                   src="/logo.png"
//                   alt="logo"
//                   width={144}
//                   height={40}
//                   className="w-36"
//                 />
//               </Link>
//             </li>
//             {navlink.map((item,index) => (
//               <li key={index} className="max-lg:border-b max-lg:py-3 px-3 ">
//                 <Link
//                   href={`${item.link}`}
//                   className="lg:hover:text-red-600 text-gray-800  block font-light text-[15px]"
//                 >
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Open Button */}
//         <button
//           onClick={handleToggle}
//           className="lg:hidden ml-auto"
//         >
//           <svg
//             className="w-7 h-7"
//             fill="#000"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fillRule="evenodd"
//               d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </button>
//       </div>
//     </header>
//   );
// }
"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest(".lg:hidden")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navlink = [
    { label: "Home", link: "/" },
    { label: "Products", link: "/pages/products" },
    { label: "Projects", link: "/pages/projects" },
    { label: "About", link: "/pages/about-us" },
    { label: "Contact", link: "/pages/contact-us" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 flex items-center justify-between py-4 px-6 sm:px-10 font-sans text-gray-800 bg-white shadow-md z-50 border-b border-gray-100">
      {/* Logo */}
      <Link href="/" className="flex-shrink-0">
        <Image
          src="/logo.png"
          alt="logo"
          width={144}
          height={40}
          className="w-28 transition-transform hover:scale-105 max-sm:w-20"
        />
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden lg:block">
        <ul className="flex space-x-6">
          {navlink.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        onClick={handleToggle}
        className="lg:hidden p-2 text-gray-700 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleToggle}
          className="absolute top-4 right-4 text-gray-700 hover:text-red-600 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Menu Content */}
        <div className="mt-14 p-6">
          <Link href="/" className="mb-6 block">
            <Image
              src="/logo.png"
              alt="logo"
              width={144}
              height={40}
              className="w-24"
            />
          </Link>
          <ul className="space-y-4">
            {navlink.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className="text-gray-700 hover:text-red-600 text-base font-medium block py-2 px-4 rounded hover:bg-gray-100 transition-colors duration-200"
                  onClick={handleToggle} // Close menu on link click
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay for closing menu on outside click */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleToggle}
        ></div>
      )}
    </header>
  );
}
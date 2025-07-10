"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { ModeToggle } from "../mode-toggoler";

const Navbar = () => {
  const pathName = usePathname();


  const [scrollY, setScrollY] = useState(0);

   useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);
  

  return (
    <div className={`${scrollY > 100 ? 'bg-[#D1A054]' : 'bg-black/30'} transition-colors duration-500  shadow-xl fixed z-10 w-full top-0`}>
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links?.map((link) => (
                <Link key={link.path} href={link.path}>
                  {link.title}
                </Link>
              ))}
            </ul>
          </div>
          <Link href="/">
            <Image className="hidden lg:block" src="/logo.png" alt="Logo" width={100} height={60} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex  ">
          <ul className="menu menu-horizontal px-1 flex gap-4 text-xl font-bold ">
            {links?.map((link) => (
              <Link
                className={` hover:text-primary duration-300 ${pathName == link.path ? "text-[#ff3811]" : scrollY > 100 ? "text-black" : "text-white"}`}
                key={link.path}
                href={link.path}
              >
                {link.title}
              </Link>
            ))}
          </ul>
        </div>
        <div className="navbar-end ">
          <div className="flex space-x-3 items-center">
            <div className="avatar">
            </div>
            <ModeToggle/>
            <FaWhatsapp className="text-3xl text-green-700 font-bold" />
            <Link href={"/login"}>
              <h1 className="font-bold">Call Now: 068 319 3323</h1>
              <h1 className="font-bold text-sky-700">Open 24/7, 365!</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const links = [
  {
    title: "Home",
    path: "/home",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Posts",
    path: "/post",
  },
];

export default Navbar;
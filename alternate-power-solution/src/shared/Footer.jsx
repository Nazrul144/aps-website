'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGoogle, FaInstagramSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "motion/react"


const Footer = () => {
  return (
    <div>
      <motion.footer
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.3 }}
        className="footer bg-purple-950 text-white lg:flex lg:gap-44 pt-6 justify-center">
        <aside>
          <Link href="/">
            <Image className="hidden lg:block" src="/logo.png" alt="Logo" width={100} height={60} />
          </Link>
          <p>
            Privacy Policy Terms <br /> & Conditions <br />
            Refund Policy <br />

          </p>
          {/*Social Link*/}
          <div className="flex space-x-4 mt-4">
            <Link href={"https://www.google.com"}>
              <FaGoogle className="text-xl text-blue-500" />
            </Link>
            <Link href={"https://www.facebook.com/profile.php?id=100007196595674"}>
              <FaFacebook className="text-xl text-sky-400" />
            </Link>
            <Link href={"https://x.com/Nazrul211002144"}>
              <FaTwitter className="text-xl" />
            </Link>
            <Link href={"https://www.instagram.com/mdnazrulmarine/?igsh=MmVlYXcwNXl0enI5#"}>
              <FaInstagramSquare className="text-xl text-red-600" />
            </Link>
            <Link href={"https://www.linkedin.com/in/nazrul-islam-a6080730b"}>
              <FaLinkedin className="text-xl text-sky-500" />
            </Link>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title text-xl font-bold">About</h6>
          <Link href={"/"} className="link link-hover">
            Home
          </Link>
          <Link href={"/services"} className="link link-hover">
            Services
          </Link>
          <Link href={"/contact"} className="link link-hover">
            Contact
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title text-xl font-bold">Company</h6>
          <Link href={"/"} className="link link-hover">Why Alternate Power Solutions</Link>
          <Link href={"/team"} className="link link-hover">Meet Our Team</Link>
          <Link href={"/about"} className="link link-hover">About</Link>
        </nav>
        <nav>
          <h6 className="footer-title text-xl font-bold">Support</h6>
          <Link href={'/'} className="link link-hover">Support Center</Link>
          <Link href={'/'} className="link link-hover">Feedback</Link>
          <Link href={'/'} className="link link-hover">Accessibility</Link>
        </nav>
      </motion.footer>
    </div>
  );
};

export default Footer;
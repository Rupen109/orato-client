import React from 'react'
import Image from 'next/image';
import { FaGlobe, FaEnvelope, FaPhone, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import logo from '../public/Orato-logo.jpg';
const Footer = () => {
  return (
      <footer className="bg-[#171723] text-white pt-8">
          <div className="container mx-auto flex flex-col items-center justify-center">
              {/* Logo */}
              <div className="mb-4 flex flex-col justify-center items-center">
                  <Image height={50} width={50} src={logo} alt="Logo" className="" />
                  <span className="text-2xl font-bold text-white">Orato</span>
              </div>

              {/* Navigation Links */}
              <nav className="mb-4 flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <a href="#" className="hover:text-gray-400">
                      Pricing
                  </a>
                  <a href="#" className="hover:text-gray-400">
                      Features
                  </a>
                  <a href="#" className="hover:text-gray-400">
                      Privacy
                  </a>
              </nav>

              {/* Social Icons */}
              <div className="flex space-x-4 mb-4">
                  <a href="#" className="text-orange-400 hover:text-white">
                      <FaTwitter size={24} />
                  </a>
                  <a href="#" className="text-orange-400 hover:text-white">
                      <FaFacebook size={24} />
                  </a>
                  <a href="#" className="text-orange-400 hover:text-white">
                      <FaInstagram size={24} />
                  </a>
              </div>

              {/* Contact Information */}
              <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4 mb-4">
                  <div className="flex items-center">
                      <FaPhone size={18} className="mr-2" />
                      <span>+1 (123) 456-7890</span>
                  </div>
                  <div className="flex items-center">
                      <FaEnvelope size={18} className="mr-2" />
                      <a href="mailto:info@example.com">info@example.com</a>
                  </div>
              </div>

              {/* Copyright */}
              <div className="bg-[#28283A] w-full flex justify-center text-[#F4A52E] h-12 items-center text-xl">
                  <p>&copy; 2024 Orato All rights reserved.</p>
              </div>
          </div>
      </footer>
  );
}

export default Footer
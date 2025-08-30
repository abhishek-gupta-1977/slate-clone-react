import React from 'react'
import { FooterLinks } from '../Constants'
import { HashLink } from 'react-router-hash-link'
import logo from '../assets/Gray_logo.svg'
import { Linkedin, Instagram, Youtube, Facebook } from 'lucide-react'

const socialIcons = [
  { name: 'Facebook', icon: <Facebook /> },
  { name: 'Instagram', icon: <Instagram /> },
  { name: 'Youtube', icon: <Youtube /> },
  { name: 'Linkedin', icon: <Linkedin /> },
]

const Footer = () => {
  return (
    <footer className="bg-[#262626] text-white px-6 sm:px-12 md:px-20 lg:px-32 py-12">
      {/* Links Section */}
      <div className="flex flex-col md:flex-row md:justify-between gap-10 mb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:w-2/3">
          {FooterLinks.map((section, i) => (
            <div key={i}>
              <ul className="space-y-4 text-zinc-400 text-base sm:text-lg">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <HashLink
                      smooth
                      to={link.path}
                      className="hover:text-white transition-all duration-200"
                    >
                      {link.name}
                    </HashLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="md:w-1/3"></div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 sm:gap-5 mb-10 flex-wrap justify-center sm:justify-start">
  {socialIcons.map((item, index) => (
    <div
      key={index}
      className="bg-zinc-600 p-2 sm:p-3 cursor-pointer rounded-full hover:bg-zinc-500 transition"
    >
      {item.icon}
    </div>
  ))}
</div>


      {/* Bottom Section */}
      <div className="text-center md:text-left">
        <img
          src={logo}
          alt="Slate Logo"
          className="w-40 sm:w-56 md:w-full mx-auto md:mx-0 mb-6"
        />
        <p className="text-gray-400 text-sm sm:text-base">
          © 2025 Slate. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

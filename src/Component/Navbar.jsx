

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Highlight_logo from "../assets/Highlight_logo.png";
import { FaTimes, FaBars } from "react-icons/fa";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/vision", label: "Our Vision" },
  { to: "/mission", label: "Our Mission" },
  { to: "/contact", label: "Contact Us" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3" onClick={closeMenu}>
        <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
  <img
    src={Highlight_logo}
    alt="HighLight Enterprises"
    className="w-28 h-28 object-contain"
  />
</div>
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-white/70">
              HighLight
            </p>
            <span className="text-lg font-semibold text-white">
              Enterprises
            </span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-white">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `font-medium transition-colors ${isActive ? "text-purple-400" : "text-white hover:text-purple-300"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Get in Touch Button */}
        <NavLink
          to="/contact"
          className="hidden md:inline-flex items-center rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:brightness-110"
          onClick={closeMenu}
        >
          Get in Touch
        </NavLink>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <nav className="flex flex-col px-6 py-8 space-y-6 text-lg">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `font-medium transition-colors ${isActive ? "text-purple-400" : "text-white hover:text-purple-300"}`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              onClick={closeMenu}
              className="mt-4 inline-flex justify-center rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-purple-500/30"
            >
              Get in Touch
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
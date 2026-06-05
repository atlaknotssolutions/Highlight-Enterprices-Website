import React from "react";
import { NavLink } from "react-router-dom";
import Highlight_logo from "../assets/Highlight_logo.png";
const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/vision", label: "Our Vision" },
  { to: "/mission", label: "Our Mission" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
            <img
              src={Highlight_logo}
              alt="HighLight Enterprises"
              className="w-10 h-10 object-contain"
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

        <NavLink
          to="/contact"
          className="hidden md:inline-flex items-center rounded-full bg-linear-to-r from-purple-500 via-pink-500 to-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:brightness-110"
        >
          Get in Touch
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;

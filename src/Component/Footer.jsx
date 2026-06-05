import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import Highlight_logo from "../assets/Highlight_logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Left Section - Company Info */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-3xl bg-white/10 border border-white/10 flex items-center justify-center">
                <img
                  src={Highlight_logo}
                  alt="HighLight Enterprises Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight">
                  HighLight Enterprises
                </h2>
                <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
                  Event design & décor
                </p>
              </div>
            </div>

            <p className="text-gray-400 max-w-md text-[15px] leading-relaxed">
              Balaji Decorators event design across weddings, socials and
              corporate events.
            </p>

            <div className="space-y-3 text-sm text-gray-300">
              <p>
                <span className="font-semibold text-white">Address:</span>
                H.no 2/1 behind Goyal Dham Apartment,
                <br />
                Idgah Hills, Shahjahanabad,
                <br />
                Bhopal, MP
              </p>
              <p>
                <span className="font-semibold text-white">Phone:</span> +91
                9303065866
              </p>
              <p>
                <span className="font-semibold text-white">Email:</span>{" "}
                ardil.khan@gmail.com
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-sm uppercase tracking-[0.5px] text-gray-500 mb-5">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3 text-[15px] text-gray-300">
              <NavLink to="/" className="hover:text-white transition-colors">
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="hover:text-white transition-colors"
              >
                About Us
              </NavLink>
              <NavLink
                to="/vision"
                className="hover:text-white transition-colors"
              >
                Our Vision
              </NavLink>
              <NavLink
                to="/mission"
                className="hover:text-white transition-colors"
              >
                Our Mission
              </NavLink>
              <NavLink
                to="/services"
                className="hover:text-white transition-colors"
              >
                Services
              </NavLink>
              <NavLink
                to="/gallery"
                className="hover:text-white transition-colors"
              >
                Gallery
              </NavLink>
              <NavLink
                to="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </NavLink>
            </div>
          </div>

          {/* Stay Connected */}
          <div className="md:col-span-4">
            <h3 className="text-sm uppercase tracking-[0.5px] text-gray-500 mb-5">
              Stay Connected
            </h3>

            <p className="text-gray-400 text-[15px] leading-relaxed mb-6">
              Tell us about your celebration and we’ll get back within 24 hours.
            </p>

            {/* Simple Email Signup */}
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm flex-1 focus:outline-none focus:border-white/30 transition-colors"
              />
              <button className="bg-white text-black px-6 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                Send
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-3">
              We respect your inbox. No spam.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#070707] py-6 text-center text-xs text-gray-500">
        © 2026 HighLight Enterprises. All rights reserved. | Balaji Decorators
        event design for beautiful celebrations
      </div>
    </footer>
  );
};

export default Footer;

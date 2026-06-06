

// import React, { useState, useEffect } from "react";
// import Navbar from "./Navbar";
// import { Outlet } from "react-router-dom";
// import Footer from "./Footer";
// import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

// const Layout = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 300);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Navbar />
//       <Outlet />
//       <Footer />

//       {/* Floating Buttons - Mobile Responsive */}
//       <div className="fixed bottom-6 right-4 md:right-8 z-50 flex flex-col md:flex-row items-end md:items-center gap-3 md:gap-4">
        
//         {/* Scroll to Top Button */}
//         {isScrolled && (
//           <button
//             onClick={scrollToTop}
//             className="bg-purple-600 hover:bg-purple-700 active:bg-purple-800
//                        text-white rounded-full p-3 md:p-4 shadow-xl shadow-purple-500/50 
//                        transition-all duration-300 hover:scale-110 active:scale-95
//                        border border-purple-400/30"
//             aria-label="Scroll to top"
//           >
//             <FaArrowUp size={22} className="md:w-6 md:h-6" />
//           </button>
//         )}

//         {/* WhatsApp Button */}
//         <a
//           href="https://wa.me/919303065866?text=Hi%20HighLight%20Enterprises%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-green-500 hover:bg-green-600 active:bg-green-700 
//                      text-white rounded-full p-3 md:p-4 shadow-xl shadow-green-500/50 
//                      transition-all duration-300 hover:scale-110 active:scale-95
//                      border border-green-400/30"
//           aria-label="Chat with us on WhatsApp"
//         >
//           <FaWhatsapp size={26} className="md:w-7 md:h-7" />
//         </a>

//       </div>
//     </div>
//   );
// };

// export default Layout;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Auto scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  // Scroll detection for navbar & floating button
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar isScrolled={isScrolled} />

      <Outlet />
      <Footer />

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-4 md:right-8 z-50 flex flex-col md:flex-row items-end md:items-center gap-3 md:gap-4">
        {/* Scroll to Top Button */}
        {isScrolled && (
          <button
            onClick={scrollToTop}
            className="bg-purple-600 hover:bg-purple-700 active:bg-purple-800
                       text-white rounded-full p-3 md:p-4 shadow-xl shadow-purple-500/50 
                       transition-all duration-300 hover:scale-110 active:scale-95
                       border border-purple-400/30"
            aria-label="Scroll to top"
          >
            <FaArrowUp size={22} className="md:w-6 md:h-6" />
          </button>
        )}

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919303065866?text=Hi%20HighLight%20Enterprises%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 active:bg-green-700 
                     text-white rounded-full p-3 md:p-4 shadow-xl shadow-green-500/50 
                     transition-all duration-300 hover:scale-110 active:scale-95
                     border border-green-400/30"
          aria-label="Chat with us on WhatsApp"
        >
          <FaWhatsapp size={26} className="md:w-7 md:h-7" />
        </a>
      </div>
    </div>
  );
};

export default Layout;
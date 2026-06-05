// import React from "react";

// const Contact = () => {
//   return (
//     <main className="bg-black text-white">
//       <section className="relative overflow-hidden pt-28">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.14),transparent_22%),linear-gradient(180deg,rgba(0,0,0,0.9),rgba(0,0,0,0.95))]" />
//         <div className="relative mx-auto max-w-7xl px-6 py-28">
//           <div className="max-w-3xl space-y-6">
//             <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
//               Contact
//             </p>
//             <h1 className="text-5xl font-bold leading-tight">
//               Let's make your event exceptional
//             </h1>
//             <p className="text-lg text-gray-300 leading-8">
//               Share a few details about your celebration and our team will
//               connect with you to discuss how to bring it to life.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="mx-auto max-w-7xl px-6 py-16">
//         <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
//           <div className="rounded-4xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
//             <form className="space-y-6">
//               <div>
//                 <label className="block text-sm font-semibold text-white/90">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Your name"
//                   className="mt-3 w-full rounded-3xl border border-white/10 bg-black/80 px-4 py-3 text-white outline-none transition focus:border-purple-400"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-semibold text-white/90">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="you@example.com"
//                   className="mt-3 w-full rounded-3xl border border-white/10 bg-black/80 px-4 py-3 text-white outline-none transition focus:border-purple-400"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-semibold text-white/90">
//                   Message
//                 </label>
//                 <textarea
//                   rows="5"
//                   placeholder="Tell us about your event"
//                   className="mt-3 w-full rounded-3xl border border-white/10 bg-black/80 px-4 py-3 text-white outline-none transition focus:border-purple-400"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="inline-flex w-full items-center justify-center rounded-full bg-linear-to-r from-purple-500 via-pink-500 to-rose-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:brightness-110"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>

//           <div className="space-y-8">
//             <div className="rounded-4xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
//               <h2 className="text-3xl font-semibold">Contact details</h2>
//               <div className="mt-6 space-y-4 text-gray-300">
//                 <div>
//                   <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
//                     Phone
//                   </p>
//                   <p className="mt-2">+919303065866</p>
//                 </div>
//                 <div>
//                   <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
//                     Email
//                   </p>
//                   <p className="mt-2">ardil.khan@gmail.com</p>
//                 </div>
//                 <div>
//                   <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
//                     Location
//                   </p>
//                   <p className="mt-2">
//                     41, Vinayak Villa, Trimurti Nagar, Dhar, Madhya Pradesh
//                     454001
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="rounded-4xl overflow-hidden bg-white/5 shadow-2xl shadow-black/20">
//               <img
//                 src="https://www.balajidecorater.com/images/event-25.jpeg"
//                 alt="Contact gallery"
//                 className="h-96 w-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Contact;

import React from "react";
import ContactForm from "../Component/ContactForm";

const Contact = () => {
  return (
    <main className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://www.balajidecorater.com/images/event-25.jpeg"
          alt="Grand Event Tent"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/70 to-black/90" />

        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Let's design your event
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Share your date, venue and your wish — we'll get back within 24
            hours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            {/* Event Image */}
            <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
              <img
                src="https://www.balajidecorater.com/images/event-1.jpeg"
                alt="Event Setup"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Contact Details */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Details</h3>
              <div className="space-y-6 text-gray-300">
                <div>
                  <p className="text-orange-500 text-sm uppercase tracking-widest mb-1">
                    Phone
                  </p>
                  <p>+919303065866</p>
                </div>
                <div>
                  <p className="text-orange-500 text-sm uppercase tracking-widest mb-1">
                    Email
                  </p>
                  <p>ardil.khan@gmail.com</p>
                </div>
                <div>
                  <p className="text-orange-500 text-sm uppercase tracking-widest mb-1">
                    Address
                  </p>
                  <p>
                    H.no 2/1 behind Goyal Dham Apartment,
                    <br />
                    Idgah Hills, Shahjahanabad,
                    <br />
                    Bhopal, MP
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 h-80">
              <iframe
                title="Bhopal contact location"
                className="h-full w-full border-0"
                loading="lazy"
                src="https://www.google.com/maps?q=H.no+2/1+behind+Goyal+Dham+Apartment+Idgah+Hills+Shahjahanabad+Bhopal+MP&output=embed"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

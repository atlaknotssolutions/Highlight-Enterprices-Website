// import React from "react";

// const eventTypes = [
//   { value: "", label: "Select Event Type" },
//   { value: "wedding", label: "Wedding" },
//   { value: "corporate", label: "Corporate Event" },
//   { value: "birthday", label: "Birthday / Anniversary" },
//   { value: "other", label: "Other" },
// ];

// function ContactForm() {
//   return (
//     <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 lg:p-12">
//       <h2 className="text-4xl font-bold mb-2">Let's design your event</h2>
//       <p className="text-gray-400 mb-10">
//         Tell us a bit about your celebration and we'll get back within 24 hours.
//       </p>

//       <form className="space-y-6">
//         <div className="grid gap-6 md:grid-cols-2">
//           <div>
//             <label className="block text-sm text-gray-400 mb-2">
//               Your name
//             </label>
//             <input
//               type="text"
//               placeholder="Your name"
//               className="w-full bg-black border border-zinc-700 rounded-2xl px-6 py-4 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
//             />
//           </div>
//           <div>
//             <label className="block text-sm text-gray-400 mb-2">Email</label>
//             <input
//               type="email"
//               placeholder="you@example.com"
//               className="w-full bg-black border border-zinc-700 rounded-2xl px-6 py-4 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
//             />
//           </div>
//         </div>

//         <div className="grid gap-6 md:grid-cols-2">
//           <div>
//             <label className="block text-sm text-gray-400 mb-2">Phone</label>
//             <input
//               type="tel"
//               placeholder="+91 98765 43210"
//               className="w-full bg-black border border-zinc-700 rounded-2xl px-6 py-4 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
//             />
//           </div>
//           <div>
//             <label className="block text-sm text-gray-400 mb-2">
//               Event Type
//             </label>
//             <select className="w-full bg-black border border-zinc-700 rounded-2xl px-6 py-4 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition">
//               {eventTypes.map((type) => (
//                 <option key={type.value} value={type.value}>
//                   {type.label}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <div className="grid gap-6 md:grid-cols-2">
//           <div>
//             <label className="block text-sm text-gray-400 mb-2">
//               Event date
//             </label>
//             <input
//               type="text"
//               placeholder="dd-mm-yyyy"
//               className="w-full bg-black border border-zinc-700 rounded-2xl px-6 py-4 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
//             />
//           </div>
//           <div />
//         </div>

//         <div>
//           <label className="block text-sm text-gray-400 mb-2">
//             Tell us about your event
//           </label>
//           <textarea
//             rows="6"
//             placeholder="Tell us about your event, theme, date, venue, guest count..."
//             className="w-full bg-black border border-zinc-700 rounded-3xl px-6 py-4 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition resize-y"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-linear-to-r from-purple-600 via-purple-500 to-pink-600 hover:brightness-110 active:scale-[0.98] transition-all py-5 rounded-2xl text-lg font-semibold flex items-center justify-center gap-2"
//         >
//           Send Message
//           <span className="text-xl">↗</span>
//         </button>
//       </form>

//       <div className="mt-12 pt-8 border-t border-zinc-800 text-sm text-gray-400">
//         Or reach us directly at:
//         <div className="mt-2 flex flex-wrap items-center gap-3 text-white">
//           <a
//             href="tel:+919303065866"
//             className="hover:text-orange-500 transition"
//           >
//             +91 93030 65866
//           </a>
//           <span className="text-gray-500">|</span>
//           <a
//             href="mailto:ardil.khan@gmail.com"
//             className="hover:text-orange-500 transition"
//           >
//             ardil.khan@gmail.com
//           </a>
//         </div>
        
//       </div>
//     </div>
//   );
// }

// export default ContactForm;

import React from "react";

const eventTypes = [
  { value: "", label: "Select Event Type" },
  { value: "wedding", label: "Wedding" },
  { value: "corporate", label: "Corporate Event" },
  { value: "birthday", label: "Birthday / Anniversary" },
  { value: "other", label: "Other" },
];

function ContactForm() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 lg:p-8">
      <h2 className="text-3xl font-bold mb-2">Let's design your event</h2>

      <p className="text-gray-400 mb-6">
        Tell us a bit about your celebration and we'll get back within 24
        hours.
      </p>

      <form className="space-y-4">
        {/* Name & Email */}
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Your name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-3 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-3 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
            />
          </div>
        </div>

        {/* Phone & Event Type */}
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Phone</label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-3 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Event Type
            </label>
            <select className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-3 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition">
              {eventTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Event Date */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Event Date
          </label>
          <input
            type="date"
            className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-3 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Tell us about your event
          </label>
          <textarea
            rows="4"
            placeholder="Tell us about your event, theme, date, venue, guest count..."
            className="w-full bg-black border border-zinc-700 rounded-3xl px-5 py-3 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 hover:brightness-110 active:scale-[0.98] transition-all py-4 rounded-2xl text-base font-semibold flex items-center justify-center gap-2"
        >
          Send Message
          <span>↗</span>
        </button>
      </form>

     
    </div>
  );
}

export default ContactForm;
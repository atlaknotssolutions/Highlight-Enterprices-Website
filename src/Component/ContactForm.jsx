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
//     <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 lg:p-8">
//       <h2 className="text-3xl font-bold mb-2 text-white">
//         Let's design your event
//       </h2>

//       <p className="text-gray-400 mb-6">
//         Tell us a bit about your celebration and we'll get back within 24
//         hours.
//       </p>

//       <form className="space-y-4">
//         {/* Name & Email */}
//         <div className="grid gap-4 md:grid-cols-2">
//           <div>
//             <label className="block text-sm text-gray-400 mb-2">
//               Your Name
//             </label>
//             <input
//               type="text"
//               placeholder="Your name"
//               className="w-full bg-black text-white border border-zinc-700 rounded-2xl px-5 py-3 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
//             />
//           </div>

//           <div>
//             <label className="block text-sm text-gray-400 mb-2">Email</label>
//             <input
//               type="email"
//               placeholder="you@example.com"
//               className="w-full bg-black text-white border border-zinc-700 rounded-2xl px-5 py-3 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
//             />
//           </div>
//         </div>

//         {/* Phone & Event Type */}
//         <div className="grid gap-4 md:grid-cols-2">
//           <div>
//             <label className="block text-sm text-gray-400 mb-2">Phone</label>
//             <input
//               type="tel"
//               placeholder="+91 98765 43210"
//               className="w-full bg-black text-white border border-zinc-700 rounded-2xl px-5 py-3 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
//             />
//           </div>

//           <div>
//             <label className="block text-sm text-gray-400 mb-2">
//               Event Type
//             </label>

//             <div className="relative">
//               <select
//                 defaultValue=""
//                 className="w-full appearance-none bg-black text-white border border-zinc-700 rounded-2xl px-5 py-3 pr-10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
//               >
//                 {eventTypes.map((type) => (
//                   <option key={type.value} value={type.value}>
//                     {type.label}
//                   </option>
//                 ))}
//               </select>

//               <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
//                 ▼
//               </span>
//             </div>
//           </div>
//         </div>

        
//         {/* Event Details */}
//         <div>
//           <label className="block text-sm text-gray-400 mb-2">
//             Tell us about your event
//           </label>
//           <textarea
//             rows={4}
//             placeholder="Tell us about your event, theme, date, venue, guest count..."
//             className="w-full bg-black text-white border border-zinc-700 rounded-3xl px-5 py-3 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition resize-none"
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 hover:brightness-110 active:scale-[0.98] transition-all py-4 rounded-2xl text-base font-semibold flex items-center justify-center gap-2 text-white"
//         >
//           Send Message
//           <span>↗</span>
//         </button>
//       </form>

//       {/* Contact Details */}
//       <div className="mt-8 pt-6 border-t border-zinc-800 text-sm text-gray-400">
//         <p>Or reach us directly at:</p>

//         <div className="mt-3 flex flex-wrap items-center gap-3 text-white">
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



import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: "", message: "" });

    emailjs
      .sendForm(
        "service_jz8yu9t",      // YOUR_SERVICE_ID
        "template_q0io9u2",     // YOUR_TEMPLATE_ID
        form.current,
        "gmxHJ9gg0OzcNj93Z"     // YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          setStatus({
            type: "success",
            message: "Thank you! We'll get back to you within 24 hours.",
          });
          form.current.reset();
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          setStatus({
            type: "error",
            message: "Something went wrong. Please try again later.",
          });
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-10">
      <h2 className="text-3xl font-semibold mb-8">Send us a message</h2>

      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Full Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full bg-black border border-zinc-700 rounded-xl px-5 py-3 focus:outline-none focus:border-orange-500 transition"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
            <input
              type="tel"
              name="user_phone"
              required
              className="w-full bg-black border border-zinc-700 rounded-xl px-5 py-3 focus:outline-none focus:border-orange-500 transition"
              placeholder="+91 98765 43210"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Email Address</label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full bg-black border border-zinc-700 rounded-xl px-5 py-3 focus:outline-none focus:border-orange-500 transition"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Event Date</label>
          <input
            type="date"
            name="event_date"
            className="w-full bg-black border border-zinc-700 rounded-xl px-5 py-3 focus:outline-none focus:border-orange-500 transition"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Venue / Location</label>
          <input
            type="text"
            name="user_venue"
            className="w-full bg-black border border-zinc-700 rounded-xl px-5 py-3 focus:outline-none focus:border-orange-500 transition"
            placeholder="e.g. Bhopal, Indore, etc."
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Event Type & Requirements</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full bg-black border border-zinc-700 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 transition resize-y"
            placeholder="Tell us about your event (wedding, corporate, birthday, etc.) and any special requirements..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSending}
          className="w-full bg-orange-600 hover:bg-orange-500 disabled:bg-zinc-700 transition py-4 rounded-2xl text-lg font-semibold mt-4"
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status.message && (
        <div
          className={`mt-6 p-4 rounded-2xl text-center font-medium ${
            status.type === "success"
              ? "bg-green-900/50 text-green-400 border border-green-700"
              : "bg-red-900/50 text-red-400 border border-red-700"
          }`}
        >
          {status.message}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
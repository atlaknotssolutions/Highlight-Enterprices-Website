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
      <h2 className="text-3xl font-bold mb-2 text-white">
        Let's design your event
      </h2>

      <p className="text-gray-400 mb-6">
        Tell us a bit about your celebration and we'll get back within 24
        hours.
      </p>

      <form className="space-y-4">
        {/* Name & Email */}
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-black text-white border border-zinc-700 rounded-2xl px-5 py-3 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full bg-black text-white border border-zinc-700 rounded-2xl px-5 py-3 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
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
              className="w-full bg-black text-white border border-zinc-700 rounded-2xl px-5 py-3 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Event Type
            </label>

            <div className="relative">
              <select
                defaultValue=""
                className="w-full appearance-none bg-black text-white border border-zinc-700 rounded-2xl px-5 py-3 pr-10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
              >
                {eventTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>

              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                ▼
              </span>
            </div>
          </div>
        </div>

        
        {/* Event Details */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Tell us about your event
          </label>
          <textarea
            rows={4}
            placeholder="Tell us about your event, theme, date, venue, guest count..."
            className="w-full bg-black text-white border border-zinc-700 rounded-3xl px-5 py-3 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 hover:brightness-110 active:scale-[0.98] transition-all py-4 rounded-2xl text-base font-semibold flex items-center justify-center gap-2 text-white"
        >
          Send Message
          <span>↗</span>
        </button>
      </form>

      {/* Contact Details */}
      <div className="mt-8 pt-6 border-t border-zinc-800 text-sm text-gray-400">
        <p>Or reach us directly at:</p>

        <div className="mt-3 flex flex-wrap items-center gap-3 text-white">
          <a
            href="tel:+919303065866"
            className="hover:text-orange-500 transition"
          >
            +91 93030 65866
          </a>

          <span className="text-gray-500">|</span>

          <a
            href="mailto:ardil.khan@gmail.com"
            className="hover:text-orange-500 transition"
          >
            ardil.khan@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
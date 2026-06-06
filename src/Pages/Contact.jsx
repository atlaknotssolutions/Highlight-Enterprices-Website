

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

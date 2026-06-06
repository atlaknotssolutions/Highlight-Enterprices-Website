// import React from "react";
// import { Link } from "react-router-dom";

// const Mission = () => {
//   return (
//     <main className="bg-black text-white font-sans">
//       {/* Hero Section */}
//       <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
//         <img
//           src="https://www.balajidecorater.com/images/event-1.jpeg"
//           alt="Grand Stage Setup"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/70 to-black/90" />

//         <div className="relative z-10 text-center max-w-4xl px-6">
//           <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
//             Turning your vision into a remarkable reality
//           </h1>
//           <p className="text-xl text-white/90 max-w-2xl mx-auto">
//             Innovative, strategic and quality obsessed— décor solutions deliver
//             with heart and precision.
//           </p>
//           <p className="mt-6 text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
//             A Bhopal event décor partner creating memorable wedding, corporate
//             and social experiences through disciplined planning and premium
//             styling.
//           </p>
//         </div>
//       </section>

//       {/* Our Mission Section */}
//       <section className="max-w-7xl mx-auto px-6 py-20">
//         <div className="grid lg:grid-cols-12 gap-12 items-start">
//           {/* Left Content */}
//           <div className="lg:col-span-7 space-y-8">
//             <div>
//               <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
//               <p className="text-lg leading-relaxed text-gray-300">
//                 To be the most trusted event partner — designing, producing and
//                 managing experiences of exceptional quality through smart
//                 planning, innovative craft and flawless execution.
//               </p>
//               <p className="mt-6 text-gray-300 text-base leading-relaxed">
//                 We help clients in Bhopal and nearby cities create premium
//                 décor, production and event management for weddings, corporate
//                 events, and social celebrations.
//               </p>
//             </div>

//             <div className="space-y-4 pt-6">
//               {[
//                 "Translate your ideas into décor concepts and moodboards",
//                 "Execute with disciplined timelines, transparent budgets and QA at every stage",
//                 "Deliver an unforgettable finish guests talk about long after the lights dim",
//               ].map((item, i) => (
//                 <div key={i} className="flex items-start gap-4">
//                   <div className="w-2 h-2 mt-3 rounded-full bg-orange-500 shrink-0" />
//                   <p className="text-gray-300 text-[17px] leading-relaxed">
//                     {item}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* What this means for you */}
//           <div className="lg:col-span-5">
//             <div className="bg-zinc-900 border border-zinc-700 rounded-3xl p-8 sticky top-8">
//               <h3 className="text-2xl font-semibold mb-6">
//                 What this means for you
//               </h3>
//               <p className="text-gray-400 leading-relaxed mb-8">
//                 One trusted team owning creative, vendor and logistics so you
//                 can relax and enjoy your big day.
//               </p>

//               <div className="flex flex-wrap gap-3">
//                 {[
//                   "Stress-free Planning",
//                   "Creative Freedom",
//                   "Flawless Execution",
//                 ].map((tag) => (
//                   <span
//                     key={tag}
//                     className="px-5 py-2.5 bg-zinc-800 hover:bg-orange-600/20 hover:text-orange-400 transition-all rounded-full text-sm border border-zinc-700"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Cards */}
//       <section className="bg-zinc-950 py-16 border-t border-zinc-800">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid md:grid-cols-3 gap-6">
//             {[
//               {
//                 icon: "🎨",
//                 title: "Décor & Styling",
//                 desc: "Themes, floral backdrops, stage and wedding—crafted to your story",
//               },
//               {
//                 icon: "💡",
//                 title: "Lighting & AV",
//                 desc: "Ambient lighting, sound projection and special effects that elevate the vibe",
//               },
//               {
//                 icon: "📋",
//                 title: "Planning & Logistics",
//                 desc: "Vendor coordination, schedules, checklists and on-site show running",
//               },
//             ].map((service, i) => (
//               <div
//                 key={i}
//                 className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-orange-500/50 transition-colors group"
//               >
//                 <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
//                 <p className="text-gray-400 leading-relaxed">{service.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-black border-t border-b border-zinc-800">
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//           {[
//             { number: "10+", label: "Years Experience" },
//             { number: "500+", label: "Events Delivered" },
//             { number: "98%", label: "Client Happiness" },
//             { number: "24x7", label: "Support" },
//           ].map((stat, i) => (
//             <div key={i} className="space-y-2">
//               <div className="text-5xl font-bold text-orange-500">
//                 {stat.number}
//               </div>
//               <p className="text-gray-400 text-lg">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Gallery Section */}
//       <section className="max-w-7xl mx-auto px-6 py-20">
//         <div className="grid md:grid-cols-3 gap-6">
//           <img
//             src="https://www.balajidecorater.com/images/event-16.jpeg"
//             alt="Event Tent"
//             className="rounded-3xl w-full h-full object-cover"
//           />
//           <img
//             src="https://www.balajidecorater.com/images/event-1.jpeg"
//             alt="Outdoor Setup"
//             className="rounded-3xl w-full h-full object-cover"
//           />
//           <img
//             src="https://www.balajidecorater.com/images/event-16.jpeg"
//             alt="Grand Indoor Setup"
//             className="rounded-3xl w-full h-full object-cover"
//           />
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-20 bg-[#050505] border-t border-zinc-800">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-10">
//             <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
//               FAQ
//             </p>
//             <h2 className="text-4xl font-bold mt-4">
//               Frequently asked questions about mission and event execution
//             </h2>
//           </div>

//           <div className="grid gap-6 lg:grid-cols-2">
//             <details className="group rounded-3xl border border-white/10 bg-black/60 p-6">
//               <summary className="cursor-pointer text-lg font-semibold text-white transition-colors group-open:text-purple-400">
//                 What is your mission for event décor?
//               </summary>
//               <p className="mt-4 text-gray-300 leading-relaxed">
//                 Our mission is to deliver exceptional event décor and production
//                 with creative design, precise planning and attention to every
//                 execution detail.
//               </p>
//             </details>

//             <details className="group rounded-3xl border border-white/10 bg-black/60 p-6">
//               <summary className="cursor-pointer text-lg font-semibold text-white transition-colors group-open:text-purple-400">
//                 Can you work within a budget?
//               </summary>
//               <p className="mt-4 text-gray-300 leading-relaxed">
//                 Yes. We provide transparent proposals and tailored décor plans
//                 so your event design stays aligned with the budget you set.
//               </p>
//             </details>

//             <details className="group rounded-3xl border border-white/10 bg-black/60 p-6">
//               <summary className="cursor-pointer text-lg font-semibold text-white transition-colors group-open:text-purple-400">
//                 Do you manage logistics and vendor coordination too?
//               </summary>
//               <p className="mt-4 text-gray-300 leading-relaxed">
//                 Absolutely. We handle vendor coordination, sourcing and on-site
//                 logistics so the entire event delivery is smooth and
//                 stress-free.
//               </p>
//             </details>

//             <details className="group rounded-3xl border border-white/10 bg-black/60 p-6">
//               <summary className="cursor-pointer text-lg font-semibold text-white transition-colors group-open:text-purple-400">
//                 How do you ensure quality on event day?
//               </summary>
//               <p className="mt-4 text-gray-300 leading-relaxed">
//                 Our team follows strict quality checks, run-of-show rehearsals
//                 and supervision standards to make sure every detail looks and
//                 performs exactly as planned.
//               </p>
//             </details>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Mission;

import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";
import event3 from "../assets/event3.jpg";
import event4 from "../assets/event4.jpg";

import event5 from "../assets/event5.jpg";
import event6 from "../assets/event6.jpg";

const missionGalleryImages = [
  event1,
  event2,
  event3,
];

const Mission = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % missionGalleryImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % missionGalleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + missionGalleryImages.length) % missionGalleryImages.length,
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <main className="bg-black text-white font-sans">
      <Helmet>
        <title>
          Our Mission | HighLight Enterprises - Best Event Decorators in Madhya
          Pradesh
        </title>
        <meta
          name="description"
          content="Our mission is to deliver exceptional event décor and management services in Madhya Pradesh. Trusted partner for weddings, corporate events & social celebrations with flawless execution."
        />
        <meta
          name="keywords"
          content="highlight enterprises mission, event decorators bhopal, wedding planners madhya pradesh, corporate event management indore, best event company mp, mission of highlight enterprises"
        />
        <meta
          property="og:title"
          content="Our Mission | HighLight Enterprises"
        />
        <meta
          property="og:description"
          content="Turning your vision into a remarkable reality with precision and creativity."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${missionGalleryImages[currentSlide]})`,
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/70 to-black/90" />

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 transition-all rounded-full p-3 text-white text-2xl"
          aria-label="Previous slide"
        >
          ❮
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 transition-all rounded-full p-3 text-white text-2xl"
          aria-label="Next slide"
        >
          ❯
        </button>

        {/* Slider Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {missionGalleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75 w-3"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="relative z-10 mt-20 text-center max-w-4xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Turning your vision into a remarkable reality
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Innovative, strategic and quality obsessed— décor solutions deliver
            with heart and precision.
          </p>
          <p className="mt-6 text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            A Bhopal event décor partner creating memorable wedding, corporate
            and social experiences through disciplined planning and premium
            styling.
          </p>
        </div>
      </section>
    

      {/* Our Mission Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg leading-relaxed text-gray-300">
                To be the most trusted event partner — designing, producing and
                managing experiences of exceptional quality through smart
                planning, innovative craft and flawless execution.
              </p>
              <p className="mt-6 text-gray-300 text-base leading-relaxed">
                We help clients in Bhopal and nearby cities create premium
                décor, production and event management for weddings, corporate
                events, and social celebrations.
              </p>
            </div>

            <div className="space-y-4 pt-6">
              {[
                "Translate your ideas into décor concepts and moodboards",
                "Execute with disciplined timelines, transparent budgets and QA at every stage",
                "Deliver an unforgettable finish guests talk about long after the lights dim",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-3 rounded-full bg-orange-500 shrink-0" />
                  <p className="text-gray-300 text-[17px] leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* What this means for you */}
          <div className="lg:col-span-5">
            <div className="bg-zinc-900 border border-zinc-700 rounded-3xl p-8 sticky top-8">
              <h3 className="text-2xl font-semibold mb-6">
                What this means for you
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                One trusted team owning creative, vendor and logistics so you
                can relax and enjoy your big day.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Stress-free Planning",
                  "Creative Freedom",
                  "Flawless Execution",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-5 py-2.5 bg-zinc-800 hover:bg-orange-600/20 hover:text-orange-400 transition-all rounded-full text-sm border border-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="bg-zinc-950 py-16 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🎨",
                title: "Décor & Styling",
                desc: "Themes, floral backdrops, stage and wedding—crafted to your story",
              },
              {
                icon: "💡",
                title: "Lighting & AV",
                desc: "Ambient lighting, sound projection and special effects that elevate the vibe",
              },
              {
                icon: "📋",
                title: "Planning & Logistics",
                desc: "Vendor coordination, schedules, checklists and on-site show running",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-orange-500/50 transition-colors group"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black border-t border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "10+", label: "Years Experience" },
            { number: "500+", label: "Events Delivered" },
            { number: "98%", label: "Client Happiness" },
            { number: "24x7", label: "Support" },
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <div className="text-5xl font-bold text-orange-500">
                {stat.number}
              </div>
              <p className="text-gray-400 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section - Same Design as Home Page */}
      <section className="border-t border-white/10 bg-black py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.4em] text-purple-300">
              GOT QUESTIONS?
            </span>
            <h2 className="mt-6 text-4xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              Everything you need to know about our mission and event execution
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <details className="group rounded-3xl bg-white/5 px-8 py-6 transition-all hover:bg-white/10">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-medium list-none">
                <span>What is your mission for event décor?</span>
                <span className="text-2xl text-purple-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-6 text-gray-300 leading-relaxed pr-8">
                Our mission is to deliver exceptional event décor and production
                with creative design, precise planning and attention to every
                execution detail.
              </p>
            </details>

            <details className="group rounded-3xl bg-white/5 px-8 py-6 transition-all hover:bg-white/10">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-medium list-none">
                <span>Can you work within a budget?</span>
                <span className="text-2xl text-purple-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-6 text-gray-300 leading-relaxed pr-8">
                Yes. We provide transparent proposals and tailored décor plans
                so your event design stays aligned with the budget you set.
              </p>
            </details>

            <details className="group rounded-3xl bg-white/5 px-8 py-6 transition-all hover:bg-white/10">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-medium list-none">
                <span>
                  Do you manage logistics and vendor coordination too?
                </span>
                <span className="text-2xl text-purple-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-6 text-gray-300 leading-relaxed pr-8">
                Absolutely. We handle vendor coordination, sourcing and on-site
                logistics so the entire event delivery is smooth and
                stress-free.
              </p>
            </details>

            <details className="group rounded-3xl bg-white/5 px-8 py-6 transition-all hover:bg-white/10">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-medium list-none">
                <span>How do you ensure quality on event day?</span>
                <span className="text-2xl text-purple-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-6 text-gray-300 leading-relaxed pr-8">
                Our team follows strict quality checks, run-of-show rehearsals
                and supervision standards to make sure every detail looks and
                performs exactly as planned.
              </p>
            </details>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400">Still have questions?</p>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center rounded-full bg-linear-to-r from-purple-500 via-pink-500 to-rose-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:brightness-110"
            >
              Ask Us Directly
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Mission;

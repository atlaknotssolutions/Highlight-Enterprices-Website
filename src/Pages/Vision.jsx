// // import React from "react";

// // const Vision = () => {
// //   return (
// //     <main className="bg-black text-white font-sans">
// //       {/* Hero Banner - Matches Screenshot */}
// //       <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
// //         <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black" />

// //         <img
// //           src="https://www.balajidecorater.com/images/event-23.jpeg"
// //           alt="Event Stage"
// //           className="absolute inset-0 w-full h-full object-cover"
// //         />

// //         <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
// //           <p className="text-sm uppercase tracking-widest text-purple-400 mb-4">
// //             Home / Our Vision
// //           </p>

// //           <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
// //             Designing events that consistently<br />
// //             exceed expectations
// //           </h1>

// //           <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
// //             Creativity, service and innovation—balanced to deliver true value.
// //           </p>
// //         </div>
// //       </section>

// //       {/* Our Vision Section */}
// //       <section className="py-20 bg-[#0a0a0a]">
// //         <div className="max-w-7xl mx-auto px-6">
// //           <div className="grid lg:grid-cols-2 gap-16 items-start">
// //             {/* Left - Our Vision */}
// //             <div>
// //               <h2 className="text-4xl font-bold mb-8">Our Vision</h2>
// //               <p className="text-gray-300 text-lg leading-relaxed mb-10">
// //                 To lead in event design &amp; communication by creating and producing
// //                 exceptional experiences that deliver outstanding value, delightful
// //                 service and meaningful innovation.
// //               </p>

// //               <ul className="space-y-6">
// //                 {[
// //                   "Develop creative ideas tailored to each client's unique needs.",
// //                   "Provide expert guidance from concept through flawless execution.",
// //                   "Deliver memorable events that evoke a genuine 'WOW'."
// //                 ].map((item, i) => (
// //                   <li key={i} className="flex gap-4">
// //                     <span className="text-purple-500 text-2xl">•</span>
// //                     <span className="text-lg text-gray-200">{item}</span>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>

// //             {/* Right - Why it matters */}
// //             <div className="bg-zinc-900/70 border border-white/10 rounded-3xl p-10">
// //               <h3 className="text-2xl font-semibold mb-5">Why it matters</h3>
// //               <p className="text-gray-400 text-lg leading-relaxed">
// //                 A clear, future-focused vision aligns our team, clients and partners
// //                 around what truly counts: impactful design, smooth operations and
// //                 experiences guests never forget.
// //               </p>

// //               <div className="flex flex-wrap gap-3 mt-8">
// //                 <span className="px-5 py-2 bg-purple-600 text-sm rounded-full">Client-first</span>
// //                 <span className="px-5 py-2 bg-purple-600 text-sm rounded-full">Innovative</span>
// //                 <span className="px-5 py-2 bg-purple-600 text-sm rounded-full">Quality-obsessed</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Core Values - Three Cards */}
// //       <section className="py-20 bg-black">
// //         <div className="max-w-7xl mx-auto px-6">
// //           <div className="grid md:grid-cols-3 gap-8">
// //             {/* Creativity */}
// //             <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-all">
// //               <div className="text-5xl mb-6">✨</div>
// //               <h3 className="text-2xl font-semibold mb-4">Creativity</h3>
// //               <p className="text-gray-400">
// //                 Trend aware yet timeless aesthetics — balanced décor, thematic
// //                 storytelling and immersive details.
// //               </p>
// //             </div>

// //             {/* Precision */}
// //             <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-all">
// //               <div className="text-5xl mb-6">🎯</div>
// //               <h3 className="text-2xl font-semibold mb-4">Precision</h3>
// //               <p className="text-gray-400">
// //                 Disciplined planning, vendor orchestration and run of show mastery
// //                 so everything feels effortless.
// //               </p>
// //             </div>

// //             {/* Hospitality */}
// //             <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-all">
// //               <div className="text-5xl mb-6">🤝</div>
// //               <h3 className="text-2xl font-semibold mb-4">Hospitality</h3>
// //               <p className="text-gray-400">
// //                 Attentive service and warm hosting — because people remember how
// //                 you made them feel.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Turning Vision into Reality */}
// //       <section className="py-20 bg-[#0a0a0a]">
// //         <div className="max-w-7xl mx-auto px-6">
// //           <h2 className="text-4xl font-bold mb-4">Turning vision into reality</h2>
// //           <p className="text-gray-400 text-lg mb-12">
// //             A clear, repeatable process keeps high-creativity projects on time and on budget.
// //           </p>

// //           <div className="grid md:grid-cols-4 gap-8">
// //             {[
// //               { num: "01", title: "Discover", desc: "Understand your story, audience, venue and constraints." },
// //               { num: "02", title: "Produce", desc: "Fabrication, floral, lighting & AV prepared with QA checks." },
// //               { num: "03", title: "Design", desc: "Moodboards, layouts and décor plan with transparent budgets." },
// //               { num: "04", title: "Execute", desc: "On-site build, rehearsals and show running—zero last minute chaos." }
// //             ].map((step) => (
// //               <div key={step.num} className="group">
// //                 <div className="text-7xl font-black text-white/10 group-hover:text-purple-500/20 transition-all">
// //                   {step.num}
// //                 </div>
// //                 <h3 className="text-2xl font-semibold mt-4 mb-3">{step.title}</h3>
// //                 <p className="text-gray-400">{step.desc}</p>
// //               </div>
// //             ))}
// //           </div>

// //           <div className="mt-16 text-center">
// //             <button className="bg-purple-600 hover:bg-purple-700 px-10 py-4 rounded-full text-lg font-medium transition-all">
// //               Plan with us
// //             </button>
// //           </div>
// //         </div>
// //       </section>
// //     </main>
// //   );
// // };

// // export default Vision;

// import React from "react";

// const Vision = () => {
//   return (
//     <main className="bg-black text-white font-sans">
//       {/* Hero Banner */}
//       <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/70 to-black" />

//         <img
//           src="https://www.balajidecorater.com/images/event-23.jpeg"
//           alt="Event Stage"
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
//           <p className="text-sm uppercase tracking-widest text-purple-400 mb-4">
//             Home / Our Vision
//           </p>

//           <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
//             Designing events that consistently
//             <br />
//             exceed expectations
//           </h1>

//           <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
//             Creativity, service and innovation—balanced to deliver true value.
//           </p>
//           <p className="mt-6 text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
//             Based in Bhopal, we design premium wedding décor, corporate stage
//             production and social event styling with cinematic impact.
//           </p>
//         </div>
//       </section>

//       {/* Our Vision + Why it matters */}
//       <section className="py-20 bg-[#0a0a0a]">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-16 items-start">
//             {/* Our Vision */}
//             <div>
//               <h2 className="text-4xl font-bold mb-8">Our Vision</h2>
//               <p className="text-gray-300 text-lg leading-relaxed mb-10">
//                 To lead in event design &amp; communication by creating and
//                 producing exceptional experiences that deliver outstanding
//                 value, delightful service and meaningful innovation.
//               </p>

//               <ul className="space-y-6">
//                 {[
//                   "Develop creative ideas tailored to each client's unique needs.",
//                   "Provide expert guidance from concept through flawless execution.",
//                   "Deliver memorable events that evoke a genuine 'WOW'.",
//                 ].map((item, i) => (
//                   <li key={i} className="flex gap-4">
//                     <span className="text-purple-500 text-2xl mt-1">•</span>
//                     <span className="text-lg text-gray-200">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Why it matters */}
//             <div className="bg-zinc-900/70 border border-white/10 rounded-3xl p-10">
//               <h3 className="text-2xl font-semibold mb-5">Why it matters</h3>
//               <p className="text-gray-400 text-lg leading-relaxed">
//                 A clear, future-focused vision aligns our team, clients and
//                 partners around what truly counts: impactful design, smooth
//                 operations and experiences guests never forget.
//               </p>

//               <div className="flex flex-wrap gap-3 mt-8">
//                 <span className="px-5 py-2 bg-purple-600 text-sm rounded-full">
//                   Client-first
//                 </span>
//                 <span className="px-5 py-2 bg-purple-600 text-sm rounded-full">
//                   Innovative
//                 </span>
//                 <span className="px-5 py-2 bg-purple-600 text-sm rounded-full">
//                   Quality-obsessed
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Core Values */}
//       <section className="py-20 bg-black">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-all">
//               <div className="text-5xl mb-6">✨</div>
//               <h3 className="text-2xl font-semibold mb-4">Creativity</h3>
//               <p className="text-gray-400">
//                 Trend aware yet timeless aesthetics — balanced décor, thematic
//                 storytelling and immersive details.
//               </p>
//             </div>

//             <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-all">
//               <div className="text-5xl mb-6">🎯</div>
//               <h3 className="text-2xl font-semibold mb-4">Precision</h3>
//               <p className="text-gray-400">
//                 Disciplined planning, vendor orchestration and run of show
//                 mastery so everything feels effortless.
//               </p>
//             </div>

//             <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-all">
//               <div className="text-5xl mb-6">🤝</div>
//               <h3 className="text-2xl font-semibold mb-4">Hospitality</h3>
//               <p className="text-gray-400">
//                 Attentive service and warm hosting — because people remember how
//                 you made them feel.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Turning Vision into Reality */}
//       <section className="py-20 bg-[#0a0a0a]">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-4xl font-bold mb-4">
//             Turning vision into reality
//           </h2>
//           <p className="text-gray-400 text-lg mb-12">
//             A clear, repeatable process keeps high-creativity projects on time
//             and on budget.
//           </p>

//           <div className="grid md:grid-cols-4 gap-8">
//             {[
//               {
//                 num: "01",
//                 title: "Discover",
//                 desc: "Understand your story, audience, venue and constraints.",
//               },
//               {
//                 num: "02",
//                 title: "Design",
//                 desc: "Moodboards, layouts and décor plan with transparent budgets.",
//               },
//               {
//                 num: "03",
//                 title: "Produce",
//                 desc: "Fabrication, floral, lighting & AV prepared with QA checks.",
//               },
//               {
//                 num: "04",
//                 title: "Execute",
//                 desc: "On-site build, rehearsals and show running—zero last minute chaos.",
//               },
//             ].map((step) => (
//               <div key={step.num} className="group">
//                 <div className="text-7xl font-black text-white/10 group-hover:text-purple-500/20 transition-all">
//                   {step.num}
//                 </div>
//                 <h3 className="text-2xl font-semibold mt-4 mb-3">
//                   {step.title}
//                 </h3>
//                 <p className="text-gray-400">{step.desc}</p>
//               </div>
//             ))}
//           </div>

//           <div className="mt-12 flex justify-center">
//             <button className="bg-purple-600 hover:bg-purple-700 px-10 py-4 rounded-full text-lg font-medium transition-all">
//               Plan with us
//             </button>
//           </div>
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
//               Frequently asked questions about our vision and event style
//             </h2>
//           </div>

//           <div className="grid gap-6 lg:grid-cols-2">
//             <details className="group rounded-3xl border border-white/10 bg-black/60 p-6">
//               <summary className="cursor-pointer text-lg font-semibold text-white transition-colors group-open:text-purple-400">
//                 What events does your vision page represent?
//               </summary>
//               <p className="mt-4 text-gray-300 leading-relaxed">
//                 Our vision highlights cinematic event design for weddings,
//                 corporate launches, award nights and premium social gatherings.
//               </p>
//             </details>

//             <details className="group rounded-3xl border border-white/10 bg-black/60 p-6">
//               <summary className="cursor-pointer text-lg font-semibold text-white transition-colors group-open:text-purple-400">
//                 Is every design concept custom?
//               </summary>
//               <p className="mt-4 text-gray-300 leading-relaxed">
//                 Yes. We tailor every concept to your story, audience and venue,
//                 so each event feels original and memorable.
//               </p>
//             </details>

//             <details className="group rounded-3xl border border-white/10 bg-black/60 p-6">
//               <summary className="cursor-pointer text-lg font-semibold text-white transition-colors group-open:text-purple-400">
//                 How do you keep events on budget?
//               </summary>
//               <p className="mt-4 text-gray-300 leading-relaxed">
//                 We create transparent proposals, phased production plans and
//                 smart décor choices so the creative vision stays aligned with
//                 your budget.
//               </p>
//             </details>

//             <details className="group rounded-3xl border border-white/10 bg-black/60 p-6">
//               <summary className="cursor-pointer text-lg font-semibold text-white transition-colors group-open:text-purple-400">
//                 What makes your event team different?
//               </summary>
//               <p className="mt-4 text-gray-300 leading-relaxed">
//                 Our team blends creativity, execution discipline and hospitality
//                 so every event is beautiful, reliable and guest-focused.
//               </p>
//             </details>
//           </div>
//         </div>
//       </section>

//       {/* New Bottom CTA Section */}
//       <section className="py-16 bg-black border-t border-white/10">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-12 text-center">
//             <h2 className="text-4xl font-bold mb-4">Have a vision in mind?</h2>
//             <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
//               Share your date, venue and vibe—we'll bring it to life.
//             </p>

//             <button className="bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-12 py-4 rounded-full text-lg font-medium transition-all">
//               Get a Quote
//             </button>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Vision;
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
const visionGalleryImages = [
  event3,
  event6,
  event3,
  event4
];

const Vision = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % visionGalleryImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % visionGalleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + visionGalleryImages.length) % visionGalleryImages.length,
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <main className="bg-black text-white font-sans">
      <Helmet>
        <title>
          Our Vision | HighLight Enterprises - Event Decorators Madhya Pradesh
        </title>
        <meta
          name="description"
          content="Discover the vision behind HighLight Enterprises. We create exceptional events with creativity, precision, and hospitality across Madhya Pradesh."
        />
        <meta
          name="keywords"
          content="highlight enterprises vision, event design philosophy mp, best event decorators bhopal, wedding vision indore, corporate event vision madhya pradesh"
        />
        <meta
          property="og:title"
          content="Our Vision | HighLight Enterprises"
        />
        <meta
          property="og:description"
          content="Designing events that consistently exceed expectations across Madhya Pradesh."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${visionGalleryImages[currentSlide]})`,
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/70 to-black" />

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
          {visionGalleryImages.map((_, index) => (
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

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-purple-400 mb-4">
            Home / Our Vision
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Designing events that consistently
            <br />
            exceed expectations
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Creativity, service and innovation—balanced to deliver true value.
          </p>
          <p className="mt-6 text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            Based in Bhopal, we design premium wedding décor, corporate stage
            production and social event styling with cinematic impact.
          </p>
        </div>
      </section>

      {/* Our Vision + Why it matters */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Our Vision */}
            <div>
              <h2 className="text-4xl font-bold mb-8">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                To lead in event design &amp; communication by creating and
                producing exceptional experiences that deliver outstanding
                value, delightful service and meaningful innovation.
              </p>

              <ul className="space-y-6">
                {[
                  "Develop creative ideas tailored to each client's unique needs.",
                  "Provide expert guidance from concept through flawless execution.",
                  "Deliver memorable events that evoke a genuine 'WOW'.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-purple-500 text-2xl mt-1">•</span>
                    <span className="text-lg text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why it matters */}
            <div className="bg-zinc-900/70 border border-white/10 rounded-3xl p-10">
              <h3 className="text-2xl font-semibold mb-5">Why it matters</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                A clear, future-focused vision aligns our team, clients and
                partners around what truly counts: impactful design, smooth
                operations and experiences guests never forget.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <span className="px-5 py-2 bg-purple-600 text-sm rounded-full">
                  Client-first
                </span>
                <span className="px-5 py-2 bg-purple-600 text-sm rounded-full">
                  Innovative
                </span>
                <span className="px-5 py-2 bg-purple-600 text-sm rounded-full">
                  Quality-obsessed
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-all">
              <div className="text-5xl mb-6">✨</div>
              <h3 className="text-2xl font-semibold mb-4">Creativity</h3>
              <p className="text-gray-400">
                Trend aware yet timeless aesthetics — balanced décor, thematic
                storytelling and immersive details.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-all">
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-2xl font-semibold mb-4">Precision</h3>
              <p className="text-gray-400">
                Disciplined planning, vendor orchestration and run of show
                mastery so everything feels effortless.
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-all">
              <div className="text-5xl mb-6">🤝</div>
              <h3 className="text-2xl font-semibold mb-4">Hospitality</h3>
              <p className="text-gray-400">
                Attentive service and warm hosting — because people remember how
                you made them feel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Turning Vision into Reality */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">
            Turning vision into reality
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            A clear, repeatable process keeps high-creativity projects on time
            and on budget.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                num: "01",
                title: "Discover",
                desc: "Understand your story, audience, venue and constraints.",
              },
              {
                num: "02",
                title: "Design",
                desc: "Moodboards, layouts and décor plan with transparent budgets.",
              },
              {
                num: "03",
                title: "Produce",
                desc: "Fabrication, floral, lighting & AV prepared with QA checks.",
              },
              {
                num: "04",
                title: "Execute",
                desc: "On-site build, rehearsals and show running—zero last minute chaos.",
              },
            ].map((step) => (
              <div key={step.num} className="group">
                <div className="text-7xl font-black text-white/10 group-hover:text-purple-500/20 transition-all">
                  {step.num}
                </div>
                <h3 className="text-2xl font-semibold mt-4 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              to="/contact"
              className="bg-purple-600 hover:bg-purple-700 px-10 py-4 rounded-full text-lg font-medium transition-all"
            >
              Plan with us
            </Link>
          </div>
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
              Everything you need to know about our vision and event style
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <details className="group rounded-3xl bg-white/5 px-8 py-6 transition-all hover:bg-white/10">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-medium list-none">
                <span>What events does your vision page represent?</span>
                <span className="text-2xl text-purple-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-6 text-gray-300 leading-relaxed pr-8">
                Our vision highlights cinematic event design for weddings,
                corporate launches, award nights and premium social gatherings.
              </p>
            </details>

            <details className="group rounded-3xl bg-white/5 px-8 py-6 transition-all hover:bg-white/10">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-medium list-none">
                <span>Is every design concept custom?</span>
                <span className="text-2xl text-purple-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-6 text-gray-300 leading-relaxed pr-8">
                Yes. We tailor every concept to your story, audience and venue,
                so each event feels original and memorable.
              </p>
            </details>

            <details className="group rounded-3xl bg-white/5 px-8 py-6 transition-all hover:bg-white/10">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-medium list-none">
                <span>How do you keep events on budget?</span>
                <span className="text-2xl text-purple-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-6 text-gray-300 leading-relaxed pr-8">
                We create transparent proposals, phased production plans and
                smart décor choices so the creative vision stays aligned with
                your budget.
              </p>
            </details>

            <details className="group rounded-3xl bg-white/5 px-8 py-6 transition-all hover:bg-white/10">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-medium list-none">
                <span>What makes your event team different?</span>
                <span className="text-2xl text-purple-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-6 text-gray-300 leading-relaxed pr-8">
                Our team blends creativity, execution discipline and hospitality
                so every event is beautiful, reliable and guest-focused.
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

      {/* New Bottom CTA Section */}
      <section className="py-16 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Have a vision in mind?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
              Share your date, venue and vibe—we'll bring it to life.
            </p>

            <Link
              to="/contact"
              className="bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-12 py-4 rounded-full text-lg font-medium transition-all inline-block"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Vision;

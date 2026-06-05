// // // import React from "react";
// // // import { Link } from "react-router-dom";

// // // const About = () => {
// // //   return (
// // //     <main className="bg-black text-white">
// // //       <section className="relative overflow-hidden pt-28">
// // //         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.16),transparent_25%),linear-gradient(180deg,rgba(0,0,0,0.85),rgba(0,0,0,0.95))]" />
// // //         <div className="relative mx-auto max-w-7xl px-6 py-28">
// // //           <div className="max-w-3xl space-y-6">
// // //             <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
// // //               About Us
// // //             </p>
// // //             <h1 className="text-5xl font-bold leading-tight">
// // //               Balaji Decorators: Crafting unforgettable events across India
// // //             </h1>
// // //             <p className="text-lg text-gray-300 leading-8">
// // //               We design weddings, corporate shows and private celebrations with
// // //               a premium focus on detail, ambience, and guest experience.
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       <section className="mx-auto max-w-7xl px-6 py-16">
// // //         <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
// // //           <div className="space-y-6">
// // //             <h2 className="text-4xl font-bold">Why clients choose Balaji</h2>
// // //             <p className="text-lg leading-8 text-gray-300">
// // //               From concept to completion, we partner closely with every client
// // //               to deliver décor that feels personalized, polished, and powerful.
// // //             </p>
// // //             <div className="grid gap-4 sm:grid-cols-2">
// // //               {[
// // //                 {
// // //                   title: "End-to-end production",
// // //                   description:
// // //                     "Creative direction, vendor management and flawless execution.",
// // //                 },
// // //                 {
// // //                   title: "High-touch service",
// // //                   description:
// // //                     "A dedicated team for planning, coordination and support.",
// // //                 },
// // //                 {
// // //                   title: "Elegant themes",
// // //                   description:
// // //                     "Design that balances bold statements with timeless styling.",
// // //                 },
// // //                 {
// // //                   title: "Local expertise",
// // //                   description:
// // //                     "Experience across weddings, corporate events and social moments.",
// // //                 },
// // //               ].map((item) => (
// // //                 <div
// // //                   key={item.title}
// // //                   className="rounded-3xl border border-white/10 bg-white/5 p-6"
// // //                 >
// // //                   <h3 className="text-xl font-semibold text-white">
// // //                     {item.title}
// // //                   </h3>
// // //                   <p className="mt-3 text-sm leading-7 text-gray-300">
// // //                     {item.description}
// // //                   </p>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           <div className="overflow-hidden rounded-4xl bg-white/5 shadow-2xl shadow-black/30">
// // //             <img
// // //               src="https://www.balajidecorater.com/images/event-16.jpeg"
// // //               alt="Balaji Decorators"
// // //               className="h-full w-full object-cover"
// // //             />
// // //           </div>
// // //         </div>
// // //       </section>

// // //       <section className="border-t border-white/10 bg-[#050505] py-16">
// // //         <div className="mx-auto max-w-7xl px-6">
// // //           <div className="grid gap-8 lg:grid-cols-3">
// // //             <div className="rounded-3xl bg-white/5 p-8">
// // //               <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
// // //                 Our Story
// // //               </p>
// // //               <p className="mt-4 text-gray-300 leading-7">
// // //                 Rooted in craftsmanship and reliability, our team has delivered
// // //                 hundreds of events across Madhya Pradesh and beyond.
// // //               </p>
// // //             </div>
// // //             <div className="rounded-3xl bg-white/5 p-8">
// // //               <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
// // //                 Our values
// // //               </p>
// // //               <ul className="mt-4 space-y-3 text-gray-300">
// // //                 <li>• Clean communication with every client.</li>
// // //                 <li>• Design-led solutions matched to your budget.</li>
// // //                 <li>• Delivery on time, every time.</li>
// // //               </ul>
// // //             </div>
// // //             <div className="rounded-3xl bg-white/5 p-8">
// // //               <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
// // //                 Our promise
// // //               </p>
// // //               <p className="mt-4 text-gray-300 leading-7">
// // //                 Your event will feel captivating, organized and effortless from
// // //                 the first briefing to the final day.
// // //               </p>
// // //             </div>
// // //           </div>

// // //           <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
// // //             <div>
// // //               <h2 className="text-3xl font-semibold">
// // //                 Ready to design your celebration?
// // //               </h2>
// // //               <p className="mt-3 text-gray-300">
// // //                 Let us help you build an event that leaves a lasting impression.
// // //               </p>
// // //             </div>
// // //             <Link
// // //               to="/contact"
// // //               className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-purple-500 via-pink-500 to-rose-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:brightness-110"
// // //             >
// // //               Connect with us
// // //             </Link>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </main>
// // //   );
// // // };

// // // export default About;

// // import React from "react";
// // import { Link } from "react-router-dom";

// // const About = () => {
// //   return (
// //     <main className="bg-black text-white font-sans">
// //       {/* Hero Section */}
// //       <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
// //         <img
// //           src="https://www.balajidecorater.com/images/event-16.jpeg"
// //           alt="HighLight Enterprises Event"
// //           className="absolute inset-0 w-full h-full object-cover"
// //         />
// //         <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/70 to-black/90" />

// //         {/* Orange tent overlay effect */}
// //         <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#f97316_0,#f97316_40px,transparent_40px,transparent_80px)] opacity-10" />

// //         <div className="relative z-10 text-center max-w-4xl px-6">
// //           <nav className="text-sm text-white/80 mb-6">
// //             Home &gt;{" "}
// //             <span className="text-white">About HighLight Enterprises</span>
// //           </nav>

// //           <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
// //             About HighLight Enterprises
// //           </h1>

// //           <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
// //             From concept to curtain call — we craft experiences that feel
// //             effortless and look spectacular.
// //           </p>
// //           <p className="mt-6 text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
// //             A Bhopal event décor studio specializing in wedding décor, corporate
// //             shows, social celebrations and premium staging.
// //           </p>
// //         </div>
// //       </section>

// //       {/* Our Story Section */}
// //       <section className="max-w-7xl mx-auto px-6 py-20">
// //         <div className="grid lg:grid-cols-12 gap-12 items-start">
// //           {/* Left Content */}
// //           <div className="lg:col-span-7 space-y-8">
// //             <div>
// //               <h2 className="text-4xl font-bold mb-8">Our Story</h2>
// //               <div className="prose prose-invert text-lg leading-relaxed text-gray-300">
// //                 <p>
// //                   We transform visions into impactful realities. As a full
// //                   service event design &amp; management partner, we tailor
// //                   solutions to your goals, budget and timelines— grounded in a
// //                   decade of hands-on expertise.
// //                 </p>
// //                 <p className="mt-6">
// //                   From intimate soirees to large scale corporate galas, our
// //                   in-house team handles creative direction, production, vendor
// //                   orchestration and on-site show running. The result? Seamless
// //                   execution and a truly memorable experience for your guests.
// //                 </p>
// //               </div>
// //             </div>

// //             {/* Key Points */}
// //             <div className="space-y-4">
// //               {[
// //                 "Bespoke décor, theming & floral artistry",
// //                 "Stages, lighting, sound & AV integration",
// //                 "Vendor & logistics ownership and-to-end",
// //                 "Budget transparency & timeline rigor",
// //               ].map((point, i) => (
// //                 <div key={i} className="flex items-start gap-4">
// //                   <div className="w-2 h-2 mt-2.5 rounded-full bg-orange-500 shrink-0" />
// //                   <p className="text-gray-300 text-[17px]">{point}</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Right Sidebar - Recognitions */}
// //           <div className="lg:col-span-5">
// //             <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 sticky top-8">
// //               <div className="flex items-center gap-3 mb-6">
// //                 <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
// //                   ⭐
// //                 </div>
// //                 <h3 className="text-2xl font-semibold">Recognitions</h3>
// //               </div>

// //               <p className="text-gray-400 leading-relaxed mb-8">
// //                 We're grateful to be featured by clients, venues and local media
// //                 for craftsmanship and reliability. Every nod reminds us to keep
// //                 raising the bar.
// //               </p>

// //               <div className="flex flex-wrap gap-3">
// //                 {["Glim Gallery", "Detail Obsessed", "Trusted Partners"].map(
// //                   (tag) => (
// //                     <span
// //                       key={tag}
// //                       className="px-5 py-2 bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-full text-sm"
// //                     >
// //                       {tag}
// //                     </span>
// //                   ),
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* What We Believe + Gallery */}
// //       <section className="bg-zinc-950 py-20 border-t border-zinc-800">
// //         <div className="max-w-7xl mx-auto px-6">
// //           <div className="grid lg:grid-cols-12 gap-12 items-center">
// //             {/* What We Believe */}
// //             <div className="lg:col-span-5">
// //               <h2 className="text-4xl font-bold mb-10">What we believe</h2>

// //               <div className="space-y-10">
// //                 <div>
// //                   <h3 className="font-semibold text-xl mb-4 flex items-center gap-3">
// //                     <span className="text-orange-500">✦</span> Creativity
// //                   </h3>
// //                   <p className="text-gray-400">
// //                     Themes &amp; décor that feel uniquely you.
// //                   </p>
// //                 </div>

// //                 <div>
// //                   <h3 className="font-semibold text-xl mb-4 flex items-center gap-3">
// //                     <span className="text-orange-500">✦</span> Reliability
// //                   </h3>
// //                   <p className="text-gray-400">
// //                     Disciplined planning, zero last-minute chaos.
// //                   </p>
// //                 </div>

// //                 <div>
// //                   <h3 className="font-semibold text-xl mb-4 flex items-center gap-3">
// //                     <span className="text-orange-500">✦</span> Partnership
// //                   </h3>
// //                   <p className="text-gray-400">
// //                     Transparent budgets, clear communication.
// //                   </p>
// //                 </div>

// //                 <div>
// //                   <h3 className="font-semibold text-xl mb-4 flex items-center gap-3">
// //                     <span className="text-orange-500">✦</span> Craft
// //                   </h3>
// //                   <p className="text-gray-400">
// //                     Meticulous build quality &amp; finishing.
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Gallery Image */}
// //             <div className="lg:col-span-7">
// //               <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
// //                 <img
// //                   src="https://www.balajidecorater.com/images/event-16.jpeg"
// //                   alt="Indoor Event Setup"
// //                   className="w-full h-auto object-cover"
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* FAQ Section */}
// //       <section className="py-20 bg-[#050505] border-t border-zinc-800">
// //         <div className="max-w-7xl mx-auto px-6">
// //           <div className="text-center mb-10">
// //             <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
// //               FAQ
// //             </p>
// //             <h2 className="text-4xl font-bold mt-4">
// //               Frequently asked questions about our event design services
// //             </h2>
// //           </div>

// //           <div className="grid gap-6 lg:grid-cols-2">
// //             <details className="group rounded-3xl border border-white/10 bg-black/60 p-6">
// //               <summary className="cursor-pointer text-lg font-semibold text-white transition-colors group-open:text-purple-400">
// //                 What event services does HighLight Enterprises offer?
// //               </summary>
// //               <p className="mt-4 text-gray-300 leading-relaxed">
// //                 We offer full-service event design and décor for weddings,
// //                 corporate shows, social celebrations and product launches. Our
// //                 services include stage styling, lighting, floral décor,
// //                 furniture design and complete venue production.
// //               </p>
// //             </details>

// //             <details className="group rounded-3xl border border-white/10 bg-black/60 p-6">
// //               <summary className="cursor-pointer text-lg font-semibold text-white transition-colors group-open:text-purple-400">
// //                 Do you handle both indoor and outdoor event décor?
// //               </summary>
// //               <p className="mt-4 text-gray-300 leading-relaxed">
// //                 Yes. We create meaningful décor solutions for indoor banquet
// //                 halls, outdoor lawns, corporate venues and destination events
// //                 across Bhopal and surrounding regions.
// //               </p>
// //             </details>

// //             <details className="group rounded-3xl border border-white/10 bg-black/60 p-6">
// //               <summary className="cursor-pointer text-lg font-semibold text-white transition-colors group-open:text-purple-400">
// //                 How far in advance should I book your team?
// //               </summary>
// //               <p className="mt-4 text-gray-300 leading-relaxed">
// //                 For weddings and large-scale corporate events, we recommend
// //                 booking 6–8 weeks in advance. Smaller celebrations can often be
// //                 planned in 3–4 weeks depending on venue availability and scope.
// //               </p>
// //             </details>

// //             <details className="group rounded-3xl border border-white/10 bg-black/60 p-6">
// //               <summary className="cursor-pointer text-lg font-semibold text-white transition-colors group-open:text-purple-400">
// //                 Can you manage vendors and logistics as well?
// //               </summary>
// //               <p className="mt-4 text-gray-300 leading-relaxed">
// //                 Absolutely. We coordinate vendors, manage timelines and
// //                 supervise on-site execution, so your event runs smoothly from
// //                 the first briefing to the final celebration.
// //               </p>
// //             </details>
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section className="py-24 bg-black border-t border-white/10">
// //         <div className="max-w-4xl mx-auto text-center px-6">
// //           <h2 className="text-4xl md:text-5xl font-bold mb-6">
// //             Ready to create magic together?
// //           </h2>
// //           <p className="text-xl text-gray-400 mb-10">
// //             Let's turn your vision into an unforgettable celebration.
// //           </p>

// //           <Link
// //             to="/contact"
// //             className="inline-block bg-linear-to-r from-orange-500 via-amber-500 to-red-500 hover:brightness-110 transition px-10 py-5 rounded-full text-lg font-semibold"
// //           >
// //             Start Planning Your Event
// //           </Link>
// //         </div>
// //       </section>
// //     </main>
// //   );
// // };

// // export default About;

// import React from "react";
// import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet-async";

// const About = () => {
//   return (
//     <main className="bg-black text-white font-sans">
//       <Helmet>
//         <title>About HighLight Enterprises | Best Event Decorators in Madhya Pradesh</title>
//         <meta
//           name="description"
//           content="Learn about HighLight Enterprises - Premium event décor and management company in Madhya Pradesh. Expert in weddings, corporate events, and social celebrations with flawless execution."
//         />
//         <meta
//           name="keywords"
//           content="about highlight enterprises, event decorators bhopal, wedding decorators madhya pradesh, best event planner indore, corporate event company mp, event management bhopal, balaji decorater"
//         />
//         <meta property="og:title" content="About HighLight Enterprises | Premium Event Decorators MP" />
//         <meta
//           property="og:description"
//           content="From concept to curtain call — crafting spectacular events across Madhya Pradesh."
//         />
//         <meta property="og:type" content="website" />
//       </Helmet>

//       {/* Hero Section */}
//       <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
//         <img
//           src="https://www.balajidecorater.com/images/event-16.jpeg"
//           alt="HighLight Enterprises Event"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/70 to-black/90" />

//         {/* Orange tent overlay effect */}
//         <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#f97316_0,#f97316_40px,transparent_40px,transparent_80px)] opacity-10" />

//         <div className="relative z-10 text-center max-w-4xl px-6">
//           <nav className="text-sm text-white/80 mb-6">
//             Home &gt;{" "}
//             <span className="text-white">About HighLight Enterprises</span>
//           </nav>

//           <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
//             About HighLight Enterprises
//           </h1>

//           <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
//             From concept to curtain call — we craft experiences that feel
//             effortless and look spectacular.
//           </p>
//           <p className="mt-6 text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
//             A Bhopal event décor studio specializing in wedding décor, corporate
//             shows, social celebrations and premium staging.
//           </p>
//         </div>
//       </section>

//       {/* Our Story Section */}
//       <section className="max-w-7xl mx-auto px-6 py-20">
//         <div className="grid lg:grid-cols-12 gap-12 items-start">
//           {/* Left Content */}
//           <div className="lg:col-span-7 space-y-8">
//             <div>
//               <h2 className="text-4xl font-bold mb-8">Our Story</h2>
//               <div className="prose prose-invert text-lg leading-relaxed text-gray-300">
//                 <p>
//                   We transform visions into impactful realities. As a full
//                   service event design &amp; management partner, we tailor
//                   solutions to your goals, budget and timelines— grounded in a
//                   decade of hands-on expertise.
//                 </p>
//                 <p className="mt-6">
//                   From intimate soirees to large scale corporate galas, our
//                   in-house team handles creative direction, production, vendor
//                   orchestration and on-site show running. The result? Seamless
//                   execution and a truly memorable experience for your guests.
//                 </p>
//               </div>
//             </div>

//             {/* Key Points */}
//             <div className="space-y-4">
//               {[
//                 "Bespoke décor, theming & floral artistry",
//                 "Stages, lighting, sound & AV integration",
//                 "Vendor & logistics ownership and-to-end",
//                 "Budget transparency & timeline rigor",
//               ].map((point, i) => (
//                 <div key={i} className="flex items-start gap-4">
//                   <div className="w-2 h-2 mt-2.5 rounded-full bg-orange-500 shrink-0" />
//                   <p className="text-gray-300 text-[17px]">{point}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Sidebar - Recognitions */}
//           <div className="lg:col-span-5">
//             <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 sticky top-8">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
//                   ⭐
//                 </div>
//                 <h3 className="text-2xl font-semibold">Recognitions</h3>
//               </div>

//               <p className="text-gray-400 leading-relaxed mb-8">
//                 We're grateful to be featured by clients, venues and local media
//                 for craftsmanship and reliability. Every nod reminds us to keep
//                 raising the bar.
//               </p>

//               <div className="flex flex-wrap gap-3">
//                 {["Glim Gallery", "Detail Obsessed", "Trusted Partners"].map(
//                   (tag) => (
//                     <span
//                       key={tag}
//                       className="px-5 py-2 bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-full text-sm"
//                     >
//                       {tag}
//                     </span>
//                   ),
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* What We Believe + Gallery */}
//       <section className="bg-zinc-950 py-20 border-t border-zinc-800">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid lg:grid-cols-12 gap-12 items-center">
//             {/* What We Believe */}
//             <div className="lg:col-span-5">
//               <h2 className="text-4xl font-bold mb-10">What we believe</h2>

//               <div className="space-y-10">
//                 <div>
//                   <h3 className="font-semibold text-xl mb-4 flex items-center gap-3">
//                     <span className="text-orange-500">✦</span> Creativity
//                   </h3>
//                   <p className="text-gray-400">
//                     Themes &amp; décor that feel uniquely you.
//                   </p>
//                 </div>

//                 <div>
//                   <h3 className="font-semibold text-xl mb-4 flex items-center gap-3">
//                     <span className="text-orange-500">✦</span> Reliability
//                   </h3>
//                   <p className="text-gray-400">
//                     Disciplined planning, zero last-minute chaos.
//                   </p>
//                 </div>

//                 <div>
//                   <h3 className="font-semibold text-xl mb-4 flex items-center gap-3">
//                     <span className="text-orange-500">✦</span> Partnership
//                   </h3>
//                   <p className="text-gray-400">
//                     Transparent budgets, clear communication.
//                   </p>
//                 </div>

//                 <div>
//                   <h3 className="font-semibold text-xl mb-4 flex items-center gap-3">
//                     <span className="text-orange-500">✦</span> Craft
//                   </h3>
//                   <p className="text-gray-400">
//                     Meticulous build quality &amp; finishing.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Gallery Image */}
//             <div className="lg:col-span-7">
//               <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
//                 <img
//                   src="https://www.balajidecorater.com/images/event-16.jpeg"
//                   alt="Indoor Event Setup"
//                   className="w-full h-auto object-cover"
//                 />
//               </div>
//             </div>
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
//               Frequently asked questions about our event design services
//             </h2>
//           </div>

//           <div className="grid gap-6 lg:grid-cols-2">
//             <details className="group rounded-3xl border border-white/10 bg-black/60 p-6">
//               <summary className="cursor-pointer text-lg font-semibold text-white transition-colors group-open:text-purple-400">
//                 What event services does HighLight Enterprises offer?
//               </summary>
//               <p className="mt-4 text-gray-300 leading-relaxed">
//                 We offer full-service event design and décor for weddings,
//                 corporate shows, social celebrations and product launches. Our
//                 services include stage styling, lighting, floral décor,
//                 furniture design and complete venue production.
//               </p>
//             </details>

//             <details className="group rounded-3xl border border-white/10 bg-black/60 p-6">
//               <summary className="cursor-pointer text-lg font-semibold text-white transition-colors group-open:text-purple-400">
//                 Do you handle both indoor and outdoor event décor?
//               </summary>
//               <p className="mt-4 text-gray-300 leading-relaxed">
//                 Yes. We create meaningful décor solutions for indoor banquet
//                 halls, outdoor lawns, corporate venues and destination events
//                 across Bhopal and surrounding regions.
//               </p>
//             </details>

//             <details className="group rounded-3xl border border-white/10 bg-black/60 p-6">
//               <summary className="cursor-pointer text-lg font-semibold text-white transition-colors group-open:text-purple-400">
//                 How far in advance should I book your team?
//               </summary>
//               <p className="mt-4 text-gray-300 leading-relaxed">
//                 For weddings and large-scale corporate events, we recommend
//                 booking 6–8 weeks in advance. Smaller celebrations can often be
//                 planned in 3–4 weeks depending on venue availability and scope.
//               </p>
//             </details>

//             <details className="group rounded-3xl border border-white/10 bg-black/60 p-6">
//               <summary className="cursor-pointer text-lg font-semibold text-white transition-colors group-open:text-purple-400">
//                 Can you manage vendors and logistics as well?
//               </summary>
//               <p className="mt-4 text-gray-300 leading-relaxed">
//                 Absolutely. We coordinate vendors, manage timelines and
//                 supervise on-site execution, so your event runs smoothly from
//                 the first briefing to the final celebration.
//               </p>
//             </details>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-24 bg-black border-t border-white/10">
//         <div className="max-w-4xl mx-auto text-center px-6">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             Ready to create magic together?
//           </h2>
//           <p className="text-xl text-gray-400 mb-10">
//             Let's turn your vision into an unforgettable celebration.
//           </p>

//           <Link
//             to="/contact"
//             className="inline-block bg-linear-to-r from-orange-500 via-amber-500 to-red-500 hover:brightness-110 transition px-10 py-5 rounded-full text-lg font-semibold"
//           >
//             Start Planning Your Event
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default About;

import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import event1 from "../assets/event4.jpg";

const About = () => {
  return (
    <main className="bg-black text-white font-sans">
      <Helmet>
        <title>About HighLight Enterprises | Best Event Decorators in Madhya Pradesh</title>
        <meta
          name="description"
          content="Learn about HighLight Enterprises - Premium event décor and management company in Madhya Pradesh. Expert in weddings, corporate events, and social celebrations with flawless execution."
        />
        <meta
          name="keywords"
          content="about highlight enterprises, event decorators bhopal, wedding decorators madhya pradesh, best event planner indore, corporate event company mp, event management bhopal, balaji decorater"
        />
        <meta property="og:title" content="About HighLight Enterprises | Premium Event Decorators MP" />
        <meta
          property="og:description"
          content="From concept to curtain call — crafting spectacular events across Madhya Pradesh."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <img
          src={event1}
          alt="HighLight Enterprises Event"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/70 to-black/90" />

        {/* Orange tent overlay effect */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#f97316_0,#f97316_40px,transparent_40px,transparent_80px)] opacity-10" />

        <div className="relative z-10 text-center max-w-4xl px-6">
          <nav className="text-sm text-white/80 mb-6">
            Home &gt;{" "}
            <span className="text-white">About HighLight Enterprises</span>
          </nav>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            About HighLight Enterprises
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            From concept to curtain call — we craft experiences that feel
            effortless and look spectacular.
          </p>
          <p className="mt-6 text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            A Bhopal event décor studio specializing in wedding décor, corporate
            shows, social celebrations and premium staging.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-8">Our Story</h2>
              <div className="prose prose-invert text-lg leading-relaxed text-gray-300">
                <p>
                  We transform visions into impactful realities. As a full
                  service event design &amp; management partner, we tailor
                  solutions to your goals, budget and timelines— grounded in a
                  decade of hands-on expertise.
                </p>
                <p className="mt-6">
                  From intimate soirees to large scale corporate galas, our
                  in-house team handles creative direction, production, vendor
                  orchestration and on-site show running. The result? Seamless
                  execution and a truly memorable experience for your guests.
                </p>
              </div>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              {[
                "Bespoke décor, theming & floral artistry",
                "Stages, lighting, sound & AV integration",
                "Vendor & logistics ownership and-to-end",
                "Budget transparency & timeline rigor",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-orange-500 shrink-0" />
                  <p className="text-gray-300 text-[17px]">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar - Recognitions */}
          <div className="lg:col-span-5">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 sticky top-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  ⭐
                </div>
                <h3 className="text-2xl font-semibold">Recognitions</h3>
              </div>

              <p className="text-gray-400 leading-relaxed mb-8">
                We're grateful to be featured by clients, venues and local media
                for craftsmanship and reliability. Every nod reminds us to keep
                raising the bar.
              </p>

              <div className="flex flex-wrap gap-3">
                {["Glim Gallery", "Detail Obsessed", "Trusted Partners"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-5 py-2 bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe + Gallery */}
      <section className="bg-zinc-950 py-20 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* What We Believe */}
            <div className="lg:col-span-5">
              <h2 className="text-4xl font-bold mb-10">What we believe</h2>

              <div className="space-y-10">
                <div>
                  <h3 className="font-semibold text-xl mb-4 flex items-center gap-3">
                    <span className="text-orange-500">✦</span> Creativity
                  </h3>
                  <p className="text-gray-400">
                    Themes &amp; décor that feel uniquely you.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-xl mb-4 flex items-center gap-3">
                    <span className="text-orange-500">✦</span> Reliability
                  </h3>
                  <p className="text-gray-400">
                    Disciplined planning, zero last-minute chaos.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-xl mb-4 flex items-center gap-3">
                    <span className="text-orange-500">✦</span> Partnership
                  </h3>
                  <p className="text-gray-400">
                    Transparent budgets, clear communication.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-xl mb-4 flex items-center gap-3">
                    <span className="text-orange-500">✦</span> Craft
                  </h3>
                  <p className="text-gray-400">
                    Meticulous build quality &amp; finishing.
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery Image */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
                <img
                  src="https://www.balajidecorater.com/images/event-16.jpeg"
                  alt="Indoor Event Setup"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
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
              Everything you need to know about our event design services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <details className="group rounded-3xl bg-white/5 px-8 py-6 transition-all hover:bg-white/10">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-medium list-none">
                <span>What event services does HighLight Enterprises offer?</span>
                <span className="text-2xl text-purple-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-6 text-gray-300 leading-relaxed pr-8">
                We offer full-service event design and décor for weddings,
                corporate shows, social celebrations and product launches. Our
                services include stage styling, lighting, floral décor,
                furniture design and complete venue production.
              </p>
            </details>

            <details className="group rounded-3xl bg-white/5 px-8 py-6 transition-all hover:bg-white/10">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-medium list-none">
                <span>Do you handle both indoor and outdoor event décor?</span>
                <span className="text-2xl text-purple-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-6 text-gray-300 leading-relaxed pr-8">
                Yes. We create meaningful décor solutions for indoor banquet
                halls, outdoor lawns, corporate venues and destination events
                across Bhopal and surrounding regions.
              </p>
            </details>

            <details className="group rounded-3xl bg-white/5 px-8 py-6 transition-all hover:bg-white/10">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-medium list-none">
                <span>How far in advance should I book your team?</span>
                <span className="text-2xl text-purple-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-6 text-gray-300 leading-relaxed pr-8">
                For weddings and large-scale corporate events, we recommend
                booking 6–8 weeks in advance. Smaller celebrations can often be
                planned in 3–4 weeks depending on venue availability and scope.
              </p>
            </details>

            <details className="group rounded-3xl bg-white/5 px-8 py-6 transition-all hover:bg-white/10">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-medium list-none">
                <span>Can you manage vendors and logistics as well?</span>
                <span className="text-2xl text-purple-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-6 text-gray-300 leading-relaxed pr-8">
                Absolutely. We coordinate vendors, manage timelines and
                supervise on-site execution, so your event runs smoothly from
                the first briefing to the final celebration.
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

      {/* CTA Section */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to create magic together?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Let's turn your vision into an unforgettable celebration.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-linear-to-r from-orange-500 via-amber-500 to-red-500 hover:brightness-110 transition px-10 py-5 rounded-full text-lg font-semibold"
          >
            Start Planning Your Event
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
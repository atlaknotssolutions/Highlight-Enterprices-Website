// import { Link } from "react-router-dom";
// import ContactForm from "../Component/ContactForm";

// const heroImage = "https://www.balajidecorater.com/images/event-4.jpeg";
// const galleryImages = [
//   "https://www.balajidecorater.com/images/event-20.jpeg",
//   "https://www.balajidecorater.com/images/event-21.jpeg",
//   "https://www.balajidecorater.com/images/event-22.jpeg",
//   "https://www.balajidecorater.com/images/event-23.jpeg",
//   "https://www.balajidecorater.com/images/event-25.jpeg",
//   "https://www.balajidecorater.com/images/event-16.jpeg",
// ];

// function Home() {
//   return (
//     <main className="bg-black text-white">
//       <section className="relative overflow-hidden pt-24">
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${heroImage})` }}
//         />
//         <div className="absolute inset-0 bg-black/70" />

//         <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-28">
//           <div className="max-w-3xl space-y-8">
//             <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.4em] text-purple-300">
//               HIGHLIGHT ENTERPRISES
//             </span>
//             <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
//               Where your event vision meets flawless décor execution
//             </h1>
//             <p className="max-w-2xl text-lg text-gray-300 sm:text-xl">
//               End-to-end décor & event design for weddings, social celebrations
//               and corporate shows — planned with precision, executed with style.
//             </p>
//             <div className="flex flex-col gap-4 sm:flex-row">
//               <Link
//                 to="/contact"
//                 className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-purple-500 via-pink-500 to-rose-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:brightness-110"
//               >
//                 Contact Us
//               </Link>
//               <Link
//                 to="/about"
//                 className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
//               >
//                 Read More
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="border-t border-white/10 bg-[#050505] py-16">
//         <div className="mx-auto max-w-7xl px-6 grid gap-6 lg:grid-cols-3">
//           <div className="rounded-3xl bg-white/5 p-8">
//             <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
//               Loved by clients.
//             </p>
//             <h2 className="mt-4 text-3xl font-semibold">
//               Recognized by the industry.
//             </h2>
//             <p className="mt-4 text-sm leading-7 text-gray-300">
//               We’re proud to be acknowledged by clients, publications and
//               partners. It keeps us grounded in our values — craftsmanship,
//               integrity and unforgettable experiences.
//             </p>
//           </div>
//           <div className="rounded-3xl bg-white/5 p-8">
//             <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
//               Trusted partner
//             </p>
//             <h3 className="mt-4 text-2xl font-semibold">
//               500+ Events Delivered
//             </h3>
//             <p className="mt-4 text-sm leading-7 text-gray-300">
//               From weddings to corporate events, every project is managed with
//               care and a WOW-first mindset.
//             </p>
//           </div>
//           <div className="rounded-3xl bg-white/5 p-8">
//             <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
//               Industry acclaim
//             </p>
//             <h3 className="mt-4 text-2xl font-semibold">Featured in Vogue</h3>
//             <p className="mt-4 text-sm leading-7 text-gray-300">
//               Our work appears in leading publications for its elegance, scale
//               and execution.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="mx-auto max-w-7xl px-6 py-16">
//         <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
//           <div className="space-y-6">
//             <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
//               About Us
//             </p>
//             <h2 className="text-4xl font-bold">
//               From idea to immaculate execution.
//             </h2>
//             <p className="text-lg leading-8 text-gray-300">
//               At HighLight Enterprises, we go beyond planning. We partner with
//               you from concept to curtain-call—designing, producing and managing
//               events that feel effortless and look spectacular.
//             </p>
//             <ul className="space-y-3 text-gray-300">
//               <li>• Bespoke décor & thematic styling</li>
//               <li>• One-stop vendor coordination</li>
//               <li>• Timeline & budget discipline</li>
//             </ul>
//             <Link
//               to="/about"
//               className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
//             >
//               Learn More
//             </Link>
//           </div>
//           <div className="overflow-hidden rounded-4xl bg-white/5 shadow-2xl shadow-black/20">
//             <img
//               src="https://www.balajidecorater.com/images/event-22.jpeg"
//               alt="About HighLight Enterprises"
//               className="h-full w-full object-cover"
//             />
//           </div>
//         </div>
//       </section>

//       <section className="border-t border-white/10 bg-[#050505] py-16">
//         <div className="mx-auto max-w-7xl px-6">
//           <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
//             <div>
//               <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
//                 Our Vision
//               </p>
//               <h2 className="mt-4 text-4xl font-bold">
//                 Events that exceed expectations—every single time.
//               </h2>
//               <p className="mt-6 text-lg leading-8 text-gray-300">
//                 We aim to lead in event design & communication by delivering
//                 experiences that consistently outperform on creativity, service
//                 and value.
//               </p>
//               <div className="mt-8 grid gap-4 sm:grid-cols-2">
//                 <div className="rounded-3xl bg-white/5 p-6">
//                   <h3 className="font-semibold">Insight-driven concepts</h3>
//                   <p className="mt-2 text-sm text-gray-300">
//                     Tailored to your story and audience.
//                   </p>
//                 </div>
//                 <div className="rounded-3xl bg-white/5 p-6">
//                   <h3 className="font-semibold">Clear guidance</h3>
//                   <p className="mt-2 text-sm text-gray-300">
//                     From plan to production with honest communication.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="overflow-hidden rounded-4xl bg-white/5 shadow-2xl shadow-black/20">
//               <img
//                 src="https://www.balajidecorater.com/images/event-23.jpeg"
//                 alt="Our Vision"
//                 className="h-full w-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="mx-auto max-w-7xl px-6 py-16">
//         <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
//           <div className="overflow-hidden rounded-4xl bg-white/5 shadow-2xl shadow-black/20">
//             <img
//               src="https://www.balajidecorater.com/images/event-1.jpeg"
//               alt="Our Mission"
//               className="h-full w-full object-cover"
//             />
//           </div>
//           <div className="space-y-6">
//             <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
//               Our Mission
//             </p>
//             <h2 className="text-4xl font-bold">
//               MP’s most trusted event partner.
//             </h2>
//             <p className="text-lg leading-8 text-gray-300">
//               We combine strategy with top-notch resources to design, execute
//               and produce events that transform your vision into
//               reality—beautifully and reliably.
//             </p>
//             <ul className="space-y-3 text-gray-300">
//               <li>• Creative direction with practical delivery</li>
//               <li>• Full vendor coordination and execution</li>
//               <li>• On-time, on-budget event management</li>
//             </ul>
//             <Link
//               to="/mission"
//               className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
//             >
//               Discover More
//             </Link>
//           </div>
//         </div>
//       </section>

//       <section className="border-t border-white/10 bg-[#050505] py-16">
//         <div className="mx-auto max-w-7xl px-6">
//           <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
//             <div>
//               <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
//                 A peek at our latest work
//               </p>
//               <h2 className="mt-4 text-4xl font-bold">
//                 Weddings, receptions, product launches and more.
//               </h2>
//             </div>
//             <Link
//               to="/contact"
//               className="inline-flex items-center rounded-full bg-linear-to-r from-purple-500 via-pink-500 to-rose-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:brightness-110"
//             >
//               Plan Yours
//             </Link>
//           </div>
//           <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
//             {galleryImages.map((src) => (
//               <div
//                 key={src}
//                 className="overflow-hidden rounded-4xl bg-white/5 shadow-2xl shadow-black/20"
//               >
//                 <img
//                   src={src}
//                   alt="Event gallery"
//                   className="h-72 w-full object-cover transition duration-500 hover:scale-105"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="bg-black text-white font-sans">
//         {/* Contact Banner */}
//         <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
//           <img
//             src="https://www.balajidecorater.com/images/event-25.jpeg"
//             alt="Event Tent Setup"
//             className="absolute inset-0 w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/75 to-black/90" />

//           <div className="relative z-10 text-center px-6 max-w-4xl">
//             <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
//               Let's design your event
//             </h1>
//             <p className="text-xl text-white/90 max-w-2xl mx-auto">
//               Tell us a bit about your celebration and we'll get back within 24
//               hours.
//             </p>
//           </div>
//         </section>

//         {/* Form Section */}
//         <section className="max-w-7xl mx-auto px-6 py-16">
//           <div className="grid lg:grid-cols-2 gap-12 items-start">
//             {/* Left Side - Image */}
//             <div className="rounded-3xl overflow-hidden shadow-2xl h-full min-h-125 lg:min-h-162.5">
//               <img
//                 src="https://www.balajidecorater.com/images/event-25.jpeg"
//                 alt="Luxury Event Tent"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Right Side - Form */}
//             <ContactForm />
//           </div>
//         </section>
//       </section>
//     </main>
//   );
// }

// export default Home;
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ContactForm from "../Component/ContactForm";

const heroImage = "https://www.balajidecorater.com/images/event-4.jpeg";
const galleryImages = [
  "https://www.balajidecorater.com/images/event-20.jpeg",
  "https://www.balajidecorater.com/images/event-21.jpeg",
  "https://www.balajidecorater.com/images/event-22.jpeg",
  "https://www.balajidecorater.com/images/event-23.jpeg",
  "https://www.balajidecorater.com/images/event-25.jpeg",
  "https://www.balajidecorater.com/images/event-16.jpeg",
];

const faqs = [
  {
    q: "What types of events do you handle?",
    a: "We specialize in weddings, receptions, corporate events, product launches, birthday celebrations, conferences, and social gatherings across Madhya Pradesh.",
  },
  {
    q: "How far in advance should I book your services?",
    a: "We recommend booking at least 3-6 months in advance for weddings and large events. For smaller events, 4-8 weeks is usually sufficient.",
  },
  {
    q: "Do you provide complete end-to-end event management?",
    a: "Yes. We offer full-service décor, vendor coordination, timeline management, on-site execution, and post-event support.",
  },
  {
    q: "What is your service area?",
    a: "We primarily serve Indore, Bhopal, Ujjain, Jabalpur, Gwalior and other major cities in Madhya Pradesh. We can also travel for destination events.",
  },
  {
    q: "How do you handle budget and customization?",
    a: "Every event is customized according to your vision and budget. We provide transparent pricing with multiple packages and flexible options.",
  },
  {
    q: "Can I see your previous work?",
    a: "Yes! You can explore our complete portfolio on the Gallery page or view selected works throughout this website.",
  },
];

function Home() {
  return (
    <main className="bg-black text-white">
      <Helmet>
        <title>HighLight Enterprises | Best Event Decorators in Madhya Pradesh</title>
        <meta
          name="description"
          content="Premium event decoration & management services in MP. Weddings, corporate events, receptions & more. Bespoke décor with flawless execution."
        />
        <meta
          name="keywords"
          content="event decorators indore, wedding decorators mp, best event planner madhya pradesh, corporate event decoration, stage decoration indore, balaji decorater, highlight enterprises, event management indore"
        />
        <meta property="og:title" content="HighLight Enterprises | Premium Event Decorators in MP" />
        <meta
          property="og:description"
          content="Where your event vision meets flawless décor execution. Weddings, Corporate & Social Events in Madhya Pradesh."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="relative overflow-hidden pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-28">
          <div className="max-w-3xl space-y-8">
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.4em] text-purple-300">
              HIGHLIGHT ENTERPRISES
            </span>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Where your event vision meets flawless décor execution
            </h1>
            <p className="max-w-2xl text-lg text-gray-300 sm:text-xl">
              End-to-end décor & event design for weddings, social celebrations
              and corporate shows — planned with precision, executed with style.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-purple-500 via-pink-500 to-rose-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:brightness-110"
              >
                Contact Us
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#050505] py-16">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
              Loved by clients.
            </p>
            <h2 className="mt-4 text-3xl font-semibold">
              Recognized by the industry.
            </h2>
            <p className="mt-4 text-sm leading-7 text-gray-300">
              We’re proud to be acknowledged by clients, publications and
              partners. It keeps us grounded in our values — craftsmanship,
              integrity and unforgettable experiences.
            </p>
          </div>
          <div className="rounded-3xl bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
              Trusted partner
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              500+ Events Delivered
            </h3>
            <p className="mt-4 text-sm leading-7 text-gray-300">
              From weddings to corporate events, every project is managed with
              care and a WOW-first mindset.
            </p>
          </div>
          <div className="rounded-3xl bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
              Industry acclaim
            </p>
            <h3 className="mt-4 text-2xl font-semibold">Featured in Vogue</h3>
            <p className="mt-4 text-sm leading-7 text-gray-300">
              Our work appears in leading publications for its elegance, scale
              and execution.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
              About Us
            </p>
            <h2 className="text-4xl font-bold">
              From idea to immaculate execution.
            </h2>
            <p className="text-lg leading-8 text-gray-300">
              At HighLight Enterprises, we go beyond planning. We partner with
              you from concept to curtain-call—designing, producing and managing
              events that feel effortless and look spectacular.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li>• Bespoke décor & thematic styling</li>
              <li>• One-stop vendor coordination</li>
              <li>• Timeline & budget discipline</li>
            </ul>
            <Link
              to="/about"
              className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
            >
              Learn More
            </Link>
          </div>
          <div className="overflow-hidden rounded-4xl bg-white/5 shadow-2xl shadow-black/20">
            <img
              src="https://www.balajidecorater.com/images/event-22.jpeg"
              alt="About HighLight Enterprises"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#050505] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
                Our Vision
              </p>
              <h2 className="mt-4 text-4xl font-bold">
                Events that exceed expectations—every single time.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                We aim to lead in event design & communication by delivering
                experiences that consistently outperform on creativity, service
                and value.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/5 p-6">
                  <h3 className="font-semibold">Insight-driven concepts</h3>
                  <p className="mt-2 text-sm text-gray-300">
                    Tailored to your story and audience.
                  </p>
                </div>
                <div className="rounded-3xl bg-white/5 p-6">
                  <h3 className="font-semibold">Clear guidance</h3>
                  <p className="mt-2 text-sm text-gray-300">
                    From plan to production with honest communication.
                  </p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-4xl bg-white/5 shadow-2xl shadow-black/20">
              <img
                src="https://www.balajidecorater.com/images/event-23.jpeg"
                alt="Our Vision"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-4xl bg-white/5 shadow-2xl shadow-black/20">
            <img
              src="https://www.balajidecorater.com/images/event-1.jpeg"
              alt="Our Mission"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
              Our Mission
            </p>
            <h2 className="text-4xl font-bold">
              MP’s most trusted event partner.
            </h2>
            <p className="text-lg leading-8 text-gray-300">
              We combine strategy with top-notch resources to design, execute
              and produce events that transform your vision into
              reality—beautifully and reliably.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li>• Creative direction with practical delivery</li>
              <li>• Full vendor coordination and execution</li>
              <li>• On-time, on-budget event management</li>
            </ul>
            <Link
              to="/mission"
              className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
            >
              Discover More
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#050505] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
                A peek at our latest work
              </p>
              <h2 className="mt-4 text-4xl font-bold">
                Weddings, receptions, product launches and more.
              </h2>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-linear-to-r from-purple-500 via-pink-500 to-rose-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:brightness-110"
            >
              Plan Yours
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {galleryImages.map((src) => (
              <div
                key={src}
                className="overflow-hidden rounded-4xl bg-white/5 shadow-2xl shadow-black/20"
              >
                <img
                  src={src}
                  alt="Event gallery"
                  className="h-72 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Everything you need to know about working with us
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-3xl bg-white/5 px-8 py-6 transition-all hover:bg-white/10"
              >
                <summary className="flex cursor-pointer items-center justify-between text-lg font-medium list-none">
                  <span>{faq.q}</span>
                  <span className="text-2xl text-purple-400 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-6 text-gray-300 leading-relaxed pr-8">
                  {faq.a}
                </p>
              </details>
            ))}
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

      <section className="bg-black text-white font-sans">
        {/* Contact Banner */}
        <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
          <img
            src="https://www.balajidecorater.com/images/event-25.jpeg"
            alt="Event Tent Setup"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/75 to-black/90" />

          <div className="relative z-10 text-center px-6 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
              Let's design your event
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Tell us a bit about your celebration and we'll get back within 24
              hours.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl h-full min-h-125 lg:min-h-162.5">
              <img
                src="https://www.balajidecorater.com/images/event-25.jpeg"
                alt="Luxury Event Tent"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Side - Form */}
            <ContactForm />
          </div>
        </section>
      </section>
    </main>
  );
}

export default Home;
import ShortUrl from "@/components/ShortUrl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";



const features = [
  {
    title: "Simple Shortening",
    desc: "Transform long, unwieldy URLs into clean, memorable links with just one click.",
    icon: (
      <>
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M8.12 8.12 12 12M20 4 8.12 15.88M14.8 14.8 20 20" />
      </>
    ),
  },
  {
    title: "Lightning Fast",
    desc: "Our platform is built for speed, ensuring your shortened URLs load instantly.",
    icon: <path d="M4 14 14 2l-2 8h8L10 22l2-8z" />,
  },
  {
    title: "Secure Links",
    desc: "All shortened URLs are protected with enterprise-grade security and privacy.",
    icon: (
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
    ),
  },
  {
    title: "Detailed Analytics",
    desc: "Track clicks, geographic data, and referrers with our powerful analytics.",
    icon: (
      <>
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <path d="M8 17v-3M13 17V5M18 17V9" />
      </>
    ),
  },
];

 const items = [
    {
      value: "item-1",
      trigger: "Is Trimrr really free?",
      content:
        "Yes, Trimrr is completely free to use. You can shorten, customize, and track your links without any cost.",
    },
    {
      value: "item-2",
      trigger: "Can I track link analytics?",
      content:
        "Absolutely. You can monitor clicks, performance, and engagement with built-in analytics tools.",
    },
    {
      value: "item-3",
      trigger: "Do I need an account?",
      content:
        "Yes, creating an account allows you to manage and track your shortened URLs securely.",
    },
  ];
function Herosection() {

  return (
    <section className="px-4 py-20 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="my-10 text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            The only{" "}
            <span className="bg-linear-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
              URL Shortener
            </span>
            <br />
            you'll ever need!
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mt-6">
            Shorten, customize, and track your links with{" "}
            <span className="text-yellow-400 font-semibold">Trimrr</span> —
            the most powerful totally free URL shortener for modern businesses.
          </p>
        </div>
        <ShortUrl />
        <div className="w-full mb-20 relative">
          <img
            src="https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
            alt="URL Shortening Dashboard"
            className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-xl"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent rounded-2xl" />
        </div>

        <div className="mb-20 w-full">
          {/* Heading */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
              Why Choose{" "}
              <span className="bg-linear-to-r from-yellow-400 to-orange-500 bg-clip-text font-extrabold text-transparent">
                Trimrr
              </span>
              ?
            </h2>

            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              Discover the powerful features that make{" "}
              <span className="font-semibold text-yellow-400">Trimrr</span> the perfect
              choice for individuals and businesses.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-300">
            Got questions? We've got answers.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="max-w-5xl mx-auto rounded-2xl border border-white/20 bg-white/5 backdrop-blur-lg shadow-inner"
        >
          {items.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="border-b border-white/20 last:border-b-0"
            >
              <AccordionTrigger className="flex justify-between items-center px-6 py-4 text-left text-white text-lg font-medium rounded-lg hover:bg-white/10 transition-all duration-300 group">
                {item.trigger}
              </AccordionTrigger>

              <AccordionContent className="px-6 pb-6 text-gray-300 text-base leading-relaxed transition-all duration-300">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default Herosection;


function FeatureCard({ title, desc, icon }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-yellow-400/50 hover:bg-white/10">
      <div className="absolute left-0 top-0 h-1 w-full rounded-t-2xl bg-linear-to-r from-yellow-400 to-yellow-600 opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="flex flex-col items-center text-center">
        <div className="mb-6 rounded-2xl bg-yellow-400/10 p-4 group-hover:bg-yellow-400/20">
          <svg
            className="h-8 w-8 text-yellow-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {icon}
          </svg>
        </div>

        <h3 className="mb-4 text-xl font-semibold text-white group-hover:text-yellow-400">
          {title}
        </h3>
        <p className="text-gray-300">{desc}</p>
      </div>
    </div>
  );
}

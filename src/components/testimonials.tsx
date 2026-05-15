import { User } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  location: string;
  logo: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      " Since switching to MyFojo WhatsApp Ordering, my profit margins have improved instantly with 0% commission. I now manage all order updates in one WhatsApp chat and communicate directly with my customers. It’s simple, efficient, and completely under my control.",
    name: "Sourabh",
    location: "Nutkhut-Owner",
    logo: "/images/nutkhut.jpg",
  },
  {
    id: 2,
    quote:
      " My customers are already on WhatsApp, and with MyFojo’s 98% open rate, my promotions actually convert into real orders. The menu showcase, direct conversations, and repeat business have helped my restaurant grow without paying high commissions to aggregators. Highly recommended!",
    name: "Sujata nigam",
    location: "Handi se-Owner",
    logo: "/images/handise.jpg",
  },
  {
    id: 3,
    quote:
      "MyFojo helped me cut down heavy aggregator commissions completely. With 0% commission and direct WhatsApp ordering, I now keep full profits and have better control over my customer relationships. It’s a smart and profitable solution.",
    name: "Rajiv Singh",
    location: "Noidawery-Manager",
    logo: "/images/noidawery.jpg",
  },
  {
    id: 4,
    quote:
      " The best part about MyFojo is that all order updates happen in one WhatsApp chat. From order received to delivery, everything is smooth and transparent. My repeat orders have increased because I can directly engage with customers. ",
    name: "Naveen",
    location: "Barrack62-Manager",
    logo: "/images/barrack.jpg",
  },
  {
    id: 5,
    quote:
      " Earlier, I had no access to my customer data. With MyFojo, I own my customer list and can run campaigns easily. The 98% open rate and instant menu showcase have boosted my sales without increasing menu prices. Highly satisfied! ",
    name: "Sumit",
    location: "Handi highway dining-Owner",
    logo: "/images/handihighway.jpg",
  },

   
];

export default function Testimonials() {
  return (
    <section className="relative py-16 bg-white-500 overflow-hidden">
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-orange-500 mb-12 font-[Lato]">
        What Our Clients Say
      </h2>

      {/* Scrolling Belt */}
      <div className="w-full overflow-hidden">
        <div className="flex gap-6 animate-marquee">
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg min-w-[350px] max-w-[350px] flex-shrink-0 border border-red-300"
            >
              {/* Logo */}
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src={testimonial.logo}
                    alt="Company Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Quote */}
              <div className="mb-6 relative">
                <span className="text-red-400 text-4xl font-bold absolute -top-4 -left-2">
                  "
                </span>
                <p className="text-gray-700 text-sm leading-relaxed pl-4 pr-2">
                  {testimonial.quote}
                </p>
                <span className="text-red-400 text-4xl font-bold absolute -bottom-6 right-2">
                  "
                </span>
              </div>

              {/* Customer Info */}
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 bg-red-400 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-red-600 text-xs font-medium">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes for scrolling effect */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 25s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
    
  );
}

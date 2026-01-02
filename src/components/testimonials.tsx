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
      "Shifting to Menew was one of my best decision. Billing and reports helped me in running restaurant so easily and now I can take better quick decisions.",
    name: "Ritik Goel",
    location: "Jammu",
    logo: "/lovable-uploads/a25f4954-f5c2-44f5-be1d-6809b7126407.png",
  },
  {
    id: 2,
    quote:
      "Great support. Very satisfied with software and they keep adding new useful features which really helps me build strategies for increasing revenue.",
    name: "Nikhil Verma",
    location: "Ambala, Haryana",
    logo: "/lovable-uploads/a25f4954-f5c2-44f5-be1d-6809b7126407.png",
  },
  {
    id: 3,
    quote:
      "My staff finds it user-friendly. Training new employees is easy now. Team is so reachable & responds quickly.",
    name: "Mohammed Khalid",
    location: "Hyderabad",
    logo: "/lovable-uploads/a25f4954-f5c2-44f5-be1d-6809b7126407.png",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-16 bg-green-200 overflow-hidden">
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
              className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg min-w-[350px] max-w-[350px] flex-shrink-0 border border-green-300"
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
                <span className="text-green-400 text-4xl font-bold absolute -top-4 -left-2">
                  "
                </span>
                <p className="text-gray-700 text-sm leading-relaxed pl-4 pr-2">
                  {testimonial.quote}
                </p>
                <span className="text-green-400 text-4xl font-bold absolute -bottom-6 right-2">
                  "
                </span>
              </div>

              {/* Customer Info */}
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-green-600 text-xs font-medium">
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

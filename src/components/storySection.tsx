import {
  Truck,
  Store,
  Target,
  MapPin,
  Smile,
  TrendingUp,
} from "lucide-react";


export default function StorySection() {
  const stats = [
    {
      icon: <Truck size={36} />,
      number: "1 Million+",
      title: "WA Delivery Every Month",
    },
    {
      icon: <Store size={36} />,
      number: "1000+",
      title: "Restaurant Trusted Partners",
    },
    {
        icon: <Target size={36} />,
        number: "100+ Brands",
        title: "Initiated Marketing & Brand Strategy",
    },

    {
      icon: <MapPin size={36} />,
      number: "Pan India",
      title: "Presence for Various Services",
    },
    {
      icon: <Smile size={36} />,
      number: "95%+",
      title: "Customer Satisfaction Rate",
    },
    {
      icon: <TrendingUp size={36} />,
      number: "33%",
      title: "Growth in Sales",
    },
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-br from-[#E53935] via-[#FF6A00] to-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Story of MyFojo So Far
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition duration-300"
            >
              <div className="flex justify-center mb-6 text-[#E53935]">
                {stat.icon}
              </div>

              <h3 className="text-3xl font-extrabold text-[#FF6A00] mb-2">
                {stat.number}
              </h3>

              <p className="text-gray-700 font-medium">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

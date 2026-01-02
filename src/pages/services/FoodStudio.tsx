import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import VideoHero from "@/components/VideoHero";
import { Search, User, HardDrive, LineChart } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import animationJson from "@/components/animation.json";
import Lottie from "lottie-react";


const stats = [
  { number: 7000, suffix: "+", label: "Employees" },
  { number: 400, suffix: "+", label: "Cities" },
  { number: 50, suffix: "+", label: "Nationalities" },
  { number: 20, suffix: "+", label: "Languages" },
];

const FoodStudio = () => {
     const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const services = [
  {
    title: "Brand Identity",
    image:"/images/brandidentity.jpeg",
    icon: "🏷️",
    description: "Crafting a unique brand identity to stand out in the market.",
  },
  {
    title: "Digital Marketing",
    image: "/images/marketing.jpeg",
    icon: "📱",
    description: "Boost your online presence with targeted digital campaigns.",
  },
  {
    title: "Social Media",
    image: "/images/socialmedia.jpeg",
    icon: "🌐",
    description: "Engage your audience with strategic social media management.",
  },
  {
    title: "SEO Optimization",
    image: "/images/seo.jpeg",
    icon: "🔍",
    description: "Improve search rankings with expert SEO strategies.",
  },
  {
    title: "Content Creation",
    image: "/images/content.jpeg",
    icon: "✍️",
    description: "High-quality content to attract and retain customers.",
  },
  {
    title: "Email Marketing",
    image: "/images/email.png",
    icon: "📧",
    description: "Effective email campaigns to drive customer loyalty.",
  },
];

  return (
    <Layout>
      <VideoHero
        title="Food Studio"
        subtitle="Professional marketing services to elevate your restaurant's brand"
        videoSrc="/videos/food_studio.mp4"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact">
            <Button size="lg" className="cta-button text-primary-foreground px-8 py-4 text-lg rounded-full">
              Get Marketing Audit
            </Button>
          </Link>
         {/*} <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg rounded-full bg-transparent"
          >
            View Our Portfolio
          </Button>*/}
        </div>
      </VideoHero>

    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Marketing Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From brand identity to digital marketing, we help restaurants build a strong presence that attracts customers
          </p>
        </div>

        {/* Belt / Carousel */}
        <div className="relative">
          <div className="flex animate-belt gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="min-w-[250px] bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl hover:scale-105 transform transition-all duration-300 ease-in-out"
              >
                {/* Image with floating icon */}
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-52 object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                  <div className="absolute bottom-0 right-0 bg-red-500 text-white p-3 rounded-tl-lg transition-transform duration-300 hover:scale-125">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            ))}

            {/* Duplicate services for infinite belt effect */}
            {services.map((service, index) => (
              <div
                key={`dup-${service.title}`}
                className="min-w-[250px] bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-52 object-cover"
                  />
                  <div className="absolute bottom-0 right-0 bg-red-500 text-white p-3 rounded-tl-lg">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes belt {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-belt {
          display: flex;
          gap: 2rem;
          animation: belt 20s linear infinite;
          /* Ensure smooth transition at the end by resetting position */
          will-change: transform;
        }

        /* Prevent content jump on hover */
        .hover\:scale-105 {
          transition: transform 0.3s ease-in-out;
        }

        .hover\:scale-110 {
          transition: transform 0.5s ease-in-out;
        }

        .hover\:scale-125 {
          transition: transform 0.3s ease-in-out;
        }
      `}</style>
    </section>
{/*Process section */}
  <section className="w-full bg-gradient-to-r from-[#8B0000] via-[#B22222] to-[#DC143C] text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Heading */}
<div className="space-y-6">
<h2 className="text-4xl font-bold leading-snug">
Tailoring Approach to <br /> Meet Client Needs
</h2>
<Link
to="/contact"
className="inline-block bg-white text-[#B22222] font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-gray-100 transition"
>
Contact Us
</Link>
</div>
      {/* Right Content */}
      <div className="space-y-8">
      <div className="flex items-start gap-4">
      <Search className="w-8 h-8" />
      <div>
      <h3 className="text-lg font-semibold">Client Focused Strategy</h3>
    <p className="text-sm text-gray-200">
        Our tailored strategies meet their unique goals, fostering strong, lasting
        partnerships built on trust and mutual success.
    </p>
    </div>
    </div>


<div className="flex items-start gap-4">
<User className="w-8 h-8" />
<div>
<h3 className="text-lg font-semibold">Valuable Assistance</h3>
<p className="text-sm text-gray-200">
We guide you through challenges with expertise and dedication, ensuring your
success and growth.
</p>
</div>
</div>


<div className="flex items-start gap-4">
<HardDrive className="w-8 h-8" />
<div>
<h3 className="text-lg font-semibold">Drive Success</h3>
<p className="text-sm text-gray-200">
We're dedicated to guiding ambition, steering toward success with unwavering
commitment and strategic direction.
</p>
</div>
</div>


<div className="flex items-start gap-4">
<LineChart className="w-8 h-8" />
<div>
<h3 className="text-lg font-semibold">Fostering Growth</h3>
<p className="text-sm text-gray-200">
Nurturing growth through tailored strategies and steadfast support, we
cultivate success for your journey ahead.
</p>
</div>
</div>
</div>
</div>
</section>
 <section
      ref={ref}
      className="w-full bg-pink-50 py-20 px-6 md:px-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        
        {/* Left Section */}
        <div>
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Our Amazing Services
          </h2>

          {/* Stats in 2x2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative bg-white shadow-lg rounded-2xl p-8 text-center border-4 border-white"
              >
                {/* Outline effect */}
                <div className="absolute inset-0 border border-pink-100 rounded-2xl transform translate-x-2 translate-y-2 -z-10"></div>

                <h2 className="text-4xl font-bold text-pink-600">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.number}
                      duration={2.5}
                      separator=","
                      suffix={stat.suffix}
                    />
                  ) : (
                    "0"
                  )}
                </h2>
                <p className="mt-3 text-base uppercase tracking-wide text-gray-700">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Animation */}
        <div className="flex justify-center md:justify-end relative">
          <Lottie
            animationData={animationJson}
            loop
            autoplay
            className="w-full max-w-sm md:max-w-lg"
          />
        </div>
      </div>
    </section>
{/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Restaurant's Marketing?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get a free marketing audit and see how we can help your restaurant grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg rounded-full"
                >
                  Get Free Audit
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg rounded-full bg-transparent"
                >
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FoodStudio;
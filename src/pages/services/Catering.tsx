import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import VideoHero from "@/components/VideoHero";
import MenuSection from "@/components/MenuSection";
import { Users, ChefHat, Award, Calendar,ChevronLeft, ChevronRight,Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Catering = () => {

    const navigate = useNavigate();
   const handleViewMenu = () => {
    navigate("/menu"); // assuming the MenuSection is at /menu route
  };
    const stats = [
    {
      icon: <Users className="w-10 h-10 text-yellow-500" />,
      number: "786",
      label: "Happy Customers",
    },
    {
      icon: <ChefHat className="w-10 h-10 text-yellow-500" />,
      number: "109",
      label: "Expert Chefs",
    },
    {
      icon: <Award className="w-10 h-10 text-yellow-500" />,
      number: "23",
      label: "Years Of Experience",
    },
    {
      icon: <Calendar className="w-10 h-10 text-yellow-500" />,
      number: "235",
      label: "Events Completed",
    },
  ];
  const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" 
           fill="none" 
           viewBox="0 0 24 24" 
           strokeWidth={2} 
           stroke="white" 
           className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    ),
    title: "Corporate Events",
    description: "Professional catering for business meetings, conferences, and office parties"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" 
           fill="none" 
           viewBox="0 0 24 24" 
           strokeWidth={2} 
           stroke="white" 
           className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 8h-6v8h-4v-8H4l8-8z" />
      </svg>
    ),
    title: "Wedding Catering",
    description: "Make your special day memorable with our exquisite wedding catering services"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" 
           fill="none" 
           viewBox="0 0 24 24" 
           strokeWidth={2} 
           stroke="white" 
           className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
    title: "Private Parties",
    description: "Birthday parties, anniversaries, and intimate gatherings made special"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" 
           fill="none" 
           viewBox="0 0 24 24" 
           strokeWidth={2} 
           stroke="white" 
           className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    ),
    title: "Festival Catering",
    description: "Large-scale event catering for festivals and outdoor gatherings"
  }
];
    return (
    <Layout>
      <VideoHero
        title="Premium Catering Services"
        subtitle="Creating memorable dining experiences for every occasion"
        imageSrc="/images/catering1.png"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact">
            <Button size="lg" className="cta-button text-primary-foreground px-8 py-4 text-lg rounded-full">
              Get Quote
            </Button>
          </Link>
         <Button 
      size="lg" 
      variant="outline" 
      className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg rounded-full bg-transparent"
      onClick={handleViewMenu}
    >
      View Menu
    </Button>

        </div>
      </VideoHero>

    
      {/* Services Section */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="gradient-text">Our Catering Services</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        From intimate gatherings to grand celebrations, we cater to all types of events with excellence
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {services.map((service, index) => (
        <div
          key={service.title}
          className="flex flex-col items-center text-center"
        >
          {/* Icon Circle */}
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-orange-500 mb-6 shadow-md">
            {service.icon}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>

          {/* Description */}
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
{/*About Section*/}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">The Restaurant</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                there live the blind texts. Separated they live in Bookmarksgrove right at the coast of 
                the Semantics, a large language ocean.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <img src="/images/food3.jpeg" alt="Restaurant interior" className="rounded-lg shadow-lg" />
                <img src="/images/food2.jpeg" alt="Delicious dish" className="rounded-lg shadow-lg" />
              </div>
            </div>
            <div>
              <img src="/images/food1.jpeg" alt="Featured dish" className="rounded-lg shadow-2xl w-full" />
            </div>
          </div>
        </div>
      </section>

      <MenuSection/>


      

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">How It Works</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple steps to book our catering services for your event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto animate-glow-pulse">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Contact Us</h3>
              <p className="text-muted-foreground text-sm">Share your event details and requirements</p>
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto animate-glow-pulse">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Menu Planning</h3>
              <p className="text-muted-foreground text-sm">We help you select the perfect menu</p>
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto animate-glow-pulse">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Confirmation</h3>
              <p className="text-muted-foreground text-sm">Finalize details and confirm booking</p>
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto animate-glow-pulse">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Event Day</h3>
              <p className="text-muted-foreground text-sm">We handle everything on your special day</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust and orders */}
      <section className="py-16 bg-[#18181b]">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg px-10 py-8 flex flex-col items-center justify-center text-center w-[220px] h-[180px] mx-auto"
          >
            <div className="mb-4">{stat.icon}</div>
            <h3 className="text-3xl font-bold text-yellow-700">{stat.number}</h3>
            <p className="mt-2 text-gray-700 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
{/* Testimonials */}
    

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Make Your Event Unforgettable
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let us handle the catering while you enjoy your special occasion with your guests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg rounded-full"
                >
                  Get Quote Now
                </Button>
              </Link>
              <Link to="/contact">
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Catering;


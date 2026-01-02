import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import VideoHero from "@/components/VideoHero";
import { useState, useEffect } from "react";
import Trusted from "@/components/trusted";
import Testominials from "@/components/testimonials";
import Serviceslider from "@/components/serviceslider";
import { Package, BarChart, TrendingUp } from "lucide-react";
import {
  ChevronLeft,
  ChevronRight,
  Zap,
  Shield,
  Users,
  Smartphone,
  Heart,
  Star,
  Trophy,
} from "lucide-react";

type Feature = {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  image: string;
  link?: string;
  cta?: string;
};

const whymyfojo = [
{
      id: 1,
      icon: <Package className="w-12 h-12 text-green-600" />,
      title: "Inventory Management",
      description: (
        <>
          Track stock in real-time with MyFojo’s inventory management system,{" "}
          <span className="text-green-500 font-medium">preventing shortages</span>, 
          reducing waste, and optimizing purchases.
        </>
      ),
    },
    {
      id: 2,
      icon: <BarChart className="w-12 h-12 text-green-600" />,
      title: "Business Analytics & Reports",
      description: (
        <>
          Use actionable insights from POS reports and data analytics to monitor
          sales trends,{" "}
          <span className="text-green-500 font-medium">improve profitability</span>, 
          and drive growth.
        </>
      ),
    },
    {
      id: 3,
      icon: <TrendingUp className="w-12 h-12 text-green-600" />,
      title: "Sales Growth",
      description: (
        <>
          Boost your revenue with data-driven strategies and{" "}
          <span className="text-green-500 font-medium">optimized performance</span>.
        </>
      ),
    },
    {
      id: 4,
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: "Customer Engagement",
      description: (
        <>
          Build loyal customers with{" "}
          <span className="text-green-500 font-medium">personalized experiences</span> 
          and promotions.
        </>
      ),
    },
    {
      id: 5,
      icon: <BarChart className="w-12 h-12 text-green-600" />,
      title: "Business Analytics & Reports",
      description: (
        <>
          Use actionable insights from POS reports and data analytics to monitor
          sales trends,{" "}
          <span className="text-green-500 font-medium">improve profitability</span>, 
          and drive growth.
        </>
      ),
    },
  ];



const Index = () => {
  
  return (
    <Layout>
      {/* Hero Section */}
      <VideoHero
        title="MyFojo"
        subtitle="Complete Restaurant Solutions for the Modern World"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact">
            <Button size="lg" className="cta-button text-primary-foreground px-8 py-4 text-lg rounded-full">
              Book a Demo
            </Button>
          </Link>
          <Link to="/services/wa-delivery">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg rounded-full bg-transparent"
            >
              Explore Services
            </Button>
          </Link>
        </div>
      </VideoHero>

      {/* Trusted Section */}
      <Trusted />

     <Serviceslider />

     

      {/* POS Belt Section */}
      <section className="flex h-screen">
        {/* Left: Fixed Text */}
<div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Side */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose MyFojo?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Simplify your restaurant operations, reduce costs, and grow your 
            business with our smart POS solutions. MyFojo empowers you with 
            tools designed to make decision-making faster and more effective.
          </p>
        </div>

        {/* Right Side Scrollable (Vertical) */}
        <div className="max-h-[550px] overflow-y-auto scrollbar-hide pr-2">
          <div className="grid grid-cols-2 gap-6">
            {whymyfojo.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-2xl p-8 text-center w-[320px] h-[250px] flex flex-col justify-between"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hide Scrollbar Utility */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
      </section>

       {/* Testimonials */}
      <Testominials />
    </Layout>
  );
};

export default Index;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import VideoHero from "@/components/VideoHero";
import { useState, useEffect } from "react";
import Trusted from "@/components/trusted";
import Testominials from "@/components/testimonials";
import Serviceslider from "@/components/serviceslider";
import { Package, BarChart, TrendingUp } from "lucide-react";
import StorySection from "@/components/storySection";



import {
  Users,
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
      icon: <Package className="w-12 h-12 text-red-600" />,
      title: "Instant Digital Menu Creation and Sharing",
      description: (
        <>
          Easily create and update a digital menu for your restaurant, 
          and share it directly with customers via WhatsApp or QR code for direct ordering
        </>
      ),
    },
    {
      id: 2,
      icon: <BarChart className="w-12 h-12 text-red-600" />,
      title: "Direct WhatsApp Order Management",
      description: (
        <>
        	Receive orders instantly on WhatsApp with automated responses, allowing real-time order with customers to confirm, customize, and finalize orders
        </>
      ),
    },
    {
      id: 3,
      icon: <TrendingUp className="w-12 h-12 text-red-600" />,
      title: "Multiple Payment Options Integration",
      description: (
        <>
        	Accept payments through over 20 methods, ensuring a convenient and secure transaction experience for every customer.
        </>
      ),
    },
    {
      id: 4,
      icon: <Users className="w-12 h-12 text-red-600" />,
      title: "No Third-Party Commissions",
      description: (
        <>
        Eliminate high delivery platform fees-orders and payments come directly to you, maximising your profits and building direct customer relationships.
        </>
      ),
    },
    {
      id: 5,
      icon: <BarChart className="w-12 h-12 text-red-600" />,
      title: "Comprehensive Order Tracking and Reporting",
      description: (
        <>
         Access detailed reports on orders and earnings, track business growth, and manage customer engagement- all from your WhatsApp dashboard.


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
  imageSrc="/images/myfojo1bg.png"
>
  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact">
            <Button size="lg" className="cta-button text-primary-foreground px-8 py-4 text-lg rounded-full">
              Book a Demo
            </Button>
          </Link>
          <Link to="/services/wa-delivery">
            
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
            business with our smart WhatsApp Delivery solutions. MyFojo empowers you with 
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
      <StorySection />


       {/* Testimonials */}
      <Testominials />
    </Layout>
  );
};

export default Index;

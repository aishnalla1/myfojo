import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import VideoHero from "@/components/VideoHero";
import { CheckCircle,XCircle } from "lucide-react";
import { motion } from "framer-motion";
const reviews = [
  {
    text: "Great interface. Been searching for something like this.",
    name: "Sujatha",
    place: "Handi Se",
  },
  {
    text: "No more 35% fee on Zomato & Swiggy. Super cheap, they saved us tons of money.",
    name: "Vishal",
    place: "Paradise Inn",
  },
  {
    text: "The response from customers is fabulous. Highly recommended.",
    name: "Bhimi",
    place: "Chatkari",
  },
  {
    text: "We are using the platform for 2 months now. Saves us lakhs in commissions.",
    name: "Pawan",
    place: "Chappan Bhog",
  },
  {
    text: "Incredible app for food business management!",
    name: "Ansh",
    place: "Le angel",
  },
  {
    text: "All-in-one solution for my food venture!",
    name: "Saurabh",
    place: "Nutkhut",
  },
];


const WADelivery = () => {
  const features = [
    {
      icon: "📱",
      title: "Direct WhatsApp Integration",
      description: "Customers order directly through WhatsApp - no app downloads required"
    },
    {
      icon: "💰",
      title: "Zero Commission",
      description: "No middlemen means 100% of the profit goes directly to your restaurant"
    },
    {
      icon: "⚡",
      title: "Instant Notifications",
      description: "Real-time order updates and delivery tracking via WhatsApp"
    },
    {
      icon: "🎯",
      title: "Direct Customer Connection",
      description: "Build stronger relationships with your customers through direct communication"
    }
  ];

  return (
    <Layout>
      <VideoHero
        title="Direct from Supplier to You. No More Middlemen."
        subtitle="Order fresh, local products directly from our trusted partners via WhatsApp."
        videoSrc="/videos/wa_delivery.mp4"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact">
            <Button size="lg" className="cta-button text-primary-foreground px-8 py-4 text-lg rounded-full">
              Book Demo
            </Button>
          </Link>
          <a href="#howitworks">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg rounded-full bg-transparent"
          >
            Watch How It Works
          </Button>
          </a>
        </div>
      </VideoHero>
       <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Card - Other Services */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Traditional Food Delivery Services
            </h2>
            <p className="text-gray-600 mb-6">
              A quick look at what other generic WhatsApp services offer for businesses.
            </p>
            <ul className="space-y-3 text-gray-600">
              {[
                "Platform Dependency: Use the service's app/website.",
                "High Commissions: Pay a percentage on every order.",
                "No Customer Data: The platform owns all customer information.",
                "Limited Communication: Can't talk directly to customers.",
                "Platform Controls: Menu and promotions are often managed by the service.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <XCircle className="text-orange-500 w-5 h-5 mt-1 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Card - MYFOJO Services */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-orange-300 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-orange-600 mb-4">
              MYFOJO WhatsApp POS
            </h2>
            <p className="text-gray-700 mb-6">
              Discover how MYFOJO transforms WhatsApp Delivery.
            </p>
            <ul className="space-y-3 text-gray-700">
              {[
                "Instant Digital Menu: Create and share your menu on WhatsApp.",

"Direct Order Management: Handle all orders right in the chat.",

"Integrated Payments: Offer multiple secure payment options.",

"No Third-Party Commissions: Keep all your earnings.",

"Order Tracking: Monitor orders from start to finish.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="text-orange-500 w-5 h-5 mt-1 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6">
  <Link
    to="/contact">
    <Button className="bg-orange-500 text-white hover:bg-orange-600 px-6 py-3 rounded-full">
    Get Started with MYFOJO
    </Button>
  </Link>
</div>
          </div>

        </div>
      </div>
    </section>

      {/* How It Works Section */}
      <section  id = "howitworks" className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple, efficient, and profitable - our WhatsApp delivery system is designed for success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-2xl font-black group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                Customer Orders
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Customers browse your menu and place orders directly through WhatsApp - no app downloads required.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-secondary to-primary flex items-center justify-center text-white text-2xl font-black group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                Automated Processing
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our system automatically processes orders, manages inventory, and sends confirmations to customers.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-2xl font-black group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                Direct Delivery
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Fulfill orders directly to customers, keeping 100% of profits while building lasting relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Video in Middle */}
<section className="py-20 bg-gradient-subtle">
  <div className="container mx-auto px-4">
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="gradient-text">Why Choose WhatsApp Delivery?</span>
      </h2>
    </div>

    {/* Content Layout */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      {/* Left Features */}
      <div className="flex flex-col gap-8">
        {features.slice(0, Math.ceil(features.length / 2)).map((feature, index) => (
          <div
            key={feature.title}
            className="service-card p-6 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div
              className="text-4xl mb-4 animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 gradient-text">
              {feature.title}
            </h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Middle Video */}
      <div className="flex justify-center">
        <video
          className="rounded-lg shadow-lg w-full max-w-md"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/whatsappvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Right Features */}
      <div className="flex flex-col gap-8">
        {features.slice(Math.ceil(features.length / 2)).map((feature, index) => (
          <div
            key={feature.title}
            className="service-card p-6 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div
              className="text-4xl mb-4 animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 gradient-text">
              {feature.title}
            </h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        Here is what people are saying!
      </h2>
      <div className="grid md:grid-cols-3 gap-8 px-6 md:px-20">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-orange-100"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <p className="text-gray-700 italic mb-4">“{review.text}”</p>
            <p className="font-semibold text-orange-600">
              – {review.name},{" "}
              <span className="text-gray-500 font-normal">{review.place}</span>
            </p>
          </motion.div>
        ))}
      </div>
    </section>

      

      {/* Demo CTA Section */}
<section className="py-16 bg-gradient-hero text-white !mb-0">
  <div className="container mx-auto px-4 text-center">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Ready to Start WhatsApp Delivery?
      </h2>
      <p className="text-xl mb-8 text-white/90">
        See how easy it is to implement WhatsApp delivery for your restaurant. Book a demo today!
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/contact" className="!mb-0">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg rounded-full"
          >
            Book Demo Now
          </Button>
        </Link>
        <Link to="/contact" className="!mb-0">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg rounded-full bg-transparent"
          >
            Schedule Meeting
          </Button>
        </Link>
      </div>
    </div>
  </div>
</section>

    </Layout>
  );
};

export default WADelivery;
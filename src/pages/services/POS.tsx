import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import VideoHero from "@/components/VideoHero";

const POS = () => {
  const features = [
    {
      icon: "💳",
      title: "Payment Processing",
      description: "Accept all payment methods including cards, UPI, wallets, and cash"
    },
    {
      icon: "📊",
      title: "Sales Analytics",
      description: "Real-time insights into sales performance, trends, and customer behavior"
    },
    {
      icon: "📦",
      title: "Inventory Management",
      description: "Track stock levels, set alerts, and manage suppliers efficiently"
    },
    {
      icon: "👥",
      title: "Staff Management",
      description: "Manage employee access, track performance, and handle scheduling"
    },
    {
      icon: "🧾",
      title: "Digital Receipts",
      description: "Generate digital receipts with your branding and customer details"
    },
    {
      icon: "📱",
      title: "Mobile POS",
      description: "Take orders and process payments from anywhere in your restaurant"
    }
  ];

  const plans = [
    {
      name: "Basic POS",
      price: "₹2,999",
      period: "/month",
      description: "Perfect for small cafes and food stalls",
      features: [
        "1 POS terminal",
        "Basic payment processing",
        "Simple inventory tracking",
        "Digital receipts",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional POS",
      price: "₹5,999",
      period: "/month",
      description: "Ideal for restaurants and food chains",
      features: [
        "Up to 5 POS terminals",
        "Advanced analytics & reporting",
        "Full inventory management",
        "Staff management tools",
        "Customer loyalty program",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise POS",
      price: "₹12,999",
      period: "/month",
      description: "Complete solution for large restaurant chains",
      features: [
        "Unlimited POS terminals",
        "Multi-location management",
        "Custom integrations",
        "Advanced security features",
        "24/7 phone support",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Process orders 3x faster with our intuitive interface",
      stat: "300%",
      emoji: "⚡"
    },
    {
      title: "Better Accuracy",
      description: "Reduce order errors by 95% with digital order management",
      stat: "95%",
      emoji: "🎯"
    },
    {
      title: "Cost Savings",
      description: "Save up to 40% on operational costs with smart automation",
      stat: "40%",
      emoji: "💰"
    },
    {
      title: "Customer Satisfaction",
      description: "Improve customer experience with faster service",
      stat: "4.8/5",
      emoji: "😊"
    }
  ];

  const integrations = [
    { name: "WhatsApp Delivery", icon: "📱", description: "Seamless integration with our WhatsApp ordering system" },
    { name: "MyFojo App", icon: "📲", description: "Sync orders from our food ordering app" },
    { name: "Accounting Software", icon: "📊", description: "Connect with popular accounting platforms" },
    { name: "Payment Gateways", icon: "💳", description: "Support for all major payment processors" },
    { name: "Delivery Partners", icon: "🛵", description: "Integration with delivery services" },
    { name: "Loyalty Programs", icon: "🎁", description: "Built-in customer loyalty management" }
  ];
    const features1 = [
    {
      title: "Quick Order Entry",
      description:
        "Accelerate service with fast and intuitive order entry for dine-in, takeaway, and delivery.",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "No Addition Fee for Extra Captains",
      description:
        "Streamline table assignments and manage multi-course meals with our unlimited free captains for a seamless dining experience.",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "All App Integrations",
      description:
        "Accept online delivery on the fly with all delivery partners like MyFojo, Zomato and Swiggy on one powerful platform.",
      image:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  return (
    <Layout>
      <VideoHero
        title="MyFojo POS System"
        subtitle="Complete point-of-sale solution designed for restaurants"
        videoSrc="/videos/POS.mp4"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact">
            <Button size="lg" className="cta-button text-primary-foreground px-8 py-4 text-lg rounded-full">
              Start Free Trial
            </Button>
          </Link>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg rounded-full bg-transparent"
          >
            Schedule Demo
          </Button>
        </div>
      </VideoHero>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
              <span className="gradient-text">Powerful POS Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to run your restaurant efficiently in one comprehensive system
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="service-card p-6 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 gradient-text">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Proven Results</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              See the impact our POS system has on restaurant operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="service-card p-6 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                  {benefit.emoji}
                </div>
                <h3 className="text-3xl font-bold gradient-text mb-2">{benefit.stat}</h3>
                <h4 className="text-lg font-bold mb-2">{benefit.title}</h4>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Integrations Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Seamless Integrations</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Connect with all your favorite tools and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <div 
                key={integration.name}
                className="service-card p-6 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                  {integration.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{integration.name}</h3>
                <p className="text-muted-foreground text-sm">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Easy Setup Process</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Get your POS system up and running in no time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto animate-glow-pulse">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Sign Up</h3>
              <p className="text-muted-foreground text-sm">Create your account and choose your plan</p>
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto animate-glow-pulse">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Hardware Setup</h3>
              <p className="text-muted-foreground text-sm">We provide and install all necessary hardware</p>
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto animate-glow-pulse">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Configuration</h3>
              <p className="text-muted-foreground text-sm">Customize menu, pricing, and system settings</p>
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto animate-glow-pulse">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Go Live</h3>
              <p className="text-muted-foreground text-sm">Start processing orders with full support</p>
            </div>
          </div>
        </div>
      </section>


          <section className="w-full py-24 bg-gradient-to-b from-white to-[#FFF4EC]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#E53935]">
            Powerful POS for Modern Restaurants
          </h2>
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
            Run your restaurant operations with a robust POS system designed
            for quick services — 3-step billing, full-service dining with
            unlimited captains, and all app integrations in one place.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-28">
          {features1.map((feature, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 !== 0 ? "md:order-2" : ""}`}>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="rounded-3xl shadow-2xl w-full object-cover h-[400px]"
                />
              </div>

              {/* Content */}
              <div className={`${index % 2 !== 0 ? "md:order-1" : ""}`}>
                <h3 className="text-3xl font-bold text-[#FF6A00] mb-6">
                  {feature.title}
                </h3>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {feature.description}
                </p>

                <div className="w-16 h-1 bg-[#E53935] rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

    
               
    
   

      {/* CTA Section */}
<section className="py-12 bg-gradient-hero text-white">
  <div className="container mx-auto px-4 text-center">
    <div className="max-w-3xl mx-auto">
      {/* Heading + Description */}
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Ready to Modernize Your Restaurant?
      </h2>
      <p className="text-xl mb-8 text-white/90">
        Join thousands of restaurants already using MyFojo POS to streamline their operations.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
        <Link to="/contact">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg rounded-full"
          >
            Start Free Trial
          </Button>
        </Link>
        <Link to="/contact">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg rounded-full bg-transparent"
          >
            Schedule Demo
          </Button>
        </Link>
      </div>
    </div>
  </div>

  {/* Full-width Image that touches bottom */}
 <div className="mt-10 -mb-20 flex justify-center">
  <img 
    src="/images/POS.png" 
    alt="MyFojo POS Demo" 
    className="w-3/4 md:w-2/3 lg:w-1/2 h-auto object-contain"
  />
</div>
</section>


    
    </Layout>
  );
};

export default POS;
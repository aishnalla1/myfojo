import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import VideoHero from "@/components/VideoHero";

const Packaging = () => {
  const products = [
    {
      category: "Food Containers",
      emoji: "📦",
      items: [
        { name: "Biodegradable Containers", price: "₹8-15/piece", description: "Eco-friendly food containers in various sizes" },
        { name: "Plastic Containers", price: "₹5-12/piece", description: "Durable plastic containers with secure lids" },
        { name: "Paper Boxes", price: "₹6-18/piece", description: "Grease-resistant paper boxes for takeaway" },
        { name: "Aluminum Containers", price: "₹10-20/piece", description: "Heat-resistant aluminum containers" }
      ]
    },
    {
      category: "Cups & Glasses",
      emoji: "🥤",
      items: [
        { name: "Paper Cups", price: "₹2-5/piece", description: "Hot and cold beverage cups with lids" },
        { name: "Plastic Cups", price: "₹3-8/piece", description: "Clear plastic cups for cold beverages" },
        { name: "Coffee Cups", price: "₹4-10/piece", description: "Insulated coffee cups with sleeves" },
        { name: "Smoothie Cups", price: "₹5-12/piece", description: "Large cups perfect for smoothies and shakes" }
      ]
    },
    {
      category: "Plates & Bowls",
      emoji: "🍽️",
      items: [
        { name: "Paper Plates", price: "₹3-8/piece", description: "Disposable plates in various sizes" },
        { name: "Foam Plates", price: "₹2-6/piece", description: "Lightweight foam plates for events" },
        { name: "Biodegradable Bowls", price: "₹5-12/piece", description: "Eco-friendly bowls for soups and curries" },
        { name: "Plastic Bowls", price: "₹4-10/piece", description: "Reusable plastic bowls" }
      ]
    },
    {
      category: "Tissues & Napkins",
      emoji: "🧻",
      items: [
        { name: "Table Napkins", price: "₹150-300/pack", description: "Soft table napkins in bulk packs" },
        { name: "Kitchen Tissues", price: "₹80-150/roll", description: "Absorbent kitchen tissue rolls" },
        { name: "Wet Wipes", price: "₹25-50/pack", description: "Sanitizing wet wipes for customers" },
        { name: "Dispenser Napkins", price: "₹200-400/pack", description: "Napkins designed for dispensers" }
      ]
    },
    {
      category: "Wrapping Materials",
      emoji: "📄",
      items: [
        { name: "Food Wrap Film", price: "₹120-250/roll", description: "Cling film for food wrapping" },
        { name: "Aluminum Foil", price: "₹100-200/roll", description: "Heavy-duty aluminum foil" },
        { name: "Parchment Paper", price: "₹80-160/roll", description: "Non-stick parchment paper" },
        { name: "Butter Paper", price: "₹60-120/pack", description: "Grease-proof butter paper sheets" }
      ]
    },
    {
      category: "Cutlery",
      emoji: "🍴",
      items: [
        { name: "Plastic Cutlery Set", price: "₹2-5/set", description: "Fork, knife, and spoon sets" },
        { name: "Wooden Cutlery", price: "₹3-8/set", description: "Eco-friendly wooden cutlery" },
        { name: "Disposable Spoons", price: "₹1-3/piece", description: "Individual disposable spoons" },
        { name: "Ice Cream Spoons", price: "₹1-2/piece", description: "Small wooden spoons for desserts" }
      ]
    }
  ];

  const features = [
  { emoji: "🌱", title: "Eco-Friendly Options", text: "Biodegradable and environmentally sustainable packaging solutions" },
  { emoji: "💰", title: "Bulk Pricing", text: "Competitive wholesale prices for large quantity orders" },
  { emoji: "🎨", title: "Custom Branding", text: "Personalized packaging with your restaurant's logo and branding" },
  { emoji: "🚚", title: "Fast Delivery", text: "Quick delivery across India with reliable logistics partners" },
  { emoji: "🏆", title: "Quality Assured", text: "Food-grade certified materials meeting safety standards" },
  { emoji: "📞", title: "24/7 Support", text: "Dedicated customer support for all your packaging needs" }
];

  const packages = [
    {
      name: "Starter Package",
      price: "₹2,999",
      description: "Perfect for small cafes and food stalls",
      items: [
        "100 Food containers",
        "200 Paper cups",
        "150 Plates",
        "5 Tissue rolls",
        "Basic cutlery set"
      ],
      suitable: "20-50 orders/day"
    },
    {
      name: "Business Package",
      price: "₹7,999",
      description: "Ideal for medium restaurants",
      items: [
        "300 Food containers",
        "500 Cups & glasses",
        "400 Plates & bowls",
        "15 Tissue rolls",
        "Wrapping materials",
        "Complete cutlery sets"
      ],
      suitable: "100-200 orders/day",
      popular: true
    },
    {
      name: "Enterprise Package",
      price: "₹15,999",
      description: "For large restaurants and chains",
      items: [
        "1000+ Food containers",
        "1500+ Cups & glasses",
        "1200+ Plates & bowls",
        "50+ Tissue rolls",
        "Bulk wrapping materials",
        "Custom branded packaging",
        "Monthly delivery schedule"
      ],
      suitable: "500+ orders/day"
    }
  ];

  const customization = [
    { type: "Logo Printing", description: "Your restaurant logo on containers and cups", cost: "+15%" },
    { type: "Color Customization", description: "Custom colors matching your brand", cost: "+10%" },
    { type: "Special Designs", description: "Unique designs for special occasions", cost: "+20%" },
    { type: "QR Code Integration", description: "QR codes for digital menus or feedback", cost: "+5%" }
  ];
  const radius = 320;

  return (
    <Layout>
      <VideoHero
        title="Restaurant Packaging Solutions"
        subtitle="Complete range of eco-friendly packaging supplies for your restaurant"
        videoSrc="/videos/packaging.mp4"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact">
            <Button size="lg" className="cta-button text-primary-foreground px-8 py-4 text-lg rounded-full">
              Get Bulk Quote
            </Button>
          </Link>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg rounded-full bg-transparent"
          >
            View Catalog
          </Button>
        </div>
      </VideoHero>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white flex justify-center">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
              <span className="gradient-text">Why Choose Our Packaging?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              High-quality, affordable packaging solutions designed specifically for food businesses
            </p>
          </div>
         <div className="relative w-[1000px] h-[1000px] justify-center items-center mx-auto">
        
        {/* Connecting lines */}
        {features.map((_, i) => {
          const angle = (i / features.length) * 2 * Math.PI;
          const x = 500 + radius * Math.cos(angle);
          const y = 500 + radius * Math.sin(angle);
          return (
            <svg key={i} className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <line
                x1="500"
                y1="500"
                x2={x}
                y2={y}
                stroke="#f97316"
                strokeWidth="2"
                strokeDasharray="6,6"
              />
            </svg>
          );
        })}

        {/* Center circle */}
        <div className="absolute top-1/2 left-1/2 w-56 h-56 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-2xl text-center shadow-lg transform -translate-x-1/2 -translate-y-1/2">
          MYFOJO <br /> Packaging
        </div>

        {/* Feature boxes */}
        {features.map((f, i) => {
          const angle = (i / features.length) * 2 * Math.PI;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <div
              key={i}
              className="absolute w-52 h-52 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center text-center p-6"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
              }}
            >
              <div className="text-7xl mb-3">{f.emoji}</div>
              <h3 className="font-bold text-lg">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.text}</p>
            </div>
          );
        })}
      </div>
      </div>
    </section>

      {/* Product Categories Section */}
    <section className="pb-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Product Range</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need for food packaging and presentation
          </p>
        </div>

        {/* You may want to render your products here instead of features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div key={product.category} className="service-card p-8 text-center animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="text-5xl mb-3">{product.emoji}</div>
              <h3 className="font-bold text-xl mb-2">{product.category}</h3>
              <ul className="text-left mb-4 space-y-2">
                {product.items.map((item, i) => (
                  <li key={i} className="flex flex-col">
                    <span className="font-semibold">{item.name} <span className="text-primary">{item.price}</span></span>
                    <span className="text-muted-foreground text-sm">{item.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Upgrade Your Packaging?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get competitive bulk pricing and eco-friendly packaging solutions for your restaurant today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg rounded-full"
                >
                  Get Bulk Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg rounded-full bg-transparent"
                >
                  Request Samples
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Packaging;
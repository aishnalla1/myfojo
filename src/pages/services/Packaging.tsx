import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import VideoHero from "@/components/VideoHero";import { useState } from "react";

const PackagingSlider = () => {
  const [selected, setSelected] = useState<any>(null);
  const features = [
    { emoji: "🌱", title: "Eco-Friendly Options", text: "Sustainable packaging solutions" },
    { emoji: "💰", title: "Bulk Pricing", text: "Best rates for large orders" },
    { emoji: "🎨", title: "Custom Branding", text: "Your brand, your identity" },
    { emoji: "🚚", title: "Fast Delivery", text: "Quick delivery across India" },
    { emoji: "🏆", title: "Quality Assured", text: "Food-grade certified materials" },
    { emoji: "📞", title: "24/7 Support", text: "Always here to help you" }
  ];
  const clients = [
  "clovia",
  "kalighata",
  "roongta",
  "pindballuchi",
  "mod",
  "cinepolis",
  "pvr",
  "thenewshop",
  "houseofcandy",
  "madoverrolls",
  "walkinwoods",
  "vandanam",
  "bakington",
  "prodo",
  "om"
  
];

  const slides = [
    {
      title: "Pouches",
      items: [
        {
          name: "Stand-Up Pouches",
          desc: "Custom printed, resealable, ideal for branding",
          details: "Best suited for displaying brand. High-quality printing & customization."
        },
        {
          name: "Transparent Pouches",
          desc: "See-through packaging",
          details: "One side transparent, resealable, keeps food fresh longer."
        },
        {
          name: "Kraft Pouches",
          desc: "Eco-friendly storage",
          details: "Used for dry fruits, tea, coffee, spices."
        },
        {
          name: "Snack Pouches",
          desc: "Food packaging",
          details: "Perfect for snacks & takeaway."
        },
        {
          name: "3-Side Seal Pouches",
          desc: "Heat sealable",
          details: "Barrier against light, air, dust. Used for liquids & powders."
        }
      ]
    },
    {
      title: "Wrapping",
      items: [
        {
          name: "Butter Paper",
          desc: "Wrapping burgers & sandwiches",
          details: "Available in sheet & roll. GSM 30–80. Oil & water resistant."
        },
        {
          name: "Printed Butter Paper",
          desc: "Custom branding wrap",
          details: "Used for food & garment packaging."
        },
        {
          name: "2-in-1 Food Wrap",
          desc: "Foil + butter paper",
          details: "Prevents soggy food, locks heat, ideal for takeaway."
        },
        {
          name: "Aluminum Foil",
          desc: "Heat retention",
          details: "Keeps food warm."
        },
        {
          name: "Food Wrap Film",
          desc: "Cling film",
          details: "Used for food preservation."
        }
      ]
    },
    {
      title: "Containers",
      items: [
        {
          name: "Paper Containers",
          desc: "Food-grade containers",
          details: "Sizes from 40ml onwards. Used for takeaway."
        },
        {
          name: "PVC Cylinders",
          desc: "Transparent packaging",
          details: "150ml–4500ml capacity. 100% recyclable."
        },
        {
          name: "Seal-Peel Films",
          desc: "Hot food packaging",
          details: "Used for gravies & MAP packaging."
        },
        {
          name: "Paper Seal Films",
          desc: "Eco variant",
          details: "80 GSM paper + ply."
        },
        {
          name: "Thermoformed Containers",
          desc: "Plastic containers",
          details: "Printed & unprinted options."
        }
      ]
    },
    {
      title: "Carry & Bags",
      items: [
        {
          name: "Carry Bags",
          desc: "Paper bags",
          details: "High holding capacity, customizable branding."
        },
        {
          name: "Grocery Bags",
          desc: "Daily use bags",
          details: "Strong and durable."
        },
        {
          name: "Roti Envelope",
          desc: "Food wraps",
          details: "Used for rolls & takeaway."
        },
        {
          name: "Paper Boat Tray",
          desc: "Serving tray",
          details: "Ideal for snacks & fries."
        },
        {
          name: "Corrugated Boxes",
          desc: "Packaging boxes",
          details: "Used for deliveries."
        }
      ]
    },
    {
      title: "Accessories",
      items: [
        {
          name: "Paper Cups",
          desc: "Hot & cold drinks",
          details: "Available in various sizes."
        },
        {
          name: "Paper Straws",
          desc: "Eco-friendly straws",
          details: "Multiple designs available."
        },
        {
          name: "Wooden Cutlery",
          desc: "Spoon & fork",
          details: "Eco-friendly and disposable."
        },
        {
          name: "Tissue Paper",
          desc: "Soft & absorbent",
          details: "Single & double ply options."
        },
        {
          name: "Customized Tapes",
          desc: "Branding tapes",
          details: "Custom logo printing available."
        }
      ]
    }
  ];
  const ClientCard = ({ name, delay }: { name: string; delay: number }) => {
  return (
    <div
      className="group bg-white rounded-xl shadow-md p-6 flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
      style={{ animationDelay: `${delay}s` }}
    >
      <img
        src={`/images/${name}.png`}
        alt={name}
        className="h-12 object-contain transition duration-300 group-hover:scale-110"
      />
    </div>
  );
};
  return (
    <Layout>

      {/* HERO (UNCHANGED) */}
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

      {/* 🔥 PREMIUM FEATURES */}
      <section className="py-24 bg-gradient-to-b from-orange-50 via-white to-white">
        <div className="container mx-auto px-6">

          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Why Choose Our Packaging?
              </span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Built for modern restaurants that care about quality & branding
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {features.map((f, i) => (
              <div key={i} className="group p-[1px] rounded-2xl bg-gradient-to-br from-orange-400 to-red-500">
                <div className="bg-white rounded-2xl p-8 text-center transition group-hover:shadow-2xl group-hover:-translate-y-2">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition">
                    {f.emoji}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500">{f.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🔥 PREMIUM CATALOGUE */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Packaging Catalogue
          </span>
        </h2>

        {/* SLIDER */}
        <div className="flex gap-8 overflow-x-auto pb-6">

          {slides.map((slide, i) => (
            <div key={i} className="min-w-[350px]">
              
              <h3 className="text-xl font-bold mb-4 text-orange-600">
                {slide.title}
              </h3>

              <div className="space-y-4">
                {slide.items.map((item, j) => (
                  <div
                    key={j}
                    className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition"
                  >
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-500 mb-3">
                      {item.desc}
                    </p>

                    <button
                      onClick={() => setSelected(item)}
                      className="text-sm text-white bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 rounded-lg"
                    >
                      View Details
                    </button>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* MODAL */}
        {selected && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-2xl max-w-lg w-full relative">

              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-500"
              >
                ✕
              </button>

              <h3 className="text-2xl font-bold mb-4">
                {selected.name}
              </h3>

              <p className="text-gray-600 mb-4">
                {selected.details}
              </p>

              <a
                href={`https://wa.me/919990964509?text=I want details about ${selected.name}`}
                target="_blank"
              >
                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg">
                  Enquire on WhatsApp
                </button>
              </a>

            </div>
          </div>
        )}

      </div>
    </section>
    {/* OUR CLIENTS*/}
     <section className="py-28 bg-gradient-to-b from-orange-50 to-white">
  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* TITLE */}
    <h2 className="text-5xl font-bold mb-6">
      <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
        Our Clients
      </span>
    </h2>

    <p className="text-gray-500 mb-16">
      Trusted by leading brands across India
    </p>

    {/* GRID */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">

      {clients.map((name, i) => (
        <div
          key={i}
          className="group bg-white rounded-2xl shadow-md p-6 flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105"
        >
          <img
            src={`/images/${name}.png`}
            alt={name}
            className="h-14 object-contain transition duration-300 group-hover:scale-110"
          />
        </div>
      ))}

    </div>

  </div>
</section>
      {/* CTA (UNCHANGED) */}
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
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg rounded-full">
                  Get Bulk Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg rounded-full bg-transparent">
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

export default PackagingSlider;
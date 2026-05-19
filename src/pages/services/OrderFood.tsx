import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import VideoHero from "@/components/VideoHero";

const OrderFood = () => {
  return (
    <Layout>
      <VideoHero
        title="Craving Food? Order Easily with Our App!"
        subtitle="Best restaurants, delivered right to your doorstep. Experience seamless ordering with our user-friendly app."
        videoSrc="/videos/order_food.mp4"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#cta-section">
            <Button size="lg" className="cta-button text-primary-foreground px-8 py-4 text-lg rounded-full">
              Download App
            </Button>
          </a>
          {/* Explore More Button */}
<div className="flex justify-center mt-12">
 {/* <button
    onClick={() => {
      document
        .getElementById("cta-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }}
    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:scale-105 transition duration-300 shadow-md"
  >
    Explore More
  </button>*/}
</div>
          
        </div>
      </VideoHero>

    

     {/* ================= EXPLORE DISHES - BRAND STYLE ================= */}
<section className="w-full py-16 px-6 md:px-12 bg-gray-50">
  <div className="max-w-6xl mx-auto text-center">
    
    <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-12">
      Explore Popular Dishes
    </h2>

    <div className="flex flex-wrap justify-center items-center gap-10">
      
      {[
        { name: "Chinese", img: "/images/Chinese_food.jpeg" },
        { name: "Indian", img: "/images/Indian_food.jpeg" },
        { name: "American", img: "/images/American_food.jpeg" },
        { name: "Mexican", img: "/images/Mexican_food.jpeg" },
        { name: "Thai", img: "/images/Thai_food.jpeg" },
        { name: "Pizza", img: "/images/Pizza.jpeg" },
        { name: "Italian", img: "/images/Italian_food.jpeg" },
      ].map((item, index) => (
        
        <div
          key={index}
          className="flex flex-col items-center group cursor-pointer"
        >
          
          {/* Circle Image */}
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-md group-hover:scale-110 transition duration-300 border-4 border-transparent group-hover:border-orange-500">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name */}
          <p className="mt-3 text-gray-700 font-medium group-hover:text-red-500 transition">
            {item.name}
          </p>
        </div>

      ))}
    </div>
  </div>
</section>
  {/* ================= FOOD LISTING SECTION ================= */}
      <section className="w-full py-16 px-6 md:px-12 bg-gradient-to-b from-orange-50 to-red-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-10">
            Popular Restarunts 🍽️
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: "Bean House",
                img: "/images/stage.jpeg",
                rating: "4.8",
                
              },
              {
                name: "Culinaire FBD",
                img: "/images/stage.jpeg",
                rating: "4.8",
                
              },
              {
                name: "La Pino'z Pizza",
                img: "/images/stage.jpeg",
                rating: "4.8",
                
              },
              {
                name: "Chaudhary's",
                img: "/images/stage.jpeg",
                rating: "4.8",
                
              },
              {
                name: "Mittal Bhojnalay",
                img: "/images/stage.jpeg",
                rating: "4.8",
                
              },
              {
                name: "Standard Amritsari Vaishno Dhaba",
                img: "/images/stage.jpeg",
                rating: "4.8",
                
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4 space-y-2">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.name}
                  </h3>

                  <div className="flex justify-between items-center text-sm">
                    <span className="bg-green-500 text-white px-2 py-1 rounded">
                      ⭐ {item.rating}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      document
                        .getElementById("cta-section")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full mt-3 bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 rounded-full hover:opacity-90 transition"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= EXISTING CTA SECTION ================= */}
      <section id="cta-section" className="w-full bg-red py-5 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[70%_30%] gap-0 items-center overflow-hidden rounded-lg shadow-lg">
          
          {/* Left Side - Background Image */}
          <div
            className="h-80 md:h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/orderfoodcta.png')" }}
          ></div>

          {/* Right Side - QR and Text */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 p-8 bg-red">
            <h2 className="text-2xl font-semibold text-gray-900">
              Scan the QR and <br /> download the app now
            </h2>
            <img
              src="/images/qr.png"
              alt="QR Code"
              className="w-40 h-40"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OrderFood;
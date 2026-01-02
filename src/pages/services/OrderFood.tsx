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
          <Link to="/contact">
            <Button size="lg" className="cta-button text-primary-foreground px-8 py-4 text-lg rounded-full">
              Download App
            </Button>
          </Link>
         {/* <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg rounded-full bg-transparent"
          >
            Watch Demo
          </Button>*/}
        </div>
      </VideoHero>

      {/* Download CTA Section */}
      <section className="w-full bg-red py-5 md:px-10">
  <div className="max-w-6xl mx-auto grid md:grid-cols-[70%_30%] gap-0 items-center overflow-hidden rounded-lg shadow-lg">
    
    {/* Left Side - Background Image */}
    <div
      className="h-80 md:h-full bg-cover bg-center"
      style={{ backgroundImage: "url('/images/orderfoodcta.png')" }} // replace with your image
    ></div>

    {/* Right Side - QR and Text */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 p-8 bg-red">
      <h2 className="text-2xl font-semibold text-gray-900">
        Scan the QR and <br /> download the app now
      </h2>
      <img
        src="/images/qr.png" // replace with your QR image path
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
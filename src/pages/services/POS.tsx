import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import VideoHero from "@/components/VideoHero";
import Pricing from "@/components/Pricing";



  
const POS = () => {
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
 <Pricing />
    </Layout>
  );
};

export default POS;
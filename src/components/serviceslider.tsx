import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Keyboard, Mousewheel, Navigation } from "swiper/modules";
import { Zap, Shield, Users, Smartphone, Heart, Star, Trophy, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Feature {
  icon: any;
  title: string;
  description: string;
  video: string; // Changed from image to video
  link: string;
  cta?: string;
}

const features: Feature[] = [
  {
    icon: Zap,
    title: "Whatsapp Services",
    description: "Experience blazing fast performance with our optimized algorithms",
    video: "/videos/whatsapp.mp4", // Replace with actual video paths
    link: "/features/lightning-fast",
  },
  {
    icon: Shield,
    title: "Food Studio",
    description: "Your data is protected with enterprise-grade security",
    video: "/videos/foodstudio.mp4",
    link: "/features/secure-private",
  },
  {
    icon: Users,
    title: "Order Food",
    description: "Work seamlessly with your team in real-time",
    video: "/videos/orderfood.mp4",
    link: "/features/team-collaboration",
  },
  {
    icon: Smartphone,
    title: "POS",
    description: "Designed for mobile, perfect on every device",
    video: "/videos/pos1.mp4",
    link: "/features/mobile-first",
  },
  {
    icon: Heart,
    title: "Catering",
    description: "Built with your mental and physical health in mind",
    video: "/videos/catering.mp4",
    link: "/features/wellness-focused",
  },
  {
    icon: Star,
    title: "Packaging",
    description: "Enjoy a premium experience with attention to every detail",
    video: "/videos/packaging.mp4",
    link: "/features/premium-experience",
  },
  {
    icon: Trophy,
    title: "People Management",
    description: "Stay motivated with our comprehensive achievement system",
    video: "/videos/pm.mp4",
    link: "/features/achievement-system",
  },
];

const ServicesSlider = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    document.title = "Our Services";
  }, []);

  // Animation variants for text and button
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center py-12">
      {/* Heading with scroll animation */}
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl text-orange-500 font-bold mb-12 font-[Lato] z-10"
      >
        Our Services
      </motion.h1>

      {/* Swiper Section */}
      <motion.div
        className="w-full h-[80vh]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          mousewheel={{ thresholdDelta: 70 }}
          modules={[EffectCoverflow, Pagination, Keyboard, Mousewheel, Navigation]}
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2, slideShadows: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
          className="w-full h-full"
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center h-full">
              <div className="relative w-full h-full">
                {/* Video Background with Zoom Animation */}
                <motion.video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <source src={feature.video} type="video/mp4" />
                </motion.video>
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Text and Button with Staggered Animation */}
                <motion.div
                  className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <motion.div variants={itemVariants}>
                    <feature.icon className="w-12 h-12 mb-4 text-orange-500" />
                  </motion.div>
                  <motion.h2
                    variants={itemVariants}
                    className="text-4xl md:text-5xl font-bold text-orange-500 mb-4 font-[Lato]"
                  >
                    {feature.title}
                  </motion.h2>
                  <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl mb-6 max-w-2xl"
                  >
                    {feature.description}
                  </motion.p>
                  <motion.a
                    variants={itemVariants}
                    href={feature.link}
                    className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
                  >
                    {feature.cta || "View More"}
                  </motion.a>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation Buttons */}
          <button className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 bg-orange-600 hover:bg-orange-700 p-3 rounded-full shadow-lg z-10">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 bg-orange-600 hover:bg-orange-700 p-3 rounded-full shadow-lg z-10">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </Swiper>
      </motion.div>
    </main>
  );
};

export default ServicesSlider;            
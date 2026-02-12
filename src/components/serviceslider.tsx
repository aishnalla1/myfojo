import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
  EffectFade,
} from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const services = [
  {
    title: "Whatsapp Services",
    image: "/images/whatsappService.jpg",
    link: "/services/wa-delivery",
  },
  {
    title: "Food Studio",
    image: "/images/foodStudioService.jpg",
    link: "/services/food-studio",
  },
  {
    title: "Order Food",
    image: "/images/orderFoodService.jpg",
    link: "/services/order-food",
  },
  {
    title: "POS",
    image: "/images/posService.jpg",
    link: "/services/pos",
  },
  {
    title: "Catering",
    image: "/images/cateringService.jpg",
    link: "/services/catering",
  },
  {
    title: "Packaging",
    image: "/images/packagingService.jpg",
    link: "/services/packaging",
  },
  {
    title: "People Management",
    image: "/images/pmService.jpg",
    link: "/services/people-management",
  },
];

const ServicesSlider = () => {
  return (
    <section className="w-full bg-white">

      {/* ✅ HEADING IN WHITE SPACE (OUTSIDE SLIDER) */}
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-500 text-center tracking-wide">
          OUR SERVICES
        </h2>
      </div>

      {/* SLIDER (UNCHANGED) */}
      <div className="relative w-full h-[75vh] lg:h-[85vh] overflow-hidden bg-black">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, Keyboard, EffectFade]}
          effect="fade"
          loop
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          mousewheel={{
            releaseOnEdges: true,
            sensitivity: 0.4,
          }}
          className="h-full"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index} className="relative h-full">
              {/* IMAGE — UNCHANGED */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h3 className="text-4xl md:text-6xl font-semibold mb-6">
                  {service.title}
                </h3>

                <Link
                  to={service.link}
                  className="bg-white text-black px-7 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
                >
                  View More
                </Link>
              </div>
            </SwiperSlide>
          ))}

          {/* ARROWS — UNCHANGED */}
          <button className="swiper-prev absolute left-6 top-1/2 -translate-y-1/2 z-20 text-white">
            <ChevronLeft className="w-8 h-8 opacity-80 hover:opacity-100 transition" />
          </button>

          <button className="swiper-next absolute right-6 top-1/2 -translate-y-1/2 z-20 text-white">
            <ChevronRight className="w-8 h-8 opacity-80 hover:opacity-100 transition" />
          </button>
        </Swiper>
      </div>
    </section>
  );
};

export default ServicesSlider;

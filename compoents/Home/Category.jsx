"use client";
import { CardCarousel } from "@/components/ui/card-carousel"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Category = () => {
  const images = [
    { alt: "Kids Wear", src: "/kids.jpg" },
    { alt: "Mens Wear", src: "/men.jpg" },
    { alt: "Women Wear", src: "/women.jpg" },
    { alt: "Watches & Accessories", src: "/watches.jpg" },
    { alt: "Decore", src: "/arti.jpg" },
    { alt: "Jwells", src: "/jwels.jpg" },
  ];

  return (
    <section className="w-full h-full py-10">
      <div className="text-4xl text-center font-extrabold mb-6">
        CATEGORIES
      </div>

      <div className="pt-40">
      <CardCarousel
        images={images}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />
    </div>
    </section>
  );
};

export default Category;

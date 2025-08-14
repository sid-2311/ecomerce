import Category from "@/compoents/Home/Category";
import HeroSection from "@/compoents/Home/Hero";
import LatestArrival from "@/compoents/Home/latest";
import Testimonial from "@/compoents/Home/Testimonial";
// import testinonial from "@/compoents/Home/testimonial";
// import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <Category/>
    <LatestArrival/>
   {/* <testinonial/> */}
   <Testimonial/>
    </>
  );
}

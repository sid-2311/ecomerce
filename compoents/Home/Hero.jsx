"use client";
import { CardSwipe } from "@/components/ui/card-swipe"

import { DraggableCardBody, DraggableCardContainer } from "../ui/draggable-card";

const HeroSection = () => {
  const items = [
    {
      title: "Tyler Durden",
      image:
        "https://images.unsplash.com/photo-1732310216648-603c0255c000?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "The Narrator",
      image:
        "https://images.unsplash.com/photo-1697909623564-3dae17f6c20b?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Iceland",
      image:
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Japan",
      image:
        "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Norway",
      image:
        "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "New Zealand",
      image:
        "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Canada",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];

   const images = [
    { src: "/kids.jpg", alt: "Image 1" },
    { src: "/men.jpg", alt: "Image 2" },
    { src: "/women.jpg", alt: "Image 3" },
    { src: "/watches.jpg", alt: "Image 3" },
    {src:"/arti.jpg", alt:"image 4"},
    {src:"/jwels.jpg",alt:"image 5"}
  ]

  return (
    <section className="bg-[#F2F0F1] w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16 relative">
        
        {/* Left Content */}
        <div className="max-w-lg z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-black">
            FIND CLOTHES <br />
            THAT MATCHES <br />
            YOUR STYLE
          </h1>
          <p className="text-gray-600 mt-4">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="mt-6 bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-900 transition">
            Shop Now
          </button>
        </div>

        {/* Right Draggable Images */}
        <div className="w-full md:w-1/2 flex justify-center overflow-x-hidden">
          {/* <DraggableCardContainer className="relative flex h-[600px] w-full items-center justify-center overflow-visible">
            <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
              If it's your first day at Fight Club, you have to fight.
            </p>
            {items.map((item, index) => (
              <DraggableCardBody key={index} className={item.className}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="pointer-events-none relative z-10 h-80 w-80 object-cover rounded-lg shadow-lg"
                />
                <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                  {item.title}
                </h3>
              </DraggableCardBody>
            ))}
          </DraggableCardContainer> */}

           <CardSwipe images={images} autoplayDelay={2000} slideShadows={false} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

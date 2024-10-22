"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import image1 from "../../../../public/Governor-website-pics/slideShow1.6f890b58.jpg";
import image2 from "../../../../public/Governor-website-pics/slideShow2.ce4d5430.jpg";
import image3 from "../../../../public/Governor-website-pics/slideShow3.0006489a.jpg";
import image4 from "../../../../public/Governor-website-pics/slideShow4.d9ba1e2d.jpg";
import image5 from "../../../../public/Governor-website-pics/slideShow5.b502aa01.jpg";
import image7 from "../../../../public/Governor-website-pics/slideShow7.9e3fcc75.jpg";
import image8 from "../../../../public/Governor-website-pics/slideShow8.4b79537a.jpg";

const images = [image1, image2, image3, image4, image5, image7, image8];

const SlidingImages = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative mt-11 ml-8 h-[300px] md:h-full w-[95%] rounded-lg overflow-hidden xl:max-h-[500px] md:max-h-[300px]"
      style={{ boxShadow: "0 0 20px 0.5px", border: "none" }}
    >
      <div
        className="flex transition-transform duration-1000"
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
          >
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              className="object-fill w-full xl:max-h-[500px] md:max-h-[300px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingImages;

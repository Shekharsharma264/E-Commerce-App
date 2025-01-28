import React from "react";
import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox";
import { assets } from "../assets/frontend_assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1="ABOUT" text2="US" />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to [Your Brand Name], your ultimate destination for stylish,
            high-quality clothing that fits your lifestyle. We’re more than just
            a clothing store – we’re a community of fashion enthusiasts
            committed to helping you express your unique personality through
            timeless and trend-setting designs.
          </p>
          <p>
            From versatile basics to standout statement pieces, our collection
            is thoughtfully designed to cater to all shapes, sizes, and
            preferences. We prioritize comfort, quality, and affordability to
            ensure you always feel confident and chic.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to empower individuals to express themselves through
            fashion. We are committed to providing high-quality, stylish, and
            affordable clothing that celebrates diversity, inclusivity, and
            sustainability.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className=" text-gray-600">Quality is at the heart of everything we do. We take pride in delivering clothing and accessories that not only look great but also stand the test of time. Our commitment to excellence is reflected in every detail of our products, from the selection of premium materials to the precision of our craftsmanship.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className=" text-gray-600">We understand the value of your time, which is why we strive to make your shopping experience as seamless and hassle-free as possible. From browsing to checkout, every step is designed with your convenience in mind.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className=" text-gray-600">We believe that great fashion deserves even greater service. Our commitment to exceptional customer care is what sets us apart. From the moment you visit our store to the moment your purchase arrives at your door, we’re here to ensure your experience is seamless and enjoyable.

What You Can Expect:</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default About;

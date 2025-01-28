import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import Policy from "../components/Policy";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <div className="w-full flex flex-col items-center justify-between mt-32 md:flex-row sm:flex-row gap-12">
        <Policy src={assets.exchange_icon} text={"We offer hassle free exchange policy"}/>
        <Policy src={assets.quality_icon} text={"We provide 7 days free return policy"}/>
        <Policy src={assets.support_img} text={"we provide 24/7 customer support"}/>
      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default Home;

import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-cemter text-2xl pt-10 border-t">
        <Title text1="CONTACT" text2="ME" />
      </div>
      <div
        className="my-10 flex flex-col jus 
      md:flex-row gap-10 mb-20"
      >
        <img className="w-full md:max-w-[480px] rounded" src={assets.me} />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className=" font-semibold text-xl text-gray-600">
            Developed by - Chandrashekhar Sharma
          </p>

          <div className="flex justify-center items-center gap-4">
            <a
              href="https://www.linkedin.com/in/chandrashekhar-sharma-089267251"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-10 hover:border-white hover:border-2"
                src={assets.linkedin_logo}
                alt="LinkedIn Logo"
              />
            </a>
            <a
              href="https://github.com/Shekharsharma264"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-10 hover:border-white hover:border-2"
                src={assets.github_logo}
                alt="LinkedIn Logo"
              />
            </a>
            <a
              href="https://www.instagram.com/shekhar_sharma264/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-10 hover:border-white hover:border-2"
                src={assets.insta_logo}
                alt="LinkedIn Logo"
              />
            </a>
          </div>
          <p className="text-gray-500">000-000-000</p>
        </div>
      </div>
          <div className="flex flex-col gap-4">
            <p>
              <b>About The Project</b><br></br>
              This e-commerce platform is designed to deliver a seamless online
              shopping experience. It features a clean and user-friendly
              interface with dynamic product listings, responsive design, and
              interactive elements, showcasing my skills in frontend
              development.
            </p>
            <p>
              <b>About Me</b><br></br>
              I’m Chandrashekhar Sharma, a passionate Frontend Developer and a
              student at MITRC Alwar. This project reflects my dedication to
              building functional and engaging web solutions. As I continue
              learning, I aim to enhance this platform further and add more
              advanced features.
            </p>
          </div>
    </div>
  );
};

export default Contact;

import React, { useState } from "react";

const NewsLetterBox = () => {
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        setValue("");
    }
    const [value,setValue] = useState("");

  return (
    <div className="flex flex-col items-center justify-center my-10 gap-2">
      <p className="text-3xl">Subscribe now & get 20% off</p>
      <p className="m-auto text-xs sm:text-sm md:text-base text-gray-700">
        "Stay updated with the latest news and exclusive offers—subscribe now!"
      </p>

      <div className="flex flex-row items-center mt-4">
        <form onSubmit={onSubmitHandler}>
          <input value={value} onChange={(e)=>setValue(e.target.value)}
            className="p-2 sm:flex-1 outline-none border-2 border-gray-500 w-2/3 md:w-80"
            type="email"
            required
            placeholder="Enter your E-mail"
          />
          <button type="submit" className="bg-black text-white p-2 border-2 border-black">SUBSCRIBE</button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetterBox;

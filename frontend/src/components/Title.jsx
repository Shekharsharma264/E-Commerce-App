import React from "react";

const Title = (props) => {
  return (
    <div className="flex items-center gap-2 justify-center">
      <span className="mt-2 w-8 bg-black h-[2px]"></span>

      <p className="text-3xl text-gray-600">{props.text1}</p>
      <p className="text-3xl">{props.text2}</p>
      <span className="mt-2 w-8 bg-black h-[2px]"></span>
    </div>
  );
};

export default Title;

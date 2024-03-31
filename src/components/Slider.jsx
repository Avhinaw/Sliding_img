import React, { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

let Slider = ({src1, src2}) => {
  const [val, setVal] = useState(false);
  return (
    <div className="bg-zinc-500 overflow-hidden rounded-md relative">
      <div className="w-52 h-72 rounded-md relative flex">
        <img
          className={`shrink-0 w-full h-full ease-in-out duration-300 delay-75 transition-all ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          } object-cover`}
          src={src1}
        />
        <img
          className={`shrink-0 w-full h-full ease-in-out duration-300 delay-75 transition-all ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          } object-cover`}
          src={src2}
        />
        <span
          onClick={() => setVal(() => !val)}
          className="-translate-x-[50%] -translate-y-[10%] text-2xl absolute left-[50%] bottom-[10%] rounded-full bg-teal-400"
        >
          <FaArrowCircleRight size={30}/>
        </span>
      </div>
    </div>
  );
};

export default Slider;

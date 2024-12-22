import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Cards from "./Card";
const Testimonials = (props) => {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function leftShiftHandeler() {
    if (index - 1 < 0) {
      // Calculate the array length -> (reviews.length-1).
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightShiftHandeler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function surprisehandeler() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }

  return (
    <div className="w-[85vw] md:w-[700px] bg-white p-10 transition-all duration-700 flex flex-col justify-center items-center mt-10 rounded-md mx-auto hover:shadow-xl" >
    {/*<Cards reviews={reviews[0]} />  --> for one value.*/}
     <Cards reviews={reviews[index]} />

      <div className="flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto">
        <button
          onClick={leftShiftHandeler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronLeft />
        </button>

        <button
          onClick={rightShiftHandeler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronRight />
        </button>
      </div>

      <div className="mt-6">
        <button
          onClick={surprisehandeler}
          className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-lg text-white"
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonials;

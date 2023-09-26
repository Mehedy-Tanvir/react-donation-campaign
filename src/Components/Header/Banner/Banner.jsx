import { useState } from "react";
import PropTypes from "prop-types";

const Banner = ({ onSearchClicked }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSearch = () => {
    onSearchClicked(inputValue);
  };
  return (
    <div className="max-w-[1600px] mx-auto font-inter">
      <div
        className="min-h-screen hero"
        style={{
          backgroundImage: "url(https://i.ibb.co/tx0F7gH/banner-img.png)",
        }}
      >
        <div className="bg-white hero-overlay bg-opacity-[95%]"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-[780px]">
            <h1 className="mb-5 md:text-[32px] text-[20px] lg:text-[48px]  font-bold text-[#0B0B0B]">
              I Grow By Helping People In Need
            </h1>
            <div className="hidden join md:block">
              <input
                className="text-gray-700 input input-bordered join-item"
                placeholder="Search here..."
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button
                className="rounded-xl btn join-item bg-[#FF444A] hover:bg-red-300 text-[16px] font-semibold text-white normal-case"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
            <div className="flex flex-col justify-center items-center gap-[16px] md:hidden">
              <input
                className="text-gray-700 input input-bordered w-[90%]"
                placeholder="Search here..."
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button
                className="rounded-lg btn bg-[#FF444A] hover:bg-red-300 text-[16px] font-semibold text-white normal-case"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Banner.propTypes = {
  onSearchClicked: PropTypes.func.isRequired,
};
export default Banner;

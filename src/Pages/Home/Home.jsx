import { useState } from "react";
import Banner from "../../Components/Header/Banner/Banner";
import Navbar from "../../Components/Header/Navbar/Navbar";
import CardContainerHome from "../../Components/Home/CardContainerHome/CardContainerHome";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const onSearchClicked = (value) => {
    setInputValue(value);
  };
  return (
    <div className="mb-[40px] md:mb-[120px]">
      <div className="relative">
        <div className="absolute w-full">
          <Navbar></Navbar>
        </div>
        <Banner onSearchClicked={onSearchClicked}></Banner>
      </div>
      <CardContainerHome inputValue={inputValue}></CardContainerHome>
    </div>
  );
};

export default Home;

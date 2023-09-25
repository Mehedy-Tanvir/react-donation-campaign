import Banner from "../../Components/Header/Banner/Banner";
import Navbar from "../../Components/Header/Navbar/Navbar";
import CardContainerHome from "../../Components/Home/CardContainerHome/CardContainerHome";

const Home = () => {
  return (
    <div className="mb-[120px]">
      <div className="relative">
        <div className="absolute w-full">
          <Navbar></Navbar>
        </div>
        <Banner></Banner>
      </div>
      <CardContainerHome></CardContainerHome>
    </div>
  );
};

export default Home;

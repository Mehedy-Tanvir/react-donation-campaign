import Banner from "../../Components/Header/Banner/Banner";
import Navbar from "../../Components/Header/Navbar/Navbar";

const Home = () => {
  return (
    <div className="relative">
      <div className="absolute w-full">
        <Navbar></Navbar>
      </div>
      <Banner></Banner>
    </div>
  );
};

export default Home;

import useGetData from "../../../Hooks/useGetData";
import CardHome from "../CardHome/CardHome";

const CardContainerHome = () => {
  const data = useGetData();
  console.log("home", data);
  return (
    <div className="max-w-[310px] md:max-w-[750px] lg:max-w-[900px] xl:max-w-[1320px] mx-auto grid grid-cols-1 gap-[24px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((item) => (
        <CardHome key={item.id} item={item}></CardHome>
      ))}
    </div>
  );
};

export default CardContainerHome;

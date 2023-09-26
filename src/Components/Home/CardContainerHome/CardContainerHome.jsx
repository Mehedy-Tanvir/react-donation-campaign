import useGetData from "../../../Hooks/useGetData";
import CardHome from "../CardHome/CardHome";
import PropTypes from "prop-types";

const CardContainerHome = ({ inputValue }) => {
  let data = useGetData();
  if (inputValue) {
    const filterData = data.filter(
      (item) => item.category.toLowerCase() === inputValue.toLowerCase()
    );
    if (filterData.length > 0) {
      data = filterData;
    }
  }
  return (
    <div className="max-w-[310px] md:max-w-[750px] lg:max-w-[900px] xl:max-w-[1320px] mx-auto grid grid-cols-1 gap-[24px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:mt-[100px]">
      {data?.map((item) => (
        <CardHome key={item.id} item={item}></CardHome>
      ))}
    </div>
  );
};

CardContainerHome.propTypes = {
  inputValue: PropTypes.string.isRequired,
};

export default CardContainerHome;

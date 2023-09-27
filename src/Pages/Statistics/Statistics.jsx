import { Chart } from "react-google-charts";
import { getFromLs } from "../../Utility/localStorageHandler";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const items = useLoaderData() || [];
  const donatedItems = getFromLs() || [];
  const data = [
    ["Donner", "percentage"],
    ["Your Donation", donatedItems.length],
    ["Total Donation", items.length - donatedItems.length],
  ];
  const customColors = ["#00C49F", "#FF444A"];
  const options = {
    colors: customColors,
    legend: "none",
    pieSliceTextStyle: {
      color: "#FFF",
      fontSize: 16,
      fontName: "Inter",
      bold: true,
      italic: false,
    },
  };
  return (
    <div className="max-w-[310px] md:max-w-[750px] lg:max-w-[900px] xl:max-w-[1320px] mx-auto mb-[40px] md:mb-[80px]">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
      <div className="flex items-center justify-center gap-[56px] flex-row">
        <div className="flex justify-center items-center gap-[16px] flex-col-reverse md:flex-row">
          <h1 className="text-[#0B0B0B] text-[18px] font-normal">
            Your Donation
          </h1>
          <div className="w-[100px] h-[12px] bg-[#00C49F] rounded-sm"></div>
        </div>
        <div className="flex justify-center items-center gap-[16px] flex-col-reverse md:flex-row">
          <h1 className="text-[#0B0B0B] text-[18px] font-normal">
            Total Donation
          </h1>
          <div className="w-[100px] h-[12px] bg-[#FF444A] rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

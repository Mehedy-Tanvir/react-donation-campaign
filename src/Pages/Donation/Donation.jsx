import { useLoaderData } from "react-router-dom";
import { getFromLs } from "../../Utility/localStorageHandler";
import CardDonated from "../../Components/Donation/CardDonated/CardDonated";

const Donation = () => {
  const donations = getFromLs();
  const items = useLoaderData();
  const donatedItems = items.filter((item) => donations.includes(item.id));
  console.log(donatedItems);
  return (
    <div className="max-w-[310px] md:max-w-[750px] lg:max-w-[900px] xl:max-w-[1320px] mx-auto mt-[40px] md:mt-[80px] mb-[40px] md:mb-[120px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
        {donatedItems.map((item, idx) => (
          <CardDonated key={idx} item={item}></CardDonated>
        ))}
      </div>
    </div>
  );
};

export default Donation;

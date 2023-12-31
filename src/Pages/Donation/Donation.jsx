import { useLoaderData } from "react-router-dom";
import { getFromLs } from "../../Utility/localStorageHandler";
import CardDonated from "../../Components/Donation/CardDonated/CardDonated";
import { useState } from "react";

const Donation = () => {
  const donations = getFromLs() || [];
  const items = useLoaderData();

  // const donatedItems = items.filter((item) => donations.includes(item.id));
  let donatedItems = [];
  for (let donation of donations) {
    let foundItem = items.find((item) => item.id === donation);
    if (foundItem) {
      donatedItems.push(foundItem);
    }
  }

  const [seeAll, setSeeAll] = useState(false);
  const handleSeeAll = () => {
    setSeeAll(!seeAll);
  };

  return (
    <div className="max-w-[310px] md:max-w-[750px] lg:max-w-[900px] xl:max-w-[1320px] mx-auto mt-[40px] md:mt-[80px] mb-[40px] md:mb-[120px]">
      {donatedItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center w-full h-[600px] gap-6">
          <h2 className="text-2xl font-bold text-center text-gray-600">
            You have not made any donations yet!
          </h2>
        </div>
      ) : (
        ``
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
        {seeAll
          ? donatedItems.map((item, idx) => (
              <CardDonated key={idx} item={item}></CardDonated>
            ))
          : donatedItems
              .slice(0, 4)
              .map((item, idx) => (
                <CardDonated key={idx} item={item}></CardDonated>
              ))}
      </div>
      {donatedItems.length > 4 && !seeAll ? (
        <div className="flex justify-center items-center mt-[54px]">
          <button
            className="btn normal-case bg-[#009444] hover:bg-green-500 text-white rounded-lg text-[16px] font-semibold"
            onClick={handleSeeAll}
          >
            See All
          </button>
        </div>
      ) : (
        ``
      )}
    </div>
  );
};

export default Donation;

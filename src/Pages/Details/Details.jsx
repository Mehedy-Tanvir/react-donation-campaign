import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { addToLs } from "../../Utility/localStorageHandler";

const Details = () => {
  const params = useParams();
  const items = useLoaderData();
  let detailItem = items.find((item) => item.id == params.id);
  const handleDonate = () => {
    Swal.fire("Good job!", "Your donation was successful!", "success");
    addToLs(detailItem.id);
  };

  return (
    <div className="max-w-[310px] md:max-w-[750px] lg:max-w-[900px] xl:max-w-[1320px] mx-auto mt-[80px] mb-[40px] md:mb-[122px]">
      <div className="relative w-full rounded-lg">
        <img
          className="w-full rounded-lg"
          src={detailItem.image_details}
          alt=""
        />
        <div className="absolute h-[50%] md:h-[19%] bottom-0 bg-[#0B0B0B80] w-full rounded-b-lg flex justify-start items-center">
          <button
            style={{ backgroundColor: detailItem.text_color }}
            className="z-20 btn rounded text-white py-[16px] border-none normal-case text-[20px] font-semibold px-[26px] ml-[37px]"
            onClick={handleDonate}
          >
            Donate {detailItem.price}$
          </button>
        </div>
      </div>
      <h1 className="text-[#0B0B0B] text-[30px] md:text-[40px] font-bold mt-[56px]">
        {detailItem.title}
      </h1>
      <p className="mt-[24px] text-[#0B0B0BB3] text-[16px] font-normal">
        {detailItem.description}
      </p>
    </div>
  );
};

export default Details;

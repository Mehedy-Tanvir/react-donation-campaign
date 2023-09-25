import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CardDonated = ({ item }) => {
  return (
    <div className="rounded-lg card md:card-side">
      <figure className="">
        <img
          src={item.image_card}
          alt="Movie"
          className="md:w-[220px] h-full"
        />
      </figure>
      <div
        style={{ backgroundColor: item.card_bg_color }}
        className="rounded-b-lg md:rounded-l-none md:rounded-e-lg card-body"
      >
        <div
          style={{
            backgroundColor: item.category_bg_color,
            color: item.text_color,
          }}
          className="px-[10px] py-[4px] w-fit rounded text-[14px] font-medium"
        >
          {item.category}
        </div>
        <h1 className="text-[24px] font-semibold text-[#0B0B0B]">
          {item.title}
        </h1>
        <p
          style={{ color: item.text_color }}
          className="text-[16px] font-semibold"
        >
          ${item.price}
        </p>
        <div className="justify-start card-actions">
          <Link to={`/campaign/${item.id}`}>
            <button
              style={{ background: item.text_color }}
              className="btn py-[9px] px-[16px] text-white text-[18px] font-semibold normal-case"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
CardDonated.propTypes = {
  item: PropTypes.object.isRequired,
};
export default CardDonated;

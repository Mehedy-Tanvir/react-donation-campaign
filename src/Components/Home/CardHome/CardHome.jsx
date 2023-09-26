import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CardHome = ({ item }) => {
  const {
    id,
    image_card,
    category,
    title,
    text_color,
    category_bg_color,
    card_bg_color,
  } = item;

  return (
    <Link to={`/campaign/${id}`}>
      <div className="bg-transparent rounded-t-lg card h-fit">
        <figure>
          <img
            src={image_card}
            alt="image"
            className="rounded-t-lg h-[200px] w-full"
          />
        </figure>
        <div
          style={{ backgroundColor: card_bg_color }}
          className="p-4 h-[120px] rounded-b-lg"
        >
          <div
            style={{ backgroundColor: category_bg_color, color: text_color }}
            className="px-[10px] py-[4px] w-fit rounded text-[14px] font-medium"
          >
            {category}
          </div>
          <h1
            style={{ color: text_color }}
            className="text-[20px] font-semibold"
          >
            {title}
          </h1>
        </div>
      </div>
    </Link>
  );
};
CardHome.propTypes = {
  item: PropTypes.object.isRequired,
};
export default CardHome;

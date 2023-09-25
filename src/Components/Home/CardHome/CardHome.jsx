const CardHome = ({ item }) => {
  const {
    image_card,
    category,
    title,
    text_color,
    category_bg_color,
    card_bg_color,
  } = item;

  return (
    <div className="bg-transparent card">
      <figure>
        <img
          src={image_card}
          alt="image"
          className="rounded-t-lg h-[200px] w-full"
        />
      </figure>
      <div
        style={{ backgroundColor: card_bg_color }}
        className="rounded-b-lg card-body"
      >
        <div
          style={{ backgroundColor: category_bg_color, color: text_color }}
          className="px-[10px] py-[4px] w-fit rounded text-[14px] font-medium"
        >
          {category}
        </div>
        <h1 style={{ color: text_color }} className="text-[20px] font-semibold">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default CardHome;
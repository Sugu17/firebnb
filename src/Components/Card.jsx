import experienceData from "/src/data";

function Card(props) {
  let badgeText;
  if (props.openSpots === 0) badgeText = "SOLD OUT";
  else if (props.location == "Online") badgeText = "ONLINE";
  return (
    <div className="card">
      {badgeText && <span className="badge">{badgeText}</span>}
      <img className="card__img" src={props.img} alt="" />
      <span className="card__data">
        <svg className="rating-icon">
          <use href="/src/assets/icons/rating.svg#rating"></use>
        </svg>
        <span className="rating">{props.rating}</span>
        <span className="card__reviews ">({props.reviewCount})</span>
        <span className="middot">&middot;</span>
        <span className="card__location">{props.location}</span>
      </span>
      <span className="card__content">{props.content}</span>
      <span className="card__pricing">
        <span className="price-emp">From ${props.price}</span> / person
      </span>
    </div>
  );
}

export default function CardGrid() {
  const data = experienceData.map((data) => (
    <Card
      key={data.id}
      img={data.coverImg}
      rating={data.stats.rating}
      reviewCount={data.stats.reviewCount}
      location={data.location}
      content={data.title}
      price={data.price}
      openSpots={data.openSpots}
    />
  ));

  return <div className="card-container">{data}</div>;
}

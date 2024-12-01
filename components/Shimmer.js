import Card from "./Card";

const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(10)
        .fill("")
        .map((e, ind) => (
          <div className="shimmer-card" key={ind}></div>
        ))}
    </div>
  );
};

export default Shimmer;

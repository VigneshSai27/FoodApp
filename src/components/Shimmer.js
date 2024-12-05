const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(10)
        .fill("")
        .map((e, ind) => (
          <div
            className="h-96 w-52 ml-14 mt-5 mr-8 mb-16 bg-gray-200"
            key={ind}
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;

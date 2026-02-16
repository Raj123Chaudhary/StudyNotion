const stats = [
  {
    count: "5k",
    lable: "Active Students",
  },
  {
    count: "10+",
    lable: "Mentors",
  },
  {
    count: "200+",
    lable: "Courses",
  },
  {
    count: "50+",
    lable: "Awards",
  },
];

const StatsComponent = () => {
  return (
    <div>
      <div className="flex lg:flex-row flex-wrap justify-center text-white lg:justify-evenly mt-20 bg-[#161D29] rounded ">
        {stats.map((element, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center px-10 py-5"
            >
              <h1 className="text-3xl font-semibold text-white">
                {element.count}
              </h1>
              <p className="text-[#585D69] text-[16px]">{element.lable}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default StatsComponent;

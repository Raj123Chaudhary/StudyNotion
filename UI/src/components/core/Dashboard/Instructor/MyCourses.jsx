const MyCourses = () => {
  return (
    <div className=" h-[calc(100vh-3.6rem)] p-4">
      {/* title   */}
      <div>
        <div>Home {location.pathname}</div>
        <h2 className="text-3xl font-semibold mt-2">My Courses</h2>
      </div>

      {/* show course details  */}
      <div className="mt-8">
        {/* course header   */}
        <div className="flex bg-(--richblack-800) w-full  py-3 rounded px-3 justify-between">
          <div className=" text-md w-[75%]">Courses</div>
          <div className=" text-md w-[10%]">Duration</div>
          <div className=" text-md w-[10%] ">Price</div>
          <div className=" text-md w-[5%] ">Action</div>
        </div>
        {/* course details  */}
      </div>
    </div>
  );
};
export default MyCourses;

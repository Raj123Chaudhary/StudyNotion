import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CourseDetails from "./CourseDetails";

const EnrolledCourse = () => {
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);
  const [course, setCourse] = useState("all");

  console.log(user);
  return (
    <div className=" h-[calc(100vh-3.6rem)] p-4">
      {/* title   */}
      <div>
        <div>Home {location.pathname}</div>
        <h2 className="text-3xl font-semibold mt-2">Enrolled Courses</h2>
      </div>
      {/* status all pending completed  */}
      <div className="mt-8">
        <div className=" p-1 items-start inline-flex rounded-3xl  border-b-2  border-b-(--richblack-700)    bg-(--richblack-800) gap-0.5">
          <div className=" cursor-pointer select-none rounded-3xl px-6 bg-(--richblack-900) py-2">
            All
          </div>
          <div className="bg-(--richblack-800) cursor-pointer select-none rounded-3xl px-6 py-2">
            Pending
          </div>
          <div className="bg-(--richblack-800) cursor-pointer select-none rounded-3xl px-6 py-2">
            Completed
          </div>
        </div>
      </div>
      {/* show course details  */}
      <div className="mt-8">
        {/* course header   */}
        <div className="flex bg-(--richblack-800) w-full  py-3 rounded px-5 justify-between">
          <div className=" w-[40%]">Course Name</div>
          <div className="  w-[30%]">Duration</div>
          <div className="  w-[30%] ">Progress</div>
        </div>
        {/* course details  */}
        <CourseDetails courses={user.courses} />
      </div>
    </div>
  );
};
export default EnrolledCourse;

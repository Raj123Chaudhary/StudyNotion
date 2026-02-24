import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CourseDetails from "./CourseDetails";
import { getEnrolledCourses } from "../../../services/operations/profileAPI";
const EnrolledCourse = () => {
  const location = useLocation();

  const [enrolledCourses, setEnrolledCourses] = useState(null);
  console.log(enrolledCourses);
  const fetchEnrolledCourses = async () => {
    try {
      const enrolledCourses = await getEnrolledCourses();
      setEnrolledCourses(enrolledCourses);
      // console.log(enrolledCourses);
    } catch (error) {
      console.log("Error in fetching enrolled courses:", error.message);
    }
  };
  useEffect(() => {
    fetchEnrolledCourses();
    console.log("enrolledCourses:", enrolledCourses);
  }, []);

  return (
    <div className=" h-[calc(100vh-3.6rem)] p-4">
      {/* title   */}
      <div>
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
        {/* <CourseDetails courses={user.courses} /> */}
      </div>
    </div>
  );
};
export default EnrolledCourse;

// getEnrolledCourses api
import { PROFILE_API } from "../apis";
import { apiConnector } from "../apiConnector";
export const getEnrolledCourses = async () => {
  try {
    const response = await apiConnector(
      "GET",
      PROFILE_API.GET_ENROLLED_COURSES,
    );

    const enrolledCourses = response?.data?.enrolledCourses;

    return enrolledCourses;
  } catch (error) {
    const message =
      error?.response?.data?.message || "Not get enrolled courses";
    throw new Error(message);
  }
};

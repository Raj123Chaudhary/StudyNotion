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

export const updateProfileImage = async (formData) => {
  try {
    const response = await apiConnector(
      "PUT",
      PROFILE_API.UPDATE_PROFILE_IMAGE,
      formData,
      {
        "Content-Type": "multipart/form-data",
      },
    );
    console.log("success", response?.data?.message);
  } catch (error) {
    throw new Error(
      error?.response?.data?.message || "Error While Updating Profile Image",
    );
  }
};

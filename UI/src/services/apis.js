// course endpoints
export const COURSE_API = {
  GET_ALL_CATEGORIES: "/course/showAllCategories",
};

// auth endpoints
export const AUTH_API = {
  LOGIN_API: "/auth/login",
  SINGUP_API: "/auth/signUp",
  SEND_OTP_API: "/auth/sendOTP",
  RESETPASSTOKEN_API: "/profile/reset-password-token",
  RESETPASSWORD_API: "/profile/reset-password",
};

//profile endpoints

export const PROFILE_API = {
  GET_ENROLLED_COURSES: "/profile/getEnrolledCourses",
  UPDATE_PROFILE_IMAGE: "/profile/updateProfileImage",
  UPDATE_PROFILE: "profile/updateProfile",
};

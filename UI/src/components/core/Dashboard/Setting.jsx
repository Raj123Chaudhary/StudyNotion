import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineFileUpload } from "react-icons/md";
import { useRef } from "react";
import { updateProfileImage } from "../../../services/operations/profileAPI";
import { setUser } from "../../../features/profileSlice/profileSlice";

const Setting = () => {
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const profileRef = useRef(null);
  const [profileImage, setProfileImage] = useState(null);
  const [updateProfile, setUpdateProfile] = useState({});
  // console.log(profileImage);

  // Handle handleProfileInformationUpload
  const handleProfileInformation = (e) => {
    // console.log(e.target.value);
    const { value, name } = e.target;
    console.log(value, name);
    setUpdateProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle profile Image Uplaod

  const handleSelectClick = () => {
    profileRef.current.click();
  };
  const handleFileChange = (e) => {
    console.log("i am in handle file change");
    const file = e.target.files[0];
    if (!file) return;
    setProfileImage(file);
  };
  const formData = new FormData();
  formData.append("profileImage", profileImage);
  const handleProfileImageUpload = async () => {
    if (!profileImage) {
      alert("Select image first");
      return;
    }

    const formData = new FormData();
    formData.append("imageFile", profileImage); // 👈 backend key match

    try {
      console.log("I am in handle upload");
      const data = await updateProfileImage(formData);
      console.log("data in setting", data);
      dispatch(setUser(data?.user));
    } catch (error) {
      console.log("error:", error.message);
    }
  };
  return (
    <div className="text-white">
      <div className="mt-8">
        <h1 className="text-3xl font-semibold">Setting</h1>
        {/* section 1 profile change  */}
        <div className="flex  mt-8 gap-8  rounded-md items-center px-8 py-4 bg-(--richblack-800)">
          <div className="w-[80px] h-[80px] ">
            <img
              className="w-full h-full object-cover rounded-full"
              src={user.image}
              alt="logo"
            />
          </div>
          <div className="flex flex-col">
            <div>
              <h2 className="text-lg font-semibold">Change Profile Picture</h2>
            </div>
            <div className="flex gap-4 mt-2 rounded">
              <button
                onClick={handleSelectClick}
                className="px-5 py-2.5 cursor-pointer transition-all duration-200 hover:scale-95  rounded text-white bg-(--richblack-700) "
              >
                Select
              </button>
              <div
                onClick={handleProfileImageUpload}
                className="bg-amber-300 transition-all duration-200 hover:scale-95  cursor-pointer flex gap-2 items-center rounded text-black px-5 py-2.5 border"
              >
                <span>Upload</span>
                <input
                  ref={profileRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <MdOutlineFileUpload className="text-lg" />
              </div>
            </div>
          </div>
        </div>
        {/* section 2 profile information  */}
        <div className="flex  mt-8 flex-col rounded-md   px-8 py-4  bg-(--richblack-800)">
          <h1 className="text-lg font-semibold mt-4">Profile Information</h1>
          <div className=" flex mt-4 py-2 gap-4 w-full">
            <div className="flex flex-col gap-2 w-1/2">
              <label className="text-lg font-semibold" htmlFor="">
                First Name
              </label>
              <input
                placeholder="Enter first name"
                name="firstName"
                className=" text-white bg-(--richblack-700) px-4 py-2 rounded-md"
                type="text"
                onChange={handleProfileInformation}
              />
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <label className="font-semibold text-lg">Last Name</label>
              <input
                placeholder="Enter last name"
                name="lastName"
                className="rounded-md text-white bg-(--richblack-700) px-4 py-2"
                type="text"
                onChange={handleProfileInformation}
              />
            </div>
          </div>
          <div className=" flex mt-4 py-2 gap-4 w-full">
            <div className="flex flex-col gap-2 w-1/2">
              <label className="text-lg font-semibold" htmlFor="">
                Date of Birth
              </label>
              <input
                placeholder="Enter Date of Birth"
                name="dateOfBirth"
                className=" text-white bg-(--richblack-700) px-4 py-2 rounded-md"
                type="date"
                onChange={handleProfileInformation}
              />
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <label className="font-semibold text-lg">Gender</label>
              <div className="flex bg-(--richblack-700)  px-4 py-2 rounded-md gap-2 items-center">
                <label htmlFor="">Male</label>
                <input
                  name="gender"
                  className=" scale-110 "
                  type="radio"
                  value={"male"}
                  onChange={handleProfileInformation}
                />
                <label htmlFor="">Female</label>
                <input
                  className=" scale-110 "
                  value="female"
                  name="gender"
                  type="radio"
                  onChange={handleProfileInformation}
                />
                <label htmlFor="">Other</label>
                <input
                  className=" scale-110 "
                  value={"other"}
                  name="gender"
                  type="radio"
                  onChange={handleProfileInformation}
                />
              </div>
            </div>
          </div>
          <div className=" flex mt-4 py-2 gap-4 w-full">
            <div className="flex flex-col gap-2 w-1/2">
              <label className="text-lg font-semibold" htmlFor="">
                Contact Number
              </label>
              <input
                placeholder="Enter Contact Number"
                name="contactNumber"
                className=" text-white bg-(--richblack-700) px-4 py-2 rounded-md"
                type="text"
                maxLength={10}
                onChange={handleProfileInformation}
              />
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <label className="font-semibold text-lg">About</label>
              <input
                placeholder="About"
                name="about"
                className="rounded-md text-white bg-(--richblack-700) px-4 py-2"
                type="text"
                onChange={handleProfileInformation}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <div className="flex gap-4 ">
            <button className="px-5 transition-all duration-200 hover:scale-95  rounded-md cursor-pointer py-2.5 bg-(--richblack-700) ">
              Cancel
            </button>
            <button className="px-5 transition-all duration-200 hover:scale-95  rounded-md py-2.5 cursor-pointer bg-yellow-400">
              Update
            </button>
          </div>
        </div>
        {/* section 3 change password  */}
        <div className="flex rounded-md flex-col mt-8  px-4 py-2 bg-(--richblack-800)">
          <h1 className="text-xl mt-5 font-semibold">Password</h1>
          <div className=" flex mt-4 py-2 gap-4 w-full">
            <div className="flex flex-col gap-2 w-1/2">
              <label className="text-lg font-semibold" htmlFor="">
                Current Password
              </label>
              <input
                placeholder="Enter Current password"
                name="firstName"
                className=" text-white bg-(--richblack-700) px-4 py-2 rounded-md"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <label className="font-semibold text-lg">New Password</label>
              <input
                placeholder="Enter New Password"
                name="lastName"
                className="rounded-md text-white bg-(--richblack-700) px-4 py-2"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <div className="flex gap-4 ">
            <button className="px-5 cursor-pointer transition-all duration-200 hover:scale-95 rounded-md py-2.5 bg-(--richblack-700) ">
              Cancel
            </button>
            <button className="px-5 cursor-pointer transition-all duration-200 hover:scale-95  rounded-md py-2.5 bg-yellow-400">
              Update
            </button>
          </div>
        </div>
        {/* section 4 Delete account  */}
        <div className="bg-[#340019] gap-6 mb-8 flex rounded-md mt-8 items-center px-8 py-8 ">
          <div className="">
            <AiOutlineDelete className="text-[#EF476F] gap-4 w-[50px] h-[50px] rounded-full bg-[#691432]" />
          </div>
          <div className="flex flex-col gap-3  items-start">
            <h2 className="text-[#FBC7D1] font-semibold text-lg">
              Delete Account
            </h2>
            <p className="text-[#FBC7D1]">Would like to delete account ? </p>
            <p className="text-[#FBC7D1]">
              This account contains paid courses deleting your account remove
              all contains associated with it
            </p>
            <button className="text-[#D43D63] hover:ml-2 hover:scale-110 duration-200 transition-all cursor-pointer ">
              I want to delete my account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Setting;

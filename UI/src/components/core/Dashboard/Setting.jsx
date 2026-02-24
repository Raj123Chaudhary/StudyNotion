import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useSelector } from "react-redux";
import { MdOutlineFileUpload } from "react-icons/md";

const Setting = () => {
  const { user } = useSelector((state) => state.auth);
  const [profileInformation, setProfileInformation] = useState({});
  return (
    <div className="text-white">
      <div className="mt-8">
        <h1 className="text-3xl font-semibold">Setting</h1>
        {/* section 1 profile change  */}
        <div className="flex  mt-8 gap-8  rounded-md items-center px-8 py-4 bg-(--richblack-800)">
          <div className="w-[70px] ">
            <img className="w-full rounded-full" src={user.image} alt="logo" />
          </div>
          <div className="flex flex-col">
            <div>
              <h2 className="text-lg font-semibold">Change Profile Picture</h2>
            </div>
            <div className="flex gap-4 mt-2 rounded">
              <button className="px-5 py-2.5 rounded text-white bg-(--richblack-700) ">
                Select
              </button>
              <div className="bg-amber-300 flex gap-2 items-center rounded text-black px-5 py-2.5 border">
                <span>Upload</span>
                <input type="file" className="hidden" />
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
              />
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <label className="font-semibold text-lg">Last Name</label>
              <input
                placeholder="Enter last name"
                name="lastName"
                className="rounded-md text-white bg-(--richblack-700) px-4 py-2"
                type="text"
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
                name="firstName"
                className=" text-white bg-(--richblack-700) px-4 py-2 rounded-md"
                type="date"
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
                />
                <label htmlFor="">Female</label>
                <input
                  className=" scale-110 "
                  value={"male"}
                  name="gender"
                  type="radio"
                />
                <label htmlFor="">Other</label>
                <input
                  className=" scale-110 "
                  value={"male"}
                  name="gender"
                  type="radio"
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
                name="firstName"
                className=" text-white bg-(--richblack-700) px-4 py-2 rounded-md"
                type="text"
                maxLength={10}
              />
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <label className="font-semibold text-lg">About</label>
              <input
                placeholder="About"
                name="lastName"
                className="rounded-md text-white bg-(--richblack-700) px-4 py-2"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <div className="flex gap-4 ">
            <button className="px-5 rounded-md py-2.5 bg-(--richblack-700) ">
              Cancel
            </button>
            <button className="px-5 rounded-md py-2.5 bg-yellow-400">
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
            <button className="px-5 rounded-md py-2.5 bg-(--richblack-700) ">
              Cancel
            </button>
            <button className="px-5 rounded-md py-2.5 bg-yellow-400">
              Update
            </button>
          </div>
        </div>
        {/* section 4 Delete account  */}
        <div className="bg-[#340019] gap-6 mb-8 flex rounded-md mt-8 items-center px-8 py-8 ">
          <div className="">
            <AiOutlineDelete className="text-[#EF476F] gap-4 w-[50px] h-[50px] rounded-full bg-[#691432]" />
          </div>
          <div className="flex flex-col  items-start">
            <h2 className="text-[#FBC7D1] font-semibold text-lg">
              Delete Account
            </h2>
            <p className="text-[#FBC7D1]">Would like to delete account ? </p>
            <p className="text-[#FBC7D1]">
              This account contains paid courses deleting your account remove
              all contains associated with it
            </p>
            <button className="text-[#D43D63] cursor-pointer ">
              I want to delete my account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Setting;

import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const MyProfile = () => {
  const { loading: authLoading, user } = useSelector((state) => state.auth);
  const location = useLocation();
  if (authLoading) {
    return <div className=".loader"></div>;
  }
  console.log("user:", user);
  return (
    <div className=" h-[calc(100vh-3.6rem)] p-4">
      <div className="">
        <p>Home {location.pathname}</p>
        <h1 className="text-3xl font-semibold mt-2">My Profile</h1>
      </div>

      <div className="w-11/12 flex mx-auto justify-between items-center bg-[#161D29] p-4 mt-10">
        {/* profile left side */}
        <div className="flex gap-5 items-center">
          {/* img */}
          <div>
            <img
              className="w-15 rounded-full"
              src={user.image}
              alt="userImage"
            />
          </div>
          {/* name  */}
          <div>
            <h2>
              {user.firstName} {user.lastName}
            </h2>
            <p>{user.email}</p>
          </div>
        </div>
        {/* profile right side edit button */}
        <div>
          <button className="bg-amber-400 px-4 py-2 rounded-md">Edit</button>
        </div>
      </div>
      <div className="w-11/12 flex flex-col mx-auto bg-[#161D29] p-4 mt-4">
        <div className="flex justify-between items-center">
          <h2>Personal Details</h2>
          <button className="bg-amber-400 px-4 py-2 rounded-md">Edit</button>
        </div>
        <div className="flex justify-between items-center w-full mt-2">
          <div className="w-1/2">
            <h2>First Name</h2>
            <p>{user.firstName}</p>
          </div>
          <div className="w-1/2">
            <h2>Last Name</h2>
            <p>{user.lastName}</p>
          </div>
        </div>

        <div
          className="flex justify-between items-center mt-2
        "
        >
          <div className="w-1/2">
            <h2>Email</h2>
            <p>{user.email}</p>
          </div>
          <div className="w-1/2">
            <h2>Phone Number</h2>
            <p>{user.contactNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyProfile;

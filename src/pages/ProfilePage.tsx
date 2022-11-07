import { useContext } from "react";
import ProfileDetails from "../components/profile/ProfileDetails";
import SignIn from "../components/profile/SignIn";
import SignUp from "../components/profile/SignUp";
import { dataContext } from "../ContextProvider";

const ProfilePage = () => {
  const { user } = useContext(dataContext);
  return (
    <>
      {user === null ? (
        <>
          <SignIn />
          <SignUp />
        </>
      ) : (
        <ProfileDetails />
      )}
    </>
  );
};

export default ProfilePage;

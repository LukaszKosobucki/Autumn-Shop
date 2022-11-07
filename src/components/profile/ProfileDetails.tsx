import { signOut } from "firebase/auth";
import { useContext } from "react";
import { dataContext } from "../../ContextProvider";

const ProfileDetails = () => {
  const { auth } = useContext(dataContext);
  const onSignOut = () => {
    signOut(auth);
  };
  return (
    <>
      <div>Profile Details</div>
      <button onClick={onSignOut}>Sign Out</button>
    </>
  );
};

export default ProfileDetails;

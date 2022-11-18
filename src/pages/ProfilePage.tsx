import { Grid } from "@mui/material";
import { useContext } from "react";
import ProfileDetails from "../components/profile/ProfileDetails";
import SignIn from "../components/profile/SignIn";
import SignUp from "../components/profile/SignUp";
import { dataContext } from "../ContextProvider";
import { motion } from "framer-motion";
const ProfilePage = () => {
  const { user } = useContext(dataContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {user === null ? (
        <Grid
          sx={{
            flexDirection: "row",
          }}
        >
          <SignUp />
          <SignIn />
        </Grid>
      ) : (
        <ProfileDetails />
      )}
    </motion.div>
  );
};

export default ProfilePage;

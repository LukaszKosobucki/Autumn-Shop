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
      key="profilePage"
      transition={{ delay: 0.3, duration: 0.2 }}
      style={{
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
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

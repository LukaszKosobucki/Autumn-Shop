import { Button, Grid, Typography } from "@mui/material";
import { signOut } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { dataContext } from "../../ContextProvider";
import { formDataFinalizeForNotLoggedUsers } from "../../utils/formsUtils/formDataFinalizeForNotLoggedUsers";
import FinalizeFormInput from "../finalize/FinalizeFormInput";
import styles from "../../palette.module.scss";

const ProfileDetails = () => {
  const { auth, setIsLogged, userCredentials, user, firestore } =
    useContext(dataContext);
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const methods = useForm<FieldValues>();
  const onSignOut = () => {
    signOut(auth);
    setIsLogged("loggedOut");
  };

  const setUserCredentials = (deliveryInformation: FieldValues): void => {
    const userCol = collection(firestore, `users`);
    const docRef = doc(userCol, user?.uid);
    setDoc(docRef, deliveryInformation);
    setIsEditable(!isEditable);
  };

  return (
    <Grid>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(setUserCredentials)}>
          <Grid
            sx={{
              bgcolor: styles.colorAutumnLight100,
              minWidth: "26rem",
              p: "2.5rem",
            }}
          >
            <Typography variant="h2">Profile Details</Typography>

            {!isEditable
              ? Object.keys(userCredentials).map((key) => (
                  <Typography key={key}>
                    {key}: {userCredentials[key]}
                  </Typography>
                ))
              : formDataFinalizeForNotLoggedUsers.map((input) => (
                  <FinalizeFormInput key={input.name} input={input} />
                ))}
          </Grid>

          <Grid sx={{ flexDirection: "row" }}>
            {!isEditable ? (
              <Button color="primary" onClick={onSignOut}>
                Sign Out
              </Button>
            ) : (
              <Button color="primary" type="submit">
                Save Changes
              </Button>
            )}

            <Button color="primary" onClick={() => setIsEditable(!isEditable)}>
              Edit profile data
            </Button>
          </Grid>
        </form>
      </FormProvider>
    </Grid>
  );
};

export default ProfileDetails;

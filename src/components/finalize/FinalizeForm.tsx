import { Grid, Button, Typography } from "@mui/material";
import styles from "../../palette.module.scss";
import { formDataFinalizeForNotLoggedUsers } from "../../utils/formsUtils/formDataFinalizeForNotLoggedUsers";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "../../ContextProvider";
import FinalizeFormInput from "./FinalizeFormInput";
import { formDataFinalizeForLoggedUsers } from "../../utils/formsUtils/formDataFinalizeForLoggedUsers";

const FinalizeForm = () => {
  const { user } = useContext(dataContext);

  return (
    <Grid
      sx={{
        width: "100%",
        pb: "1rem",
      }}
    >
      {!user && (
        <Grid
          sx={{
            justifyContent: "space-around",
            flexDirection: "row",
            width: "100%",
            pb: "1rem",
          }}
        >
          <Button component={Link} to="/profile">
            <Typography color="primary" variant="caption">
              Register
            </Typography>
          </Button>
          <Button component={Link} to="/profile">
            <Typography color="primary" variant="caption">
              Login
            </Typography>
          </Button>
        </Grid>
      )}

      <Grid
        sx={{
          bgcolor: styles.colorAutumnLight100,
          minWidth: "26rem",
          p: "2.5rem",
        }}
      >
        {!user
          ? formDataFinalizeForNotLoggedUsers.map((input) => (
              <FinalizeFormInput key={input.name} input={input} />
            ))
          : formDataFinalizeForLoggedUsers.map((input) => (
              <FinalizeFormInput key={input.name} input={input} />
            ))}
      </Grid>
    </Grid>
  );
};

export default FinalizeForm;

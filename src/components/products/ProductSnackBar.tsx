import {
  Alert,
  Button,
  IconButton,
  Snackbar,
  Grid,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { dataContext } from "../../ContextProvider";
import { useContext } from "react";
import colors from "../../palette.module.scss";

const ProductSnackBar = ({ text }: { text: string }) => {
  const { open, setOpen } = useContext(dataContext);
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const action = (
    <Grid
      sx={{
        flexDirection: "row",
      }}
    >
      <Button size="small" onClick={handleClose} sx={{ m: 0, p: 0 }}>
        <Typography color="secondary" variant="button">
          UNDO
        </Typography>
      </Button>
      <IconButton
        placeholder="buttonCloseSnackBar"
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Grid>
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      message={text}
      action={action}
      onClose={handleClose}
    >
      <Alert
        action={action}
        severity="success"
        sx={{ width: "100%", bgcolor: colors.colorAutumnLight100 }}
      >
        {text}
      </Alert>
    </Snackbar>
  );
};

export default ProductSnackBar;

import { Alert, Button, IconButton, Snackbar } from "@mui/material";
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
    <>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
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

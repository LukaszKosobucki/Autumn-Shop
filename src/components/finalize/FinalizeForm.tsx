import { Box, Button, FormControl, Input, InputLabel } from "@mui/material";

const FinalizeForm = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flext-start",
        alignItems: "flex-start",
        position: "relative",
        flexDirection: "column",

        p: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "flex-start",
          position: "relative",
          flexDirection: "row",
          width: "100%",
          pb: 2,
        }}
      >
        <Button sx={{ color: "#3d405b", bgcolor: "#e0ddcb" }}>Register</Button>
        <Button sx={{ color: "#3d405b", bgcolor: "#e0ddcb" }}>Login</Button>
      </Box>

      <form>
        {" "}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flext-start",
            alignItems: "flex-start",
            position: "relative",
            flexDirection: "column",
            bgcolor: "#e0ddcb",
            p: 5,
          }}
        >
          <FormControl>
            <InputLabel htmlFor="Name">Name</InputLabel>
            <Input id="Name" aria-describedby="my-helper-text" />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="Surname">Surname</InputLabel>
            <Input id="Surname" aria-describedby="my-helper-text" />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="Email-address">Email address</InputLabel>
            <Input id="Email-address" aria-describedby="my-helper-text" />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="Zip-Code">Zip Code</InputLabel>
            <Input id="Zip-Code" />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="State">State</InputLabel>
            <Input id="State" />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="City">City</InputLabel>
            <Input id="City" />
          </FormControl>
        </Box>
      </form>
    </Box>
  );
};

export default FinalizeForm;

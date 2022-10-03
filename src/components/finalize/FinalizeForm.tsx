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
          <FormControl required>
            <InputLabel htmlFor="Name">Name</InputLabel>
            <Input id="Name" sx={{ mb: 1 }} />
          </FormControl>
          <FormControl required>
            <InputLabel htmlFor="Surname">Surname</InputLabel>
            <Input id="Surname" sx={{ mb: 1 }} />
          </FormControl>
          <FormControl required>
            <InputLabel htmlFor="Email-address">Email address</InputLabel>
            <Input id="Email-address" sx={{ mb: 1 }} />
          </FormControl>
          <FormControl required>
            <InputLabel htmlFor="Zip-Code">Zip Code</InputLabel>
            <Input id="Zip-Code" sx={{ mb: 1 }} />
          </FormControl>
          <FormControl required>
            <InputLabel htmlFor="State">State</InputLabel>
            <Input id="State" sx={{ mb: 1 }} />
          </FormControl>
          <FormControl required>
            <InputLabel htmlFor="City">City</InputLabel>
            <Input id="City" sx={{ mb: 1 }} />
          </FormControl>
        </Box>
      </form>
    </Box>
  );
};

export default FinalizeForm;

import { Box, Button, FormControl, Input, InputLabel } from "@mui/material";
const FinalizeForm = ({ register }: any) => {
  const formData = [
    "Name",
    "Surname",
    "Email",
    "Phone",
    "ZipCode",
    "State",
    "City",
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flext-start",
        alignItems: "flex-start",
        position: "relative",
        flexDirection: "column",
        width: "100%",
        pb: 2,
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

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flext-start",
          alignItems: "flex-start",
          position: "relative",
          flexDirection: "column",
          bgcolor: "#e0ddcb",
          minWidth: 320,
          p: 5,
        }}
      >
        {formData.map((text) => (
          <FormControl required>
            <InputLabel htmlFor={text}>{text}</InputLabel>
            <Input
              id={text}
              sx={{ mb: 1, minWidth: 300 }}
              {...register(text.toLowerCase())}
            />
          </FormControl>
        ))}
      </Box>
    </Box>
  );
};

export default FinalizeForm;

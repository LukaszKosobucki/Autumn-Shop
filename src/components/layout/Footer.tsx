import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        px: 10,
        py: 4,
        bgcolor: "#3d405b",
        color: "#cac7b5",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Box>
        <Box borderBottom={1}>
          <Typography variant="subtitle2">FAQ</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2">hello world</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2">hello world</Typography>
        </Box>
      </Box>
      <Box>
        <Box borderBottom={1}>
          <Typography variant="subtitle2">Contact</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2">hello world</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2">hello world</Typography>
        </Box>
      </Box>
      <Box>
        <Box borderBottom={1}>
          <Typography variant="subtitle2">About</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2">hello world</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2">hello world</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

import { Box } from "@mui/material";
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
          <p>hello world</p>
        </Box>
        <Box>
          <p>hello world</p>
        </Box>
        <Box>
          <p>hello world</p>
        </Box>
      </Box>
      <Box>
        <Box borderBottom={1}>
          <p>hello world</p>
        </Box>
        <Box>
          <p>hello world</p>
        </Box>
        <Box>
          <p>hello world</p>
        </Box>
      </Box>
      <Box>
        <Box borderBottom={1}>
          <p>hello world</p>
        </Box>
        <Box>
          <p>hello world</p>
        </Box>
        <Box>
          <p>hello world</p>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

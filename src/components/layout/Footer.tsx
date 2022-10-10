import { Box, Typography, Grid } from "@mui/material";
const Footer = () => {
  return (
    <Grid
      sx={{
        px: 10,
        py: 4,
        bgcolor: "#3d405b",
        justifyContent: "space-around",
        alignItems: "center",
        left: 0,
        bottom: 0,
        flexDirection: "row",
      }}
    >
      <Box>
        <Box sx={{ borderBottom: "1px solid #f4f1de" }}>
          <Typography variant="caption" color="secondary">
            FAQ
          </Typography>
        </Box>
        <Box>
          <Typography variant="caption" color="secondary">
            hello world
          </Typography>
        </Box>
        <Box>
          <Typography variant="caption" color="secondary">
            hello world
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box sx={{ borderBottom: "1px solid #f4f1de" }}>
          <Typography variant="caption" color="secondary">
            Contact
          </Typography>
        </Box>
        <Box>
          <Typography variant="caption" color="secondary">
            hello world
          </Typography>
        </Box>
        <Box>
          <Typography variant="caption" color="secondary">
            hello world
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box sx={{ borderBottom: "1px solid #f4f1de" }}>
          <Typography variant="caption" color="secondary">
            About
          </Typography>
        </Box>
        <Box>
          <Typography variant="caption" color="secondary">
            hello world
          </Typography>
        </Box>
        <Box>
          <Typography variant="caption" color="secondary">
            hello world
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default Footer;

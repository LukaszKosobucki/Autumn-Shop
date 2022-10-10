import { Box, Typography, Grid } from "@mui/material";
import colors from "../../palette.module.scss";

const Footer = () => {
  return (
    <Grid
      sx={{
        px: "5rem",
        py: "2rem",
        bgcolor: colors.colorAutumnDuskAutumnDusk,
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

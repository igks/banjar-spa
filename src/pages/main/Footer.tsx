import { Box, Typography } from "@mui/material";
import { palettes } from "../../utils/theme";

const Footer = () => {
  return (
    <Box sx={{ padding: 2, backgroundColor: palettes.primary.light }}>
      <Typography
        variant="body1"
        component="div"
        sx={{
          flexGrow: 1,
          textAlign: "center",
          fontWeight: "bold",
          color: palettes.common.white,
        }}
      >
        &copy; 2021
      </Typography>
    </Box>
  );
};

export default Footer;

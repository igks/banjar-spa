import { Box, Typography } from "@mui/material";
import { palettes } from "../../constants/theme";

const Footer = () => {
  return (
    <Box
      sx={{ padding: 2, backgroundColor: palettes.primary.light, zIndex: 9999 }}
    >
      <Typography
        variant="body1"
        component="div"
        sx={{
          flexGrow: 1,
          textAlign: "right",
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

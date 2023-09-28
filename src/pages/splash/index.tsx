import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constants/path";
import { Box, Typography } from "@mui/material";
import OmKara from "../../assets/images/om-kara.png";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(PATH.home);
    }, 3000);
  }, [navigate]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <img style={{ width: "70%" }} src={OmKara} alt="Om Kara" />
      <Box sx={{ height: 30 }} />
      <Typography variant="h6">Om Swastyastu Semeton</Typography>
    </Box>
  );
};

export default Splash;

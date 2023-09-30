import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constants/path";
import { Box, Grow, Slide, Typography } from "@mui/material";
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
        overflow: "hidden",
      }}
    >
      <Grow in={true} timeout={1500}>
        <img style={{ width: "70%" }} src={OmKara} alt="Om Kara" />
      </Grow>
      <Box sx={{ height: 30 }} />
      <Slide in={true} direction="up" timeout={1000}>
        <Typography variant="h6">Om Swastyastu Semeton</Typography>
      </Slide>
    </Box>
  );
};

export default Splash;

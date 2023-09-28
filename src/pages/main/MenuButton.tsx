import { Grid, Box, Typography } from "@mui/material";
import { palettes } from "../../constants/theme";
import { ReactNode } from "react";

export type MenuButtonProps = {
  icon: ReactNode;
  caption: string;
  onClick: () => void;
};

const MenuButton = ({ icon, caption, onClick }: MenuButtonProps) => {
  return (
    <Grid item xs={6}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="div"
          sx={{
            width: 60,
            height: 60,
            backgroundColor: palettes.primary.light,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 30,
            color: palettes.common.white,
            marginBottom: 1,
          }}
          onClick={onClick}
        >
          {icon}
        </Box>
        <Typography variant="caption" sx={{ fontSize: 14, fontWeight: 600 }}>
          {caption}
        </Typography>
      </Box>
    </Grid>
  );
};

export default MenuButton;

import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

const Center = ({ children }: PropsWithChildren) => {
  return (
    <Box
      component="div"
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
};

export default Center;

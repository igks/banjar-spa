import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import { palettes } from "../../utils/theme";

const Body = ({ children }: PropsWithChildren) => {
  return (
    <Box
      component="div"
      sx={{
        padding: 1,
        flexGrow: 1,
        overflowY: "auto",
        backgroundColor: palettes.grey[200],
      }}
    >
      {children}
    </Box>
  );
};

export default Body;

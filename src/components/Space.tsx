import { spacing } from "../constants/theme";
import Box from "@mui/material/Box";

type SpaceProps = {
  h?: number;
  w?: number;
};

const Space = ({ h = 0, w = 0 }: SpaceProps) => {
  return <Box sx={{ height: spacing(h), width: spacing(w) }} />;
};
export default Space;

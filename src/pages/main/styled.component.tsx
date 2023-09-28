import styled from "styled-components";
import { Drawer } from "@mui/material";
import { spacing } from "../../constants/theme";

export const StyledDrawer = styled(Drawer)`
  > div:nth-child(3) {
    border-top-left-radius: ${spacing(2)};
    border-top-right-radius: ${spacing(2)};
    padding: ${spacing(3)};
  }
`;

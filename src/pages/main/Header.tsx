import {
  AppBar,
  Box,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import {
  Menu,
  Login,
  Close,
  Group,
  PriceCheck,
  ReceiptLong,
  Home,
} from "@mui/icons-material";
import { useState } from "react";
import { StyledDrawer } from "./styled.component";
import MenuButton, { MenuButtonProps } from "./MenuButton";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const menu: MenuButtonProps[] = [
    {
      icon: <Home sx={{ fontSize: 32 }} />,
      caption: "Home",
      onClick: () => {},
    },
    {
      icon: <Group sx={{ fontSize: 32 }} />,
      caption: "Anggota",
      onClick: () => {},
    },
    {
      icon: <PriceCheck sx={{ fontSize: 32 }} />,
      caption: "Pembayaran",
      onClick: () => {},
    },
    {
      icon: <ReceiptLong sx={{ fontSize: 32 }} />,
      caption: "Pembayaran",
      onClick: () => {},
    },
  ];

  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setOpenDrawer(true)}
            >
              {openDrawer ? <Close /> : <Menu />}
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Banjar Batu Aji Barat
            </Typography>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setOpenDrawer(true)}
            >
              <Login />
            </IconButton>
          </Toolbar>
        </AppBar>

        <StyledDrawer
          anchor="bottom"
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
        >
          <Box
            sx={{
              minHeight: "30vh",
            }}
          >
            <Box>
              <Grid container rowSpacing={2}>
                {menu.map((menu) => (
                  <MenuButton
                    icon={menu.icon}
                    caption={menu.caption}
                    onClick={menu.onClick}
                  />
                ))}
              </Grid>
            </Box>
          </Box>
        </StyledDrawer>
      </Box>
    </>
  );
};

export default Header;

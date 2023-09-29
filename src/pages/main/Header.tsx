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
  Logout,
} from "@mui/icons-material";
import { useState } from "react";
import { StyledDrawer } from "./styled.component";
import MenuButton, { MenuButtonProps } from "./MenuButton";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constants/path";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../states/store";
import { logout } from "../../states/slices/authentication";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state: AppState) => state.auth);
  const [openDrawer, setOpenDrawer] = useState(false);

  const hideDrawer = () => {
    setOpenDrawer(false);
  };

  const menu: MenuButtonProps[] = [
    {
      icon: <Home sx={{ fontSize: 32 }} />,
      caption: "Home",
      onClick: () => {
        hideDrawer();
        navigate(PATH.home);
      },
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
      caption: "Transaksi",
      onClick: () => {},
    },
  ];

  const loginClickHandler = () => {
    navigate(PATH.login);
  };

  const logoutClickHandler = () => {
    dispatch(logout());
  };

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
              onClick={
                !isAuthenticated ? loginClickHandler : logoutClickHandler
              }
            >
              {!isAuthenticated ? <Login /> : <Logout />}
            </IconButton>
          </Toolbar>
        </AppBar>

        <StyledDrawer anchor="bottom" open={openDrawer} onClose={hideDrawer}>
          <Box
            sx={{
              minHeight: "30vh",
            }}
          >
            <Box>
              <Grid container rowSpacing={2}>
                {menu.map((menu) => (
                  <MenuButton
                    key={menu.caption}
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

import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import { useState } from "react";
import { StyledDrawer } from "./styled.component";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

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
              <MenuIcon />
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
              <LoginIcon />
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
              minHeight: "40vh",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis cumque voluptates amet quae. Aliquam, nisi recusandae
            enim nobis unde aperiam magni dolorum reprehenderit omnis, amet
            explicabo culpa, laudantium id natus?
          </Box>
        </StyledDrawer>
      </Box>
    </>
  );
};

export default Header;

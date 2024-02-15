import { Badge, Divider, IconButton, Toolbar, Typography } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import SideDrawer from "./SideDrawer";

const Header = () => {
  return (
    <>
      <Toolbar>
        <SideDrawer>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        </SideDrawer>
        <Typography style={{ flexGrow: 1 }}>Blogging Website</Typography>
        <IconButton color="inherit">
          <Badge color="secondary" badgeContent={9}>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <Toolbar
        style={{
          textTransform: "uppercase",
          fontSize: 20,
          justifyContent: "center",
          //   fontFamily: "Montserrat",
        }}
      >
        Express your emotion through words
      </Toolbar>
    </>
  );
};

export default Header;

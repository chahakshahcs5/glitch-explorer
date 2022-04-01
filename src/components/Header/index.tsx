import {
  AppBar,
  Button,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import "./header.modules.css";

const Header = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const history = useHistory();

  const closeDrawer = () => (event: any) => {
    if (
      event.type === "keydown" ||
      event.key === "Tab" ||
      event.key === "Shift"
    ) {
      return;
    }
    setShowSideBar(false);
  };

  return (
    <CssBaseline>
      <AppBar position="static" color="secondary">
        <div>
          <Drawer anchor="left" open={showSideBar} onClose={closeDrawer()}>
            <div
              className="list"
              role="presentation"
              onClick={closeDrawer()}
              onKeyDown={closeDrawer()}
            ></div>
          </Drawer>
        </div>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setShowSideBar(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Glitch Explorer
          </Typography>
          <Button
            color="inherit"
            onClick={() => history.push("./projects")}
            style={{ marginRight: "20px" }}
          >
            Projects
          </Button>
          <Button
            color="inherit"
            onClick={() => history.push("./collections")}
            style={{ marginRight: "20px" }}
          >
            Collections
          </Button>
          <Button
            color="inherit"
            onClick={() => history.push("./teams")}
            style={{ marginRight: "50px" }}
          >
            Teams
          </Button>
        </Toolbar>
      </AppBar>
    </CssBaseline>
  );
};

export default Header;

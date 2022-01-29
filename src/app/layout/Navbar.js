import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MaterialUISwitch from "../components/MaterialUISwitch";
import {  FormControlLabel, Grid } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";


const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    })
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const primaryLink = [
  { title: "Home", path: "/home" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Projects", path: "/projects" },
];


const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end"
}));

export default function Navbar(props) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  // changing the text from dark to light and vice versa
  const [modeLabel, setmodeLabel] = useState(true);
  const labelState = modeLabel ? {mode: 'Light Mode'} : {mode: 'Dark Mode'};
   function handleChange(){
     setmodeLabel(!modeLabel);
 
   }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      
      <AppBar
        position="fixed"
        open={open}
        sx={{ flexGrow: 1, bgcolor: "#003333", textDecoration: "none" }}
      >
      
        <Toolbar>
       
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Grid container>
            <Typography variant="h6" noWrap to="/" component={Link} sx={{textDecoration: "none", color: 'inherit'}}>
              Cecil
            </Typography>
            </Grid>
            <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
            <List sx={{ display: "flex" }}>
              {primaryLink.map(({ title, path }) => (
                <ListItem
                  key={path}
                  sx={{ color: "inherit", typography: "h7" }}
                  to={path}
                  component={Link}
                >
                  {title.charAt(0).toUpperCase() + title.slice(1)}
                </ListItem>
              ))}
            </List>
        </Grid>
        <Grid container justifyContent="flex-end" >
          <FormControlLabel
            control={<MaterialUISwitch sx={{ m: 1 }} checked={props.darkMode}  onChange={props.handleThemeChange}/>}
            label={labelState.mode}
            onClick={handleChange}
           />
        </Grid>
        </Toolbar>
        
      </AppBar>
      
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box"
          }
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {primaryLink.map((path, index) => (
            <ListItem button key={index} to={path.path} component={Link} >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={path.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}

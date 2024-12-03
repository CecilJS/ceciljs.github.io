import React, {useState, useEffect} from 'react';
import { styled, useTheme } from "@mui/material/styles";
import {AppBar} from "../components/AppBar";
import {Main} from "../components/Main";
import { drawerWidth } from "../components/Main";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MaterialUISwitch from "../components/MaterialUISwitch";
import {  FormControlLabel, Grid } from "@mui/material";
import { Link } from "react-router-dom";






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
    const [innerWidth, setInnerWidth] = useState({ width: window.innerWidth});

    // changing the text from dark to light and vice versa
    const [modeLabel, setmodeLabel] = useState(true);
    const labelState = modeLabel ? {mode: 'Dark Mode'} : {mode: 'Light Mode'};
    function handleChange(){
        setmodeLabel(!modeLabel);

    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    // Listening to the window size and changing the state of the navbar
    useEffect(() => {
        function handleResize() {
            setInnerWidth({
                width: window.innerWidth
            })
        }
        window.addEventListener('resize', handleResize);
        return _ => {window.removeEventListener('resize', handleResize)};
    })

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />

            <AppBar
                position="fixed"
                open={open}
                sx={{ flexGrow: 1, bgcolor: "#CAA85B", textDecoration: "none" }}
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
                        { // implementing the useEffect hook to hide the navitems on mobile
                            (innerWidth.width < 800) ? null : (
                                <List sx={{ display: "flex" }}>
                                    {primaryLink.map(({ title, path }) => (
                                        <ListItem
                                            key={path}
                                            sx={{ color: "inherit", typography: "h7" }}
                                            to={path}
                                            component={Link}
                                            onClick={handleDrawerClose}
                                        >
                                            {title.charAt(0).toUpperCase() + title.slice(1)}
                                        </ListItem>
                                    ))}
                                </List>
                            )
                        }

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
                        <ListItem button key={index} to={path.path} component={Link} onClick={handleDrawerClose} >
                            <ListItemIcon>
                                {path.title === "Home" ? <HomeIcon /> : path.title === "About" ? <PersonIcon /> : path.title === "Projects" ? <WorkIcon /> : <MailIcon />}
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
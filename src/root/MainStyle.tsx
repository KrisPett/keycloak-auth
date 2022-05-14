import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import React, {useState} from "react";
import {Outlet} from "react-router-dom";
import {Box} from "@mui/system";
import {Grid} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Footer from "./components/Footer";

export default function MainStyle() {
    const [isOpen, setIsOpen] = useState(false);
    const drawerWidth = 250

    return (
        <Box sx={{display: 'flex'}}>
            <Header onMenuClick={() => setIsOpen(!isOpen)}/>
            <SideMenu isOpen={isOpen} onClose={() => setIsOpen(false)}/>
            <Box sx={{flexGrow: 1, p: 3, width: {xs: `calc(100% - ${drawerWidth}px)`}}}>
                <Grid visibility={"hidden"}><Toolbar/></Grid>
                <Box sx={{minHeight: "100vh"}}>
                    <Outlet/>
                </Box>
                <Footer/>
            </Box>
        </Box>
    );
}
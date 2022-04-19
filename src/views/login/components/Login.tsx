import React from 'react';
import {Button, Grid} from "@mui/material";
import {useKeycloak} from "@react-keycloak/web";
import {Navigate} from "react-router-dom";
import {LinkToDashboardOverviewView, LinkToOverviewView} from "../../../routes/MainRoutes";

const Login = () => {
    const {keycloak, initialized} = useKeycloak();

    return (
        <Grid container justifyContent={"center"} marginTop={15}>
            <Button
                onClick={() => keycloak.login().success(() => <Navigate to={LinkToDashboardOverviewView()} replace/>)}>
                Keycloak Login
            </Button>
        </Grid>
    );
};

export default Login;
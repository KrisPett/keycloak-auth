import React from 'react';
import {Button, CircularProgress, Grid} from "@mui/material";
import {useKeycloak} from "@react-keycloak/web";
import {Navigate} from "react-router-dom";
import {LinkToOverviewView} from "../../../routes/MainRoutes";
import SecuringProgress from "../../../utils/SecuringProgress";

const Login = () => {
    const {keycloak, initialized} = useKeycloak();

    return (
        <Grid container justifyContent={"center"} marginTop={15}>
            {initialized ? <>
                <Button
                    onClick={() => keycloak.login().success(() => <Navigate to={LinkToOverviewView()} replace/>)}>
                    Keycloak Login
                </Button>
            </> : <><SecuringProgress/></>
            }
        </Grid>
    );
};

export default Login;
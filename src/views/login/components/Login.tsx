import React from 'react';
import {Button, Grid} from "@mui/material";

const Login = () => {
    return (
        <Grid container justifyContent={"center"} marginTop={15}>
            <Button>Keycloak</Button>
            <Button>KeycloakTest</Button>
            <Button>Keycloak</Button>
        </Grid>
    );
};

export default Login;
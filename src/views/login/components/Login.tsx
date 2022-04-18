import React from 'react';
import {Button, Grid} from "@mui/material";
import {useKeycloak} from "@react-keycloak/web";

const Login = () => {
    const { keycloak } = useKeycloak();

    return (
        <Grid container justifyContent={"center"} marginTop={15}>
            <Button onClick={() => keycloak.login()}>Keycloak Login</Button>
        </Grid>
    );
};

export default Login;
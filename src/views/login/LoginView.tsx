import React from 'react';
import Page from "../../root/components/Page";
import {Container} from "@mui/material";
import Login from "./components/Login";

const LoginView = () => {
    return (
        <Page title={"ChainQT3"}>
            <Container>
                <Login/>
            </Container>
        </Page>
    );
};

export default LoginView;
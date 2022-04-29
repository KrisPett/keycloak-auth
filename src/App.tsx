import React from 'react';
import {Container, CssBaseline, ThemeProvider} from "@mui/material";
import MainRoutes from './routes/MainRoutes';
import {RootModelProvider} from "./root/RootModelContext";
import mainTheme from "./assets/themes/mainTheme";
import {ReactKeycloakProvider, useKeycloak} from "@react-keycloak/web";
import {BrowserRouter} from "react-router-dom";
import {keycloak} from "./keycloak";


function App() {

    return (
        <ReactKeycloakProvider authClient={keycloak}>
            <ThemeProvider theme={mainTheme}>
                    <RootModelProvider>
                        <BrowserRouter>
                            <Container>
                                <CssBaseline/>
                                <MainRoutes/>
                            </Container>
                        </BrowserRouter>
                    </RootModelProvider>
            </ThemeProvider>
        </ReactKeycloakProvider>
    );
}

export default App;

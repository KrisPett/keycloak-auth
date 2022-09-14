import React from 'react';
import {ThemeProvider} from "@mui/material";
import mainTheme from "./assets/themes/mainTheme";
import {ReactKeycloakProvider} from "@react-keycloak/web";
import {keycloak} from "./keycloak";
import Root from "./root/Root";

function App() {

    return (
        // <ReactKeycloakProvider authClient={keycloak}>
            <ThemeProvider theme={mainTheme}>
                <Root/>
            </ThemeProvider>
        // </ReactKeycloakProvider>
    );
}

export default App;

import React from 'react';
import {Container, CssBaseline, ThemeProvider} from "@mui/material";
import MainRoutes from './routes/MainRoutes';
import {RootModelProvider} from "./root/RootModelContext";
import mainTheme from "./assets/themes/mainTheme";
import {ReactKeycloakProvider} from "@react-keycloak/web";
import keycloak from "./keycloak"

function App() {
  return (
      <ReactKeycloakProvider authClient={keycloak}>
          <ThemeProvider theme={mainTheme}>
              <RootModelProvider>
                  <Container>
                      <CssBaseline/>
                      <MainRoutes/>
                  </Container>
              </RootModelProvider>
          </ThemeProvider>
      </ReactKeycloakProvider>

  );
}

export default App;

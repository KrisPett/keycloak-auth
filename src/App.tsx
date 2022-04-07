import React from 'react';
import {Container, CssBaseline, ThemeProvider} from "@mui/material";
import MainRoutes from './routes/MainRoutes';
import {RootModelProvider} from "./root/RootModelContext";
import mainTheme from "./assets/themes/mainTheme";

function App() {
  return (
      <ThemeProvider theme={mainTheme}>
        <RootModelProvider>
          <Container>
            <CssBaseline/>
            <MainRoutes/>
          </Container>
        </RootModelProvider>
      </ThemeProvider>
  );
}

export default App;

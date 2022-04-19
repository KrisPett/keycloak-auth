import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserService from "./services/UserService";
import HttpService from "./services/HttpService";

ReactDOM.render(<React.StrictMode><App/></React.StrictMode>, document.getElementById("root"));
/*
UserService.initKeycloak(renderApp);*/
HttpService.configure();

reportWebVitals();

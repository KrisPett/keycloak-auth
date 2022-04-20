import React from 'react';
import Logistics from "./components/Logistics";
import Page from "../../root/components/Page";
import {Container} from "@mui/material";

const LogisticsView = () => {
    return (
        <Page title={"ChainQT3"}>
            <Container>
                <Logistics/>
            </Container>
        </Page>
    );
};

export default LogisticsView;
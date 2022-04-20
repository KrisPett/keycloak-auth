import React from 'react';
import Analytics from "./components/Analytics";
import Page from "../../root/components/Page";
import {Container} from "@mui/material";

const AnalyticsView = () => {
    return (
        <Page title={"Analytics"}>
            <Container>
                <Analytics/>
            </Container>
        </Page>
    );
};

export default AnalyticsView;
import React from 'react';
import Finance from "./components/Finance";
import Page from "../../root/components/Page";
import {Container} from "@mui/material";

const FinanceView = () => {
    return (
        <Page title={"Finance"}>
            <Container>
                <Finance/>
            </Container>
        </Page>
    );
};

export default FinanceView;
import React from 'react';
import Dashboard from "./components/Dashboard";
import {DashboardViewProvider} from "./DashboardViewContext";
import Page from "../../root/components/Page";

const DashboardView = () => {

    return (
        <Page title={"Dashboard | ChainQT3"}>
            <DashboardViewProvider>
                <Dashboard/>
            </DashboardViewProvider>
        </Page>
    )
};

export default DashboardView;
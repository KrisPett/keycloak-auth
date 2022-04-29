import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import ProfileView from "../views/profile/ProfileView";
import DashboardView from "../views/dashboard/DashboardView";
import MainStyle from "../root/MainStyle";
import LoginStyle from "../root/LoginStyle";
import Page404NotFound from "../utils/Page404NotFound";
import ProtectedRoute from "./ProtectedRoute";
import LoginView from "../views/login/LoginView";
import {useKeycloak} from "@react-keycloak/web";
import RenderOnAuthenticated from "../utils/RenderOnAuthenticated";
import FinanceView from "../views/finance/FinanceView";
import LogisticsView from "../views/logistics/LogisticsView";
import Analytics from "../views/analytics/components/Analytics";
import {RolesRoute} from "./RolesRoute";
import {CircularProgress, Typography} from "@mui/material";


/* ROUTE LINKS */
export const LinkToOverviewView = () => "/dashboard/overview";
export const LinkToProfileView = () => "/dashboard/profile";
export const LinkToLoginView = () => "/login";
export const LinkToAnalyticsView = () => "/dashboard/analytics";
export const LinkToFinanceView = () => "/dashboard/finance";
export const LinkToLogisticsView = () => "/dashboard/logistics";
export const LinkTo404NotFound = () => "404";
/* ROUTE LINKS */

export default function MainRouter() {
    const {keycloak, initialized} = useKeycloak();

    return (
        <Routes>
            <Route path={"dashboard"} element={
                <ProtectedRoute><RenderOnAuthenticated><MainStyle/></RenderOnAuthenticated></ProtectedRoute>}>
                <Route path={LinkToOverviewView()} element={<DashboardView/>}/>
                <Route path={LinkToAnalyticsView()} element={<Analytics/>}/>
                <Route path={LinkToFinanceView()} element={<RolesRoute roles={["user"]}><FinanceView/></RolesRoute>}/>
                <Route path={LinkToLogisticsView()} element={<RolesRoute roles={["employee"]}><LogisticsView/></RolesRoute>}/>
                <Route path={LinkToProfileView()} element={<ProfileView/>}/>
            </Route>
            <Route path={"/"} element={<LoginStyle/>}>
                <Route path={LinkToLoginView()} element={!keycloak.authenticated ? <LoginView/> : <Navigate to={LinkToOverviewView()} replace/>}/>
                <Route path={LinkTo404NotFound()} element={<Page404NotFound/>}/>
                <Route path="/" element={<Navigate to={LinkToLoginView()}/>}/>
                <Route path="*" element={<Navigate to={LinkTo404NotFound()}/>}/>
            </Route>
        </Routes>
    )
}

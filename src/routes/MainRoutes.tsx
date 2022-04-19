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
import RenderOnAnonymous from "../utils/RenderOnAnonymous";

/* ROUTE LINKS */
export const LinkToDashboardOverviewView = () => "/dashboard/overview";
export const LinkToOverviewView = () => "overview";
export const LinkToProfileView = () => "profile";
export const LinkToLoginView = () => "/login";
export const LinkTo404NotFound = () => "404";
/* ROUTE LINKS */

export default function MainRouter() {
    const {keycloak} = useKeycloak();

    return (
        <Routes>
            <Route path="/dashboard"
                   element={
                       <ProtectedRoute>
                           <RenderOnAuthenticated>
                               <MainStyle/>
                           </RenderOnAuthenticated>
                       </ProtectedRoute>}>
                <Route path={LinkToOverviewView()} element={<DashboardView/>}/>
                <Route path={LinkToProfileView()} element={<ProfileView/>}/>
                <Route path="/dashboard" element={<Navigate to={LinkToOverviewView()}/>}/>
            </Route>
            <Route path={"/"} element={<LoginStyle/>}>
                <Route path={LinkToLoginView()}
                       element={!keycloak.authenticated ?
                           <LoginView/> : <Navigate to={LinkToDashboardOverviewView()} replace/>}
                />
                <Route path={LinkTo404NotFound()} element={<Page404NotFound/>}/>
                <Route path="/" element={<Navigate to={LinkToLoginView()}/>}/>
                <Route path="*" element={<Navigate to={LinkTo404NotFound()}/>}/>
            </Route>
        </Routes>
    )
}

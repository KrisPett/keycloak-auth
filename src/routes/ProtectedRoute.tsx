import {Navigate,} from 'react-router-dom';
import {useKeycloak} from "@react-keycloak/web";
import {LinkTo404NotFound} from "./MainRoutes";
import React from "react";

type Props = {
    children: JSX.Element
}

export default function ProtectedRoute({children}: Props) {
    const {keycloak, initialized} = useKeycloak();

    if (!keycloak.authenticated) {
        return <Navigate to={initialized ? LinkTo404NotFound() : "/"}/>
    }

    return children;
};
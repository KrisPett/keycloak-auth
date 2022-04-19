import * as React from "react";
import {useKeycloak} from "@react-keycloak/web";

interface Props {
    children: any
}

export default function RenderOnAuthenticated({children}: Props) {
    const {keycloak} = useKeycloak();
    return  keycloak.authenticated ? children : null;
};
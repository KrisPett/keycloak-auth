import * as React from "react";
import {useKeycloak} from "@react-keycloak/web";

type Props = {
    children: any
}

export default function RenderOnAnonymous({children}: Props) {
    const {keycloak} = useKeycloak();
    return !keycloak.authenticated ? children : null;
};
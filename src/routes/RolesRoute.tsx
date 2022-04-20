import {Navigate, Route, useLocation} from 'react-router-dom';
import {useKeycloak} from "@react-keycloak/web";
import Page404NotFound from "../utils/Page404NotFound";
import {Container, Typography} from "@mui/material";
import {LinkTo404NotFound} from "./MainRoutes";

type Props = {
    children: JSX.Element,
    roles: string[]
}

export function RolesRoute({children, roles}: Props) {
    const {keycloak, initialized} = useKeycloak();
    let location = useLocation();

    const hasRole = (roles: string[]) => roles.some(role => keycloak.hasResourceRole(role));

    if (!hasRole(roles)){
        return <Navigate to={LinkTo404NotFound()} replace/>
    }

    return (
        <Container>
            {children}
        </Container>
    )
};
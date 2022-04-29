import {Navigate} from 'react-router-dom';
import {useKeycloak} from "@react-keycloak/web";
import {Container} from "@mui/material";
import {LinkTo404NotFound} from "./MainRoutes";

type Props = {
    children: JSX.Element,
    roles: string[]
}

export function RolesRoute({children, roles}: Props) {
    const {keycloak, initialized} = useKeycloak();

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
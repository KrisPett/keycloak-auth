import {Navigate,} from 'react-router-dom';
import {useKeycloak} from "@react-keycloak/web";

type Props = {
    children: JSX.Element
}

export default function ProtectedRoute({children}: Props) {
    const {keycloak} = useKeycloak();

    if (!keycloak.authenticated) {
        return <Navigate to="/" replace/>;
    }

    return children;
};
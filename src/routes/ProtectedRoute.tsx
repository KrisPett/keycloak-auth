import {Navigate,} from 'react-router-dom';

type Props = {
    children: JSX.Element
}

export default function ProtectedRoute({children}: Props) {
/*
    const {isAuthenticated} = useMoralis();
*/

 /*   if (!isAuthenticated) {
        return <Navigate to="/" replace/>;
    }*/

    return children;
};
import { Navigate } from "react-router-dom";
interface SecureRouteProps {
    children: JSX.Element,
    isLogged: boolean
}
const SecureRoute = (props: SecureRouteProps) => {
    return props.isLogged ? (props.children) : <Navigate to="/" replace />;
};

export default SecureRoute;
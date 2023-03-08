import { AuthContext } from "context/Auth.Context";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
interface SecureRouteProps {
    children: JSX.Element
}
const SecureRoute = (props: SecureRouteProps) => {
    const { logged } = useContext(AuthContext);
    return logged ? (props.children) : <Navigate to="/" replace />;
};

export default SecureRoute;
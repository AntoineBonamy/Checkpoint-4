import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
        return children
    }
        return <Navigate to="/" />
}

export default Protected;

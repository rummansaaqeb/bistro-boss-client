import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = () => {
    const [user, loading] = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();

    const location = useLocation();

    if (loading || isAdminLoading) {
        return <span className="loading loading-spinner loading-lg text-center mt-[50%]"></span>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/login' state={{from: location}}></Navigate>
};

export default AdminRoute;
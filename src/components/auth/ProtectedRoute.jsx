import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AdminContext } from "../../context/AdminContext";

export function ProtectedRoute({ children }) {
  const { admin, loading } = useContext(AdminContext);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!admin) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}

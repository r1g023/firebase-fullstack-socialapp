import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

interface IProtectedRoutesProps {
  auth: boolean;
}

const ProtectedRoutes: React.FC<IProtectedRoutesProps> = ({ auth }) => {
  const location = useLocation();
  return (
    <div>
      {auth ? <Outlet /> : <Navigate to="/login" state={{ from: location }} />}
    </div>
  );
};

export default ProtectedRoutes;

import React from "react";

interface IProtectedRoutesProps {
  isAuthenticated: boolean;
}

const ProtectedRoutes: React.FC<IProtectedRoutesProps> = ({
  isAuthenticated
}) => {
  return (
    <div>
      {isAuthenticated ? <h1>Protected Routes</h1> : <h1>Access Denied</h1>}
    </div>
  );
};

export default ProtectedRoutes;

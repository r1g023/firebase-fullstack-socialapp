import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const PublicRoute: React.FC = () => {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  if (loading) return <div>Loading...</div>;

  if (user) {
    return <Navigate to="/" replace />; // Redirect to homepage or dashboard
  }

  return <Outlet />;
};

export default PublicRoute;

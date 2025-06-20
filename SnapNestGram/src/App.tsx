import * as React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { UserAuthProvider, useUserAuth } from "./context/userAuthContext";

const LogoutButton: React.FC = () => {
  const { logOut } = useUserAuth();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="fixed top-4 right-4 z-50 rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700">
      Logout
    </button>
  );
};

const App: React.FC = () => {
  return (
    <UserAuthProvider>
      <div className="min-h-screen bg-dark-navy text-foreground relative">
        <LogoutButton />
        <RouterProvider router={router} />
      </div>
    </UserAuthProvider>
  );
};

export default App;

import * as React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { UserAuthProvider, useUserAuth } from "./context/userAuthContext";

// Create a simple logger component
const AuthLogger = () => {
  const { user } = useUserAuth();

  React.useEffect(() => {
    console.log("Auth state changed:", user ? "Logged in" : "Logged out");
    if (user) {
      console.log("User details:", {
        email: user.email,
        uid: user.uid,
        provider: user.providerData[0]?.providerId
      });
    }
  }, [user]);

  return null; // This component doesn't render anything
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-navy text-foreground">
      <UserAuthProvider>
        <AuthLogger /> {/* Add this line */}
        <RouterProvider router={router} />
      </UserAuthProvider>
    </div>
  );
};

export default App;

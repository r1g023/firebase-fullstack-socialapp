import * as React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { UserAuthProvider } from "./context/userAuthContext";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-navy text-foreground">
      <UserAuthProvider>
        <RouterProvider router={router} />
      </UserAuthProvider>
    </div>
  );
};

export default App;

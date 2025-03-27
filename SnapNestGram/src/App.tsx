import * as React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { UserAuthProvider } from "./context/userAuthContext";

const App: React.FC = () => {
  return (
    <div
      style={{
        border: "1px solid blue",
        padding: "20px",
        width: "1690px"
      }}>
      <UserAuthProvider>
        <RouterProvider router={router} />
      </UserAuthProvider>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import "./App.css";
import router from "./routes";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      <Button onClick={() => setCount(count - 1)}>Decrement</Button>
      <Calendar />

      {/* RouterProvider should wrap your routes and page elements */}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

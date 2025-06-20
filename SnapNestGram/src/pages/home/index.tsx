import React from "react";

interface IHomeProps {
  name: string;
}

const Home: React.FC<IHomeProps> = ({ name }) => {
  return (
    <div style={{ color: "black", backgroundColor: "white", padding: "20px" }}>
      <h1>Hello {name}!</h1>
    </div>
  );
};

export default Home;

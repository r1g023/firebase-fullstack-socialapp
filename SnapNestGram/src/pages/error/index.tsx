import React from "react";

interface IErrorProps {
  message: string;
}

const Error: React.FC<IErrorProps> = ({ message }) => {
  return (
    <div>
      <h1>Error: {message}</h1>
    </div>
  );
};

export default Error;

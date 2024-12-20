import React from "react";

interface ILoginProps {
  email: string;
  password: string;
}

const Login: React.FC<ILoginProps> = ({ email, password }) => {
  return (
    <div>
      <h1>Login</h1>
      <h1>{email}</h1>
      <h2>{password}</h2>
    </div>
  );
};

export default Login;

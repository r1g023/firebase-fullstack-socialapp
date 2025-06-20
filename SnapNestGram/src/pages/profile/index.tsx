import React from "react";

interface IProfileProps {
  name: string;
  email: string;
  bio: string;
}

const Profile: React.FC<IProfileProps> = ({ name, email, bio }) => {
  return (
    <div style={{ color: "black", backgroundColor: "white", padding: "20px" }}>
      <h1>Profile</h1>
      <h1>{name}</h1>
      <h2>{email}</h2>
      <p>{bio}</p>
    </div>
  );
};

export default Profile;

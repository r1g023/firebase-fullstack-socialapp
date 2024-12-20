import React from "react";

interface IPostProps {
  title: string;
  content: string;
  author: string;
}

const Post: React.FC<IPostProps> = ({ title, content, author }) => {
  return (
    <div>
      <h1>Create post</h1>
      <h1>{title}</h1>
      <p>{content}</p>
      <small>By {author}</small>
    </div>
  );
};

export default Post;

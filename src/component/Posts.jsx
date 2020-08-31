import React from "react";

const Posts = (props) => {
  return (
    <>
      {props.posts.map((post) => (
        <div key={post} className="post">
          {post}
        </div>
      ))}
    </>
  );
};

export default Posts;

import { useState } from "react";

const User = (props) => {
  const { name, location } = props;

  const [count, setCount] = useState(0);

  return (
    <div className="user-card">
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: ritikaagrahari2002@gmail.com</h4>
    </div>
  );
};

export default User;

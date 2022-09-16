import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/user";
import { useSelector } from "react-redux";
const Login = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const user = useSelector((state) => state.user.value);
  return (
    <div>
      {!user.name && (
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="enter name"
          />
          <br />
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="enter age"
          />
          <br />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter email"
          />
          <br />
        </div>
      )}

      {!user.name ? (
        <button onClick={() => dispatch(login({ name, age, email }))}>
          login
        </button>
      ) : (
        <button onClick={() => dispatch(logout())}>logout</button>
      )}
    </div>
  );
};

export default Login;

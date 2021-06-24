import React, { useState } from "react";
import { useDispatch } from "react-redux";
import api from "../../api";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.get("/sanctum/csrf-cookie");
      const loginResponse = await api.post("/login", {
        email,
        password,
      });

      console.log(loginResponse.status);
      if (loginResponse.status === 200) {
        const { data: user } = await api.get("/api/user");
        console.log(user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value="OK" />
      </form>
    </div>
  );
};

export default LoginForm;

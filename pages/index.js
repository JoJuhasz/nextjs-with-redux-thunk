import { useEffect } from "react";
import { useDispatch } from "react-redux";

import LoginForm from "../src/components/Auth/LoginForm";

const Index = () => {
  const dispatch = useDispatch();

  return (
    <>
      <LoginForm />
    </>
  );
};

export default Index;

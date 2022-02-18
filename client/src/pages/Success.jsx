import React from "react";
import { useLocation } from "react-router";

const Success = () => {
  const location = useLocation();
  console.log(location);
  return <div>Payment Successfull</div>;
};

export default Success;

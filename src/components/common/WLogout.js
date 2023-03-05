import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function WLogout() {
  const navigate = useNavigate();
  useEffect(() => {
    sessionStorage.clear();
    navigate("/");
    return () => {};
  }, []);

  return <div>Logout</div>;
}

export default WLogout;

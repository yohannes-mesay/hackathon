import React from "react";
import { User, UserCircleGear } from "phosphor-react";

const LoginTab = () => {
  return (
    <div className="flex gap-3 fixed top-5 right-10">
      <div className="flex gap-1">
        <p>user101</p>
        <UserCircleGear size={20} className="translate-y-0.5 text-green-800" />
      </div>
      <div>
        <p>Logout</p>
      </div>
    </div>
  );
};

export default LoginTab;

import { useState } from "react";
import Child from "./child";

export default function Communicate() {
  const [userName, setUserName] = useState("Cybersoft");

  const handleChangeUsername = () => {
    setUserName("Nguyen");
  };

  const getUserNameFromChild = (user) => {
    // nhận được user từ component Child
    // cập nhật lại state: setUserName
    setUserName(user);
  };

  return (
    <div>
      <h1>Communicate</h1>
      <p>Username: {userName}</p>
      <button
        className="text-white bg-green-500 rounded-lg py-2.5"
        onClick={handleChangeUsername}
      >
        Change Username
      </button>

      <hr />

      <Child data={userName} onResetUserName={getUserNameFromChild} />
    </div>
  );
}

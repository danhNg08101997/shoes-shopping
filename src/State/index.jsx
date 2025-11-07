import { useState } from "react";

export default function StateExample() {
  console.log("StateExample");
  const [isLogin, setIsLogin] = useState(false);
  const [count, setCount] = useState(0);

  const handleLogin = () => {
    // Cập nhật giá trị mới cho isLogin
    setIsLogin(true);
  };

  const handleLogout = () => {
    setIsLogin(false);
  };

  const renderUI = () => {
    if (isLogin) {
      // Đã login
      return (
        <div>
          <h1>Hello User</h1>
          <button
            onClick={handleLogout}
            type="button"
            className=" text-white bg-red-700 rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Logout
          </button>
        </div>
      );
    } else {
      // Chưa login
      return (
        <div>
          <h1>Vui long login</h1>
          <button
            onClick={handleLogin}
            type="button"
            className=" text-white bg-green-700 rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Login
          </button>
        </div>
      );
    }
  };

  const handleCountUp = () => {
    setCount((preCount) => preCount + 1);
    setCount((preCount) => preCount + 1);
  };

  return (
    <div>
      <h1>StateExample</h1>
      {renderUI()}
      <p>Number: {count}</p>
      <button
        onClick={handleCountUp}
        className=" text-white bg-red-700 rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        Count Up
      </button>
    </div>
  );
}

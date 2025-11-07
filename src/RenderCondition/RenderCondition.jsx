import React from "react";
const RenderCondition = () => {
  const isLogin = false; //true là đăng nhập rồi, false là chưa đăng nhập

  const renderLogin = () => {
    if (isLogin) {
      return (
        <h1>
          Hello, welcomback
          <ul>
            <li>Thông tin người dùng</li>
            <li>Đăng xuất</li>
          </ul>
        </h1>
      );
    } else {
      return <h1>Please login to continue</h1>;
    }
  };
  return (
    <div className="container mx-auto">
      {isLogin ? <h1>Hello, welcomback</h1> : <h1>Please login to continue</h1>}
      {/* {isLogin ? (
        <h1>
          Hello, welcomback
          <ul>
            <li>Thông tin người dùng</li>
            <li>Đăng xuất</li>
          </ul>
        </h1>
      ) : (
        <h1>Please login to continue</h1>
      )} */}
      {renderLogin()}
    </div>
  );
};

export default RenderCondition;

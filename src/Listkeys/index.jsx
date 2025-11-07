import { useState } from "react";

export default function ListKeys() {
  console.log("ListKeys");

  const [listUser, setListUser] = useState([
    { id: 1, name: "Nguyen", age: 18 },
    { id: 2, name: "Van", age: 20 },
    { id: 3, name: "Tu", age: 22 },
    { id: 4, name: "Tuan", age: 22 },
  ]);
  const [userInfo, setUserInfo] = useState(null);

  const handleChangeInfo = (id) => {
    const userFind = listUser.find((user) => user.id === id);
    setUserInfo(userFind);
  };

  const renderListUser = () => {
    const arrLi = listUser.map((user) => {
      return (
        <li key={user.id}>
          Id: {user.id} - Name: {user.name} - Age: {user.age}
          <button onClick={() => handleChangeInfo(user.id)}>Show Info</button>
        </li>
      );
    });

    return arrLi;
  };

  return (
    <div>
      <h1>ListKeys</h1>
      <p>
        Info User: {userInfo && userInfo.name} Age: {userInfo.age}
      </p>
      <ul>
        {renderListUser()}
        {/* {listUser.map((user) => {
          return (
            <li key={user.id}>
              Id: {user.id} - Name: {user.name} - Age: {user.age}
            </li>
          );
        })} */}
      </ul>
    </div>
  );
}

import { useState } from "react";

export default function ExampleCar() {
  const [imgUrl, setImgUrl] = useState("./images/red-car.jpg");

  // const handleChangeUrlRed = () => {
  //   setImgUrl("./images/red-car.jpg");
  // };
  // const handleChangeUrlSilver = () => {
  //   setImgUrl("./images/silver-car.jpg");
  // };
  // const handleChangeUrlBlack = () => {
  //   setImgUrl("./images/black-car.jpg");
  // };

  const handleChangeUrlCar = (url) => {
    setImgUrl(url);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <img src={imgUrl} alt="Car 1" />
      </div>

      <div>
        <button
          className="text-white bg-red-500 rounded-lg py-2.5"
          onClick={() => handleChangeUrlCar("./images/red-car.jpg")}
        >
          Red
        </button>
        <button
          className="bg-amber-50 rounded-lg py-2.5"
          onClick={() => handleChangeUrlCar("./images/silver-car.jpg")}
        >
          Silver
        </button>
        <button
          className="text-white bg-black rounded-lg py-2.5"
          onClick={() => handleChangeUrlCar("./images/black-car.jpg")}
        >
          Black
        </button>
      </div>
    </div>
  );
}

import React from "react";

const DemoHandleEvent = () => {
  const handleClick = () => {
    console.log("Clicked");
  };

  const handlePage = (page) => {
    console.log(page);
  };

  return (
    <div className="container mx-auto">
      <h1>Event Handling</h1>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => {
          //anonymous function
          handleClick();
        }}
      >
        Click me
      </button>

      <h1 className="text-3xl text-cyan-400 mb-5">Paging</h1>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => {
          handlePage(1);
        }}
      >
        Trang 1
      </button>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => {
          //anonymous function
          handlePage(2);
        }}
      >
        Trang 2
      </button>
    </div>
  );
};

export default DemoHandleEvent;

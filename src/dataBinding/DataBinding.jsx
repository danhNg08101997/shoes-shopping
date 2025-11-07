const DataBinding = () => {
  //data binding là liên dữ liệu giữa phần logic và phần giao diện
  //thực hiện logic
  const title = "Hello BC90";
  const product = {
    id: 1,
    name: "IP 17 promax",
    color: "Cam",
    img: "https://picsum.photos/id/1/200/300",
  };
  //muốn binding hàm thì bắt buộc return phải về string, number, boolean hoặc jsx
  const renderCard = () => {
    return (
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {product.name} - Màu sắc: {product.color}
        </p>
        <img src={product.img} className="mb-2" />
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    );
  };

  return (
    //xử lý giao diện
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl text-red-500">{title}</h1>
      {renderCard()}
    </div>
  );
};

export default DataBinding;

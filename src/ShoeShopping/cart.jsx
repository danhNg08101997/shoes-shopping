export default function Cart(props) {
    const {carts, onUpdateQtyCartsProp} = props;

    const renderListCarts = () => {

        return carts.map((item) => {

            return (
                <tr
                    key={item.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                >
                    <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                        {item.name}
                    </th>
                    <td className="px-6 py-4">
                        <img src={item.image} alt={item.name} width={50}/>
                    </td>
                    <td className="px-6 py-4">
                        <button className="border border-gray-400 rounded-xl p-2 bg-gray-600 text-amber-50 mr-3"
                            //   disabled={item.soLuong === 1}
                            onClick={() => onUpdateQtyCartsProp(item.id, false)}
                        >
                            -
                        </button>
                        {item.quanlity}
                        <button className="border border-gray-400 rounded-xl p-2 bg-gray-600 text-amber-50 ml-3" onClick={() => onUpdateQtyCartsProp(item.id, true)}>
                            +
                        </button>
                    </td>
                    <td className="px-6 py-4">${item.price * item.quanlity}</td>
                    <td className="px-6 py-4">{(item.description.length > 20) ? item.description.slice(0, 19) + "..." : item.description}</td>
                </tr>
            )
        })
    }

    return <div className="relative p-4 w-full  max-h-full">
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <div
                className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Carts
                </h3>
                <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="default-modal"
                >
                    <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>

            <div className="p-4 md:p-5 space-y-4">
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead
                            className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Qty
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                        </tr>
                        </thead>
                        <tbody>{renderListCarts()}</tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>;
}

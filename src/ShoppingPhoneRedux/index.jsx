import { useState } from "react";
import Phone from "./phone";
import Detail from "./detail";
import Cart from "./cart";
import {useSelector} from "react-redux"

export default function ShoppingPhoneRedux() {
  const [productDetail, setProductDetail] = useState(null);
  const [carts, setCarts] = useState([]);
  const data = useSelector(state => state.shoppingPhoneReducer);

  const renderListProducts = () => {
    return data?.products?.map((product) => (
      <Phone
        key={product.maSP}
        productProp={product}
        onGetDetailFromPhoneProp={onGetDetailFromPhone}
        onGetProductAddToCartProp={onGetProductAddToCart}
      />
    ));
  };

  // nhận data từ component Phone
  const onGetDetailFromPhone = (product) => {
    // cập nhật state => setProductDetail
    setProductDetail(product);
  };

  const findIndexCarts = (maSP) => {
    return carts.findIndex((product) => product.maSP === maSP);
  };

  // nhận data từ component Phone
  const onGetProductAddToCart = (product) => {
    /**
     * tạo object productAddToCart
     * Clone carts thành 1 mảng mới (newCarts)
     * thêm productAddToCart vào newCarts
     * cập nhật lại carts
     */
    const productAddToCart = {
      maSP: product.maSP,
      tenSP: product.tenSP,
      hinhAnh: product.hinhAnh,
      giaBan: product.giaBan,
      soLuong: 1,
    };

    // tìm vị trí productAddToCart có tồn tại trong carts
    const index = findIndexCarts(productAddToCart.maSP);

    const newCarts = [...carts];
    if (index !== -1) {
      // product tồn tại => Update qty
      newCarts[index].soLuong += 1;
    } else {
      // product k tồn tại => thêm
      newCarts.push(productAddToCart);
    }
    setCarts(newCarts);
  };

  // nhận data từ component Carts
  const onUpdateQtyCarts = (maSP, status) => {
    /**
     * Tìm vi trí maSP
     * Clone carts => tạo newCarts
     * Check status
     */
    const index = findIndexCarts(maSP);
    if (index !== -1) {
      let newCarts = [...carts];

      if (status) {
        // Tăng
        newCarts[index].soLuong += 1;
      } else {
        // Giảm
        // if (newCarts[index].soLuong > 1) {
        //   newCarts[index].soLuong -= 1;
        // }

        newCarts[index].soLuong -= 1;

        if (newCarts[index].soLuong === 0) {
          // delete

          newCarts = newCarts.filter((product) => product.maSP !== maSP);
          console.log(newCarts);
        }
      }

      setCarts(newCarts);
    }
  };

  // Tính tổng số lượng sản phẩm
  const totalQty = () => {
    const total = carts.reduce(
      (total, product) => (total += product.soLuong),
      0
    );
    return total;
  };

  return (
    <div>
      <h1>* ShoppingPhone</h1>
      <h1>Total Qty Carts: {totalQty()}</h1>
      <Cart carts={carts} onUpdateQtyCartsProp={onUpdateQtyCarts} />
      <div className="container mx-auto grid grid-cols-3 gap-10">
        {renderListProducts()}
      </div>
      <Detail productDetailProp={productDetail} />
    </div>
  );
}

import React, { useRef } from "react";
import { connect, useDispatch } from "react-redux";
import { getAllProducts } from "./../../store/products/productsSelectors";
import { productsActions } from "../../store/products/productsSlice";

const Product = ({ products }) => {
  const dispatch = useDispatch();
  const input = useRef(null);

  const setData = () => {
    dispatch(productsActions.setOrdererName(input.current.value));
  };

  return (
    <div>
      <input ref={input} type="text" />
      <button onClick={setData}>CLICK</button>
      {products.map((product) => (
        <div key={product.id}>
          <p style={{ color: "black" }}>{product.title}</p> <br></br>
        </div>
      ))}
    </div>
  );
};

export default connect(getAllProducts)(Product);

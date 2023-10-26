import React, { useRef } from "react";
import { connect } from "react-redux";
import { getAllProducts } from "./../../store/products/productsSelectors";
import { productsActions } from "../../store/products/productsSlice";

const Product = ({ allproducts, setOrdererName }) => {
  const input = useRef(null);

  const setData = () => {
    setOrdererName(input.current.value);
  };

  return (
    <div>
      <input ref={input} type="text" />
      <button onClick={setData}>CLICK</button>
      {allproducts.map((product) => (
        <div key={product.id}>
          <p style={{ color: "black" }}>{product.title}</p> <br></br>
        </div>
      ))}
    </div>
  );
};

export default connect(
  (state) => ({ allproducts: getAllProducts(state) }),
  (dispatch) => ({
    setOrdererName: dispatch(productsActions.setOrdererName),
  })
)(Product);

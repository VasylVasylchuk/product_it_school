import React, {useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "./../../store/products/productsSelectors";
import { userActions } from "../../store/user/userSlice";
import useFriendStatus from '../../hooks/useFriendStatus';

const Product = () => {
  const input = useRef(null);
  const dispatch = useDispatch();
  const allproducts = useFriendStatus();
  const setData = () => {
    dispatch(userActions.setFirstName(input.current.value));
  }

  return (
    <div>
      <input ref={input} type="text" />
      <button onClick={setData}>CLICK</button>
      {allproducts.map((product) => (
        <div key={product.id}>
          <p style={{color: 'black'}}>{product.title}</p> <br></br>
        </div>
      ))}
    </div>
  );
};

export default Product;

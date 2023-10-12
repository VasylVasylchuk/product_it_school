import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ShopRouters from "./ShopRouters";
import { useEffect } from "react";
import { getProductsFromBE } from './store/products/productsRequest';
import {useDispatch} from 'react-redux';
import Product from "./components/Product/Product";
import { getFirstName } from './store/user/userSelectors';
import { useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  const firstName = useSelector(getFirstName);
  
  useEffect(() => {
    getProductsFromBE(dispatch);
  },[dispatch]) 

  return (
      <div>
        <p>{firstName}</p>
        <Product />
      </div>
  );
}

export default App;

import "./App.css";
import { useEffect } from "react";
import { getProductsFromBE } from './store/products/productsRequest';
import {useDispatch} from 'react-redux';
import Product from "./components/Product/Product";
import { getOrdererName } from './store/products/productsSelectors';
import { useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  const firstName = useSelector(getOrdererName);
  
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

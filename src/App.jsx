import "./App.css";
import React from 'react';
import { useEffect } from "react";
import { getProductsFromBE } from './store/products/productsRequest';
import {useDispatch} from 'react-redux';
import Product from "./components/Product/Product";
import { getOrdererName } from './store/products/productsSelectors';
import { useSelector } from 'react-redux';
import { DatePicker } from 'antd';

function App() {
  const dispatch = useDispatch();

  const firstName = useSelector(getOrdererName); //(store) => store
  
  useEffect(() => {
    getProductsFromBE(dispatch);
  },[dispatch]) 

  return (
      <div>
        <p>{firstName}</p>
        <DatePicker.RangePicker />;
        <Product />
      </div>
  );
}

export default App;

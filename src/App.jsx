import "./App.css";
import { BrowserRouter, Outlet } from "react-router-dom";
import ShopRouters from "./ShopRouters";
import Header from './components/Header/Header';

function App() {
  return (
      <BrowserRouter>
        <Header/>

        <ShopRouters />
        <Outlet />
      </BrowserRouter> 
  );
}

export default App;

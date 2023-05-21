import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ShopRouters from "./ShopRouters";

function App() {
  return (
      <BrowserRouter>
        <ShopRouters />
      </BrowserRouter> 
  );
}

export default App;

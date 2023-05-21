import { Outlet } from "react-router-dom";

const Header = () => {
  return <>
    <div>HEADER</div>
    <Outlet />
  </>

};

export default Header;
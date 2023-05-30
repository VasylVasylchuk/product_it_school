import { Outlet } from "react-router-dom";
import Registration from "../../modals/Registration/Registration";
import './Header.css';

const Header = () => {
  return <>
    <div>HEADER</div>
    <div className="header">
      <Registration />
    </div>
    <Outlet />
  </>

};

export default Header;
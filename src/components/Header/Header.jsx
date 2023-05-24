import { Outlet } from "react-router-dom";
import './Header.css';
import FormDialog from '../../modals/LoginModal/LoginModal';

const Header = () => {
  return <>
    <div className="header"> 
      <FormDialog />
    </div>
    <Outlet />
  </>

};

export default Header;
import { Outlet } from "react-router-dom";
import './Header.css';
import FormDialog from '../../modals/LoginModal/LoginModal';

const Header = () => {
  return <>
    <div className="header"> 
      <p style={{marginRight: 'auto'}}>Header</p>
      <FormDialog />
    </div>
    <Outlet />
  </>

};

export default Header;
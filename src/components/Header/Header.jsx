import { Outlet } from "react-router-dom";

import './Header.css';
import FormDialog from '../../modals/LoginModal/LoginModal';
import ModalWinRegistration from "../../modals/Login/ModalWinRegistration";
import './Header.css'

const Header = () => {
  return <>
    <div className='header'>
      <span className='header_title' >Header</span>
    <ModalWinRegistration />
    <FormDialog />
    </div>
    <Outlet />
  </>

};

export default Header;
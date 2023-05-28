import { Outlet } from "react-router-dom";
import ModalWinRegistration from "../../modals/Login/ModalWinRegistration";
import './Header.css'

const Header = () => {
  return <>
    <div className='header'>
      <span className='header_title' >Header</span>
    <ModalWinRegistration />
    </div>
    <Outlet />
  </>

};

export default Header;
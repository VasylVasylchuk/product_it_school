import { Outlet } from "react-router-dom";

import "./Header.css";
import FormDialog from "../../modals/LoginModal/LoginModal";
import ModalWinRegistration from "../../modals/Login/ModalWinRegistration";
import "./Header.css";
import { useEffect, useRef, memo} from "react";

const Header = () => {
  const header = useRef(null); 

  useEffect(_ => {
    console.log(header);
  },[header]);

  return (
    <>
      <div className="header" ref={header}>
        <span className="header_title">Header</span>
         <ModalWinRegistration />
        {/* <FormDialog />  */}
      </div>
      <Outlet />
    </>
  );
};

export default memo(Header);

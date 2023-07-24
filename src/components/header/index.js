import React, { useState } from "react";
import "./header.css";
import "react-sticky-header/styles.css";
import { SocialIcon } from "react-social-icons";
import styled from "styled-components";
import StickyHeader from "react-sticky-header";
import Mobile from "./mobile/index";
import Web from "./web/index";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleLogoClick = () => {
    window.location.reload();
  };
  window.onscroll = function () {
    setIsOpen(false);
  };
  return (
    <div className="header">
      <div onClick={handleLogoClick} className="logo">
        Varun Sai Krishna.
      </div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <i class="fi-rr-apps menu-icon"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;

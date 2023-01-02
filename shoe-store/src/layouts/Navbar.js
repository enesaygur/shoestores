import React from "react";
import { SiNike } from "react-icons/si";
export default function Navbar() {
  return (
    <div>
      <div className="navbar-text">NIKE SHOES</div>
      <div className="menu">
        <div className="navbar-icon">
          <SiNike size={70} />
        </div>
        <div className="navbar-menu">Menu</div> 
      </div>
    </div>
  );
}

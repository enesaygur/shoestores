import React from "react";
import { SiNike } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
export default function Navbar() {
  return (
    <div>
      <div className="navbar-text">Nike Shoes</div>
      <div className="menu">
        <div className="navbar-icon">
          <SiNike size={65} />
        </div>
        <div className="navbar-menu">
          <Menu widths={"12"} borderless>
            <Menu.Item
              name="Home" as={NavLink} to="/"
            />
            <Menu.Item
              name="About" as={NavLink} to="/about"
            />
            <Menu.Item
              name="Products" as={NavLink} to="/products"
            />
            <Menu.Item
              name="Cart" as={NavLink} to="/cart"
            />
          </Menu>
        </div>
      </div>
    </div>
  );
}

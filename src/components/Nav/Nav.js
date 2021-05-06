import React from "react";
import { Link } from "react-router-dom";
import { RiSurgicalMaskLine, RiHospitalFill } from "react-icons/ri";
import { MdLocalPharmacy } from "react-icons/md";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <div className="logo">MEDICAL-HELPER</div>
      </Link>
      <ul className="nav-menu">
        <Link to="/">
          <li className="item">
            <RiHospitalFill className="icon" />
            <span>Medical-Check</span>
          </li>
        </Link>
        <Link to="/covid">
          <li className="item">
            <RiSurgicalMaskLine className="icon" />
            <span>COVID-19</span>
          </li>
        </Link>
        <Link to="/pharmacy">
          <li className="item">
            <MdLocalPharmacy className="icon" />
            <span>Pharmacy</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;

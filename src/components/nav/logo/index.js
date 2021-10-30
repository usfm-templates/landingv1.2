import SiteLogo from "../../../assets/united-states-family-marketing-logo.webp";

import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <div className="">
        <img
          className="w-12 inline-block"
          src={SiteLogo}
          alt="US Family Marketing Logo"
        />
        <h1 className="ml-5 inline-block">US Family Marketing</h1>
      </div>
    </Link>
  );
}

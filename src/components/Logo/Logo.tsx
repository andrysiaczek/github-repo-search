import "./Logo.css";
import LogoSVG from "./LogoSVG";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={`/`}>
      <div className="logo">
        <LogoSVG />
        <div className="logo-name">
          Repo<span>Search</span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
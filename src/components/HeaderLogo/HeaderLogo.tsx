import "./HeaderLogo.css";
import LogoSVG from "../Logo/LogoSVG";
import { Link } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <Link to={`/`}>
      <div className="header-logo">
        <LogoSVG />
        <div className="header-logo-name">
          Repo<span>Search</span>
        </div>
      </div>
    </Link>
  );
};

export default HeaderLogo;

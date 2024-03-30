import { Link } from "react-router-dom";
import LogoSVG from "../Logo/LogoSVG";
import "./HeaderLogo.css";

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

import { Link } from "react-router-dom";
import LogoSVG from "./LogoSVG";
import "./Logo.css";

interface LogoProps {
  header?: boolean;
}

const Logo = ({ header = false }: LogoProps) => {
  const classNamePrefix = header ? "header-" : "";

  return (
    <Link to={`/`}>
      <div className={`${classNamePrefix}logo`}>
        <LogoSVG />
        <div className={`${classNamePrefix}logo-name`}>
          Repo<span>Search</span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;

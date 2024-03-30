import HeaderLogo from "../HeaderLogo/HeaderLogo";
import HeaderSearchBar from "../HeaderSearchBar/HeaderSearchBar";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <HeaderLogo />
      <HeaderSearchBar />
    </div>
  );
};

export default Header;

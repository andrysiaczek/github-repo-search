import HeaderSearchBar from "../HeaderSearchBar/HeaderSearchBar";
import Logo from "../Logo/Logo";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Logo header />
      <HeaderSearchBar />
    </div>
  );
};

export default Header;

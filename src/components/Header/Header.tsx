import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Logo header />
      <SearchBar header />
    </div>
  );
};

export default Header;

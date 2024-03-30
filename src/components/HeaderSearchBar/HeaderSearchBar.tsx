import { useState } from "react";
import MagnifyingGlassSVG from "../SearchBar/MagnifyingGlassSVG";
import "./HeaderSearchBar.css";

const HeaderSearchBar = () => {
  const [user, setUser] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleButtonClick();
    }
  };

  const handleButtonClick = () => {
    // onClick(user); TODO:
  };

  return (
    <div className="header-search-bar">
      <div className="header-search-bar-input">
        <MagnifyingGlassSVG />
        <input
          id="search-bar-input"
          name="search-bar-input-text"
          className="header-search-bar-input-text"
          type="text"
          placeholder="Search for a new GitHub user ..."
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          value={user}
        />
      </div>
    </div>
  );
};

export default HeaderSearchBar;

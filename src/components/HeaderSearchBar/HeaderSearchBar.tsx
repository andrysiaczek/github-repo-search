import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MagnifyingGlassSVG from "../SearchBar/MagnifyingGlassSVG";
import "./HeaderSearchBar.css";

const HeaderSearchBar = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && username.trim() !== "") {
      navigate(`/user/${username}`);
    }
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
          value={username}
        />
      </div>
    </div>
  );
};

export default HeaderSearchBar;

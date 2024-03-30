import { useState } from "react";
import "./SearchBar.css";
import ArrowSVG from "./ArrowSVG";
import MagnifyingGlassSVG from "./MagnifyingGlassSVG";
import { Link, useNavigate } from "react-router-dom";

const SearchBar = () => {
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
    <div className="search-bar">
      <div className="search-bar-input">
        <MagnifyingGlassSVG />
        <input
          id="search-bar-input"
          name="search-bar-input-text"
          className="search-bar-input-text"
          type="text"
          placeholder="Search for a GitHub user ..."
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          value={username}
          autoFocus
        />
      </div>
      <Link to={`user/${username}`} className="search-bar-button">
        <ArrowSVG />
      </Link>
    </div>
  );
};

export default SearchBar;

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ArrowSVG from "./ArrowSVG";
import MagnifyingGlassSVG from "./MagnifyingGlassSVG";
import "./SearchBar.css";

interface SearchBarProps {
  header?: boolean;
}

const SearchBar = ({ header = false }: SearchBarProps) => {
  const classNamePrefix = header ? "header-" : "";
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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "/") {
        event.preventDefault();
        document.getElementById("search-bar-input")?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={`${classNamePrefix}search-bar`}>
      <div className={`${classNamePrefix}search-bar-input`}>
        <MagnifyingGlassSVG />
        <input
          id="search-bar-input"
          name="search-bar-input-text"
          className={`${classNamePrefix}search-bar-input-text`}
          type="text"
          placeholder="Search for a GitHub user ..."
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          value={username}
          autoFocus={!header}
        />
      </div>
      {!header && (
        <Link to={`user/${username}`} className="search-bar-button">
          <ArrowSVG />
        </Link>
      )}
    </div>
  );
};

export default SearchBar;

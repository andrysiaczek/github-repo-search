import { useEffect, useState } from "react";
import { Repository as RepositoryType } from "../../pages/UserPage/UserPage";
import Repository from "./Repository";
import "./Repository.css";
import Filter from "../Filter/Filter";

interface RepositoriesProps {
  repositories: RepositoryType[];
}

const Repositories = ({ repositories }: RepositoriesProps) => {
  const [filteredRepositories, setFilteredRepositories] = useState<
    RepositoryType[]
  >([]);
  const [searchName, setSearchName] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [uniqueLanguages, setUniqueLanguages] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(event.target.value);
  };

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
  };

  useEffect(() => {
    const filteredRepositories = repositories
      .filter(
        (repository) =>
          (!searchName ||
            repository.name.toLowerCase().includes(searchName.toLowerCase())) &&
          (!selectedLanguage ||
            repository.primaryLanguage?.name === selectedLanguage)
      )
      .sort((a, b) => a.name.localeCompare(b.name));

    const uniqueLanguages = Array.from(
      new Set(
        filteredRepositories
          .filter((repository) => repository.primaryLanguage)
          .map((repository) => repository.primaryLanguage!.name)
      )
    );

    setFilteredRepositories(filteredRepositories);
    setUniqueLanguages(uniqueLanguages);
  }, [searchName, selectedLanguage, repositories]);

  return (
    <div className="repositories">
      <div className="repositories-filter">
        <input
          id="repositories-search-bar"
          name="repositories-search-bar"
          className="repositories-search-bar"
          type="text"
          placeholder="Find a repository ..."
          onChange={handleInputChange}
          value={searchName}
          autoFocus
        ></input>
        <Filter
          languages={uniqueLanguages}
          selectedLanguage={selectedLanguage}
          onSelect={handleLanguageSelect}
        />
      </div>
      <hr className="repositories-hr" />
      {filteredRepositories.map((repository) => (
        <div key={repository.id}>
          <Repository repository={repository} />
          <hr className="repositories-hr" />
        </div>
      ))}
    </div>
  );
};

export default Repositories;

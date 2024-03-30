import { useEffect, useState } from "react";
import { Repository as RepositoryType } from "../../api/api";
import Filter from "../Filter/Filter";
import Repository from "./Repository";
import "./Repository.css";

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
    const filteredRepositories = repositories.filter(
      (repository) =>
        (!searchName ||
          repository.name.toLowerCase().includes(searchName.toLowerCase())) &&
        (!selectedLanguage ||
          repository.primaryLanguage?.name === selectedLanguage)
    );

    const uniqueLanguages = Array.from(
      new Set(
        filteredRepositories
          .filter((repository) => repository.primaryLanguage)
          .map((repository) => repository.primaryLanguage!.name)
          .sort((a, b) => a.localeCompare(b))
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
        />
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

import "./Filter.css";

interface FilterProps {
  languages: string[];
  selectedLanguage: string;
  onSelect: (language: string) => void;
}

const Filter = ({ languages, selectedLanguage, onSelect }: FilterProps) => {
  return (
    <div className="filter">
      <select
        className="filter-select"
        onChange={(e) => onSelect(e.target.value)}
        value={selectedLanguage}
      >
        <option value={""}>Languages</option>
        {languages.map((language, index) => (
          <option key={index} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;

import "./Filter.css";

interface FilterProps {
  languages: string[];
  selectedLanguage: string;
  onSelect: (language: string) => void;
}

const Filter = ({ languages, selectedLanguage, onSelect }: FilterProps) => {
  return (
    <select
      className="filter"
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
  );
};

export default Filter;

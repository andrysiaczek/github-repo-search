import NoReposFoundSVG from "./NoReposFoundSVG";
import "./Repository.css";

interface NoReposFoundProps {
  language: string;
  searchName: string;
  userName: string;
}

const NoReposFound = ({
  language,
  searchName,
  userName,
}: NoReposFoundProps) => {
  return (
    <div className="no-repos-found">
      <div className="no-repos-found-message">
        <div className="no-repos-found-message-main">
          0 results for repositories matching <span>{searchName}</span>
          {language ? ` written in ${language}` : ""}
        </div>
        <div className="no-repos-found-message-secondary">
          {userName} doesn’t have any repositories that match
        </div>
      </div>
      <NoReposFoundSVG />
    </div>
  );
};

export default NoReposFound;

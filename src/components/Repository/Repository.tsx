import { Repository as RepositoryType } from "../../api/api";
import { formatDistanceToNow } from "date-fns";

interface RepositoryProps {
  repository: RepositoryType;
}

const Repository = ({ repository }: RepositoryProps) => {
  return (
    <div className="repository">
      <div className="repository-main-info">
        <a href={repository.url}>
          <div className="repository-main-info-name">{repository.name}</div>
        </a>
        <div className="repository-main-info-description">
          {repository.description}
        </div>
      </div>
      <div className="repository-details">
        <div className="repository-details-language">
          {repository.primaryLanguage && (
            <>
              <div
                className="repository-details-language-color"
                style={{ backgroundColor: repository.primaryLanguage.color }}
              />
              <div className="repository-details-language-name">
                {repository.primaryLanguage.name}
              </div>
            </>
          )}
        </div>
        <div>
          Updated{" "}
          {formatDistanceToNow(new Date(repository.updatedAt), {
            addSuffix: true,
          })}
        </div>
        <div>
          Forked {repository.forkCount}{" "}
          {repository.forkCount == 1 ? "time" : "times"}
        </div>
      </div>
    </div>
  );
};

export default Repository;

import { GitHubUser } from "../../api/api";
import "./User.css";

interface UserProps {
  user: GitHubUser;
}

const User = ({ user }: UserProps) => {
  return (
    <div className="user">
      <img
        className="user-image"
        src={user.avatarUrl}
        alt="User profile picture"
      />
      <div className="user-details">
        <a href={user.url}>
          <div className="user-details-name">{user.name}</div>
          <div className="user-details-username">{user.login}</div>
        </a>
      </div>
    </div>
  );
};

export default User;

import Header from "../../components/Header/Header";
import NoUserFoundSVG from "./NoUserFoundSVG";

interface NoUserFoundProps {
  userName: string;
}

const NoUserFound = ({ userName }: NoUserFoundProps) => {
  return (
    <>
      <Header />
      <div className="no-user-found">
        <div className="no-user-found-message">
          <div className="no-user-found-message-main">
            No user with the username <span>{userName}</span> found
          </div>
          <div className="no-user-found-message-secondary">
            Type <span>/</span> to search for a new user
          </div>
        </div>
        <NoUserFoundSVG />
      </div>
    </>
  );
};

export default NoUserFound;

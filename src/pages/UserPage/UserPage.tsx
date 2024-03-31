import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES, GitHubUser } from "../../api/api";
import Header from "../../components/Header/Header";
import Repositories from "../../components/Repository/Repositories";
import User from "../../components/User/User";
import NoUserFound from "./NoUserFound";
import "./UserPage.css";

const UserPage = () => {
  const { username } = useParams();
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    variables: { login: username },
  });

  if (loading) return <p>Loading...</p>;
  if (
    error &&
    error.message.includes("Could not resolve to a User with the login of")
  )
    return (
      <>
        <NoUserFound userName={username || ""} />
      </>
    );

  const user: GitHubUser = data.user;

  return (
    <>
      <Header />
      <div className="user-page">
        <User user={user} />
        <Repositories
          repositories={user.repositories.nodes}
          userName={user.login}
        />
      </div>
    </>
  );
};

export default UserPage;

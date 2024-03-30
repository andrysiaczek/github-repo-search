import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Header from "../../components/Header/Header";
import Repositories from "../../components/Repository/Repositories";
import User from "../../components/User/User";
import "./UserPage.css";
import { GET_REPOSITORIES, GitHubUser } from "../../api/api";

const UserPage = () => {
  const { username } = useParams();
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    variables: { login: username },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const user: GitHubUser = data.user;

  return (
    <>
      <Header />
      <div className="user-page">
        <User user={user} />
        <Repositories repositories={user.repositories.nodes} />
      </div>
    </>
  );
};

export default UserPage;

import User from "../../components/User/User";
import Header from "../../components/Header/Header";
import { useQuery, gql } from "@apollo/client";
import Repositories from "../../components/Repository/Repositories";
import "./UserPage.css";
import { useParams } from "react-router-dom";

const GET_REPOSITORIES = gql`
  query GetRepositories($login: String!) {
    user(login: $login) {
      login
      name
      avatarUrl
      url
      repositories(first: 100) {
        nodes {
          id
          name
          description
          url
          updatedAt
          primaryLanguage {
            name
            color
          }
          forkCount
        }
      }
    }
  }
`;

export type Language = {
  name: string;
  color: string;
};

export type Repository = {
  id: string;
  name: string;
  description: string;
  url: string;
  updatedAt: Date;
  primaryLanguage?: Language;
  forkCount: number;
};

export type GitHubUser = {
  login: string;
  name: string;
  avatarUrl: string;
  url: string;
  repositories: {
    nodes: Repository[];
  };
};

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

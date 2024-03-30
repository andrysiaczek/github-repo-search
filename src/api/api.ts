import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const GET_REPOSITORIES = gql`
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

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_API_URI,
});

const authLink = setContext((_, { headers }) => {
  const token = import.meta.env.VITE_API_KEY;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

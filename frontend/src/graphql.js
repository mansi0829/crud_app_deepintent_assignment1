import { gql } from '@apollo/client';

export const CREATE_USER_MUTATION = gql`
  mutation createUser($user: UserInput!) {
    createUser(user: $user) {
      id
      username
      email
      phonenumber
    }
  }
`;

export const USER_INPUT_TYPE = gql`
  input UserInput {
    username: String!
    email: String!
    phonenumber: String!
  }
`;

export const DELETE_USER_MUTATION = gql`
  mutation deleteUser($userId: UUID!) {
    deleteUser(userId: $userId)
  }
`;

export const UPDATE_USER_MUTATION = gql`
  mutation updateUser($user: UserInput!) {
    updateUser(user: $user)
  }
`;

export const GET_USER_QUERY = gql`
  query getUser($userId: UUID!) {
    getUser(userId: $userId) {
      id
      username
      email
      phonenumber
    }
  }
`;

export const GET_ALL_USERS_QUERY = gql`
  query getAllUsers {
    getAllUsers {
      id
      username
      email
      phonenumber
    }
  }
`;
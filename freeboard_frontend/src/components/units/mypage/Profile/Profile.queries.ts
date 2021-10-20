import { gql } from "@apollo/client";

export const CHANGE_PASSWORD = gql`
  mutation ($password: String!) {
    resetUserPassword(password: $password)
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      _id
      email
      name
      picture
    }
  }
`;

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export const FETCH_USER_LOGGED_IN = gql`
  query fetchPoint {
    fetchUserLoggedIn {
      name
      userPoint {
        amount
      }
    }
  }
`;

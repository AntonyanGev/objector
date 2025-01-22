import { gql } from "@apollo/client";

export const SIGNUP = gql`
  mutation addUser($add: inputUser!) {
    addUser(add: $add) {
      _id
      userName
      email
    }
  }
`;

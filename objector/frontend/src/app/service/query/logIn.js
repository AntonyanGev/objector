import { gql } from "@apollo/client";

export const CHECK_USER = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      userId
    }
  }
`;

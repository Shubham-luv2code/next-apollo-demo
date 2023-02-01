import { gql } from "@apollo/client";

export const FETCH_USER_DETAILS = gql`
  query Query($limit: Int!, $offset: Int!) {
    user(limit: $limit, offset: $offset) {
      uuid
      fullName
      address
      city
      country
      phoneNumber
      email
    }
  }
`;

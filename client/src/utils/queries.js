import { gql } from '@apollo/client';

// export const GET_USER = gql``;

export const GET_EXCHANGES = gql`{
  exchanges {
    _id
    creatorID
    roomName
    passphrase
    users
  }
}
`;

export const GET_EXCHANGES_BY_USER = gql`{
  exchangeByUser {
    _id
    creatorID
    roomName
    passphrase
    users
  }
}
`;

export const GET_ME = gql`{
    me {
      _id
      email
      secretSantaId
      username
      wishes
    }
}
`;

export const GET_USER = gql`
query user($username: String!) {
  user(username: $username) {
    _id
    username
    email
    wishes
  }
}
`;
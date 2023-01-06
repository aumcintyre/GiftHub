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

export const GET_ME = gql`
{
    me {
        _id
        username
        email
        password
        secretSanta
        exchanges {
          _id
          creatorID
          passphrase
          roomName
          users {
            username
            _id
          }
        }
    }
}
`;
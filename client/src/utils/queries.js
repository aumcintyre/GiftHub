import { gql } from '@apollo/client';

// export const GET_USER = gql``;

export const GET_EXCHANGES = gql`{
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
`;

export const GET_EXCHANGES_BY_USER = gql`{
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
`;
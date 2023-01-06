import { gql } from '@apollo/client'

export const ADD_USER = gql`
mutation addUser(
        $username: String!
        $email: String!
        $password: String!
    ){
    addUser(
        username: $username
        email: $email 
        password: $password
      ){
        token
        user {
            _id
            username
        }
    }
}
`;

export const LOGIN_USER = gql`
mutation loginUser(
        $username: String!
        $password: String!
    ) {
    loginUser(
        username: $username
        password: $password
    ){
        token
        user {
            _id
        }
    }
}
`;

export const ADD_EXCHANGE = gql`
    mutation addExchange(
        $roomName: String!
        $passphrase: String!
        ) {
        addExchange(
            roomName: $roomName
            passphrase: $passphrase
            ) {
                _id
                passphrase
                roomName
                users {
                    _id
                    username
            }
        }
      }
`;

export const JOIN_EXCHANGE = gql`
    mutation joinExchange(
        $roomName: String!
        $passphrase: String!
        ) {
        joinExchange(
            roomName: $roomName
            passphrase: $passphrase
            ) {
                _id
                passphrase
                roomName
                users {
                    _id
                    username
            }
        }
    }
`;


export const ADD_WISH = gql`
mutation addWishItem($item: String!) {
    addWishItem(item: $item) {
      _id
      username
      wishes
    }
  }
`;
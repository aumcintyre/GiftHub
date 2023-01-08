import React from "react";
// import { LoginForm } from "./src/components/LoginForm";
// import { SignupForm } from "../src/Components/SignupForm.js";

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

import SignupForm from './Components/SignupForm';
import PortfolioContainer from './Pages/PortfolioContainer'
import LoginForm from "./Components/LoginForm";
import Header from './Components/Header';
import CreateExchange from './Components/CreateExchange';
import SimpleCard from './Components/Gallery';
import Exchange from './Components/Exchange';



const httpLink = createHttpLink({
  uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>

      <PortfolioContainer />

    </ApolloProvider>
  );
}

export default App;

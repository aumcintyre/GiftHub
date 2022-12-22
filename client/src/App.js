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
import LoginForm from "./Components/LoginForm";
import Navbar from './Components/Navbar';
import CreateWishlist from './Components/CreateWishlist';
import CreateExchange from './Components/CreateExchange';
import ExchangeCalendar from './Components/Calender';





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
      <Navbar />
      <SignupForm />
      <CreateWishlist/>
      <CreateExchange />
      <ExchangeCalendar />
      <LoginForm />
      
    </ApolloProvider>
  );
}

export default App;

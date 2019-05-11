import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag'
import logo from './logo.svg';
import './App.css';

const GET_USERS = gql`
  query Users {
    users {
      id
      name
      email
    }
  }
`;

const GET_USER = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      name
      email
    }
  }
`;

const CREATE_BOOK = gql`
  mutation CreateBook($name: String!, $author: ID!) {
    createBook(name: $name, author: $author) {
      id
      name
    }
  }
`;

function App() {
  return (
    <div>
      <Query query={GET_USERS}>
        {({ data: { users }, loading, error }) => {
          if (loading) {
            return 'Loading...';
          }
          if(error) {
            return 'Hay un error.'
          }
          return (
            <div>
              {users && users.map(user => (
                <div>{user.name} - {user.email}</div>
              ))}
            </div>
          );
        }}
      </Query>
      <hr />
      <Query query={GET_USER} variables={{ id: "cjviadyi5002w0869i4boarau" }}>
        {({ data: { user }, loading, error }) => {
          if (loading) {
            return 'Loading...';
          }
          if(error) {
            return 'Hay un error.'
          }
          return (
            <div>{user.name} - {user.email}</div>
          );
        }}
      </Query>
      <hr />
      <Mutation mutation={CREATE_BOOK}>
        {(createBook, { loading, error }) => {
          if (loading) {
            return 'Loading...';
          }
          if(error) {
            return 'Hay un error.'
          }
          return (
            <div>
              <button
                onClick={() => createBook({variables: {name: "otro libro", author: "cjviadyi5002w0869i4boarau"}})}>
                Crear Libro
              </button>
            </div>
          );
        }}
      </Mutation>
    </div>
  );
}

export default App;

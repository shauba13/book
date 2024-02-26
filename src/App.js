import React from "react";
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports'; // Import awsconfig from aws-exports.js
import { NavBarHeader2, BookCardCollection } from './ui-components';
import  BookCard  from './ui-components/BookCard';
import { Authenticator } from '@aws-amplify/ui-react';
import './App.css';

Amplify.configure(awsconfig); // Configure Amplify with awsconfig

function App() {
  return (
    <div className="App">
      <NavBarHeader2 />
      <header className="App-header">
        <Authenticator>
          <BookCardCollection />
        </Authenticator>
      </header>
    </div>
  );
}
export default App;
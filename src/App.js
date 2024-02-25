import React, { useState, useEffect } from 'react';
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { Icon, Menu, Dropdown, Card } from 'semantic-ui-react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
function AuthStateApp() {
  document.title = 'Bookstore';
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetchBooks();
  }, []);
  const fetchBooks = async () => {
    try {
      const response = await fetch('https://gykzoe5cfa.execute-api.us-east-1.amazonaws.com/dev');
      const data = await response.json();
      console.log('Books data:', data); // Log the data received from the API
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };
  console.log('Books state:', books); // Log the state variable 'books'
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className='App'>
          <Menu fixed='top' color='teal' inverted>
            <Menu.Menu>
              <Menu.Item header href='/'><Icon name='globe'/>BookStore</Menu.Item>
            </Menu.Menu>
            <Menu.Menu position='right'>
              <Dropdown item simple text={user.username}>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={signOut}><Icon name='power off'/>Log Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
          </Menu>
          <div className='Books'>
            <Card.Group>
              {books.map(book => (
                <Card key={book.bookId}>
                  <Card.Content>
                    <Card.Header>{book.title}</Card.Header>
                    <Card.Meta>
                      <span className='date'>{book.genre.join(', ')}</span>
                    </Card.Meta>
                    <Card.Description>
                      Price: ${book.price}
                    </Card.Description>
                  </Card.Content>
                </Card>
              ))}
            </Card.Group>
          </div>
        </div>
      )}
    </Authenticator>
  );
}
export default AuthStateApp;
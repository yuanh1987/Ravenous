import React from 'react';

import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  render() {
    return (
      <div classNames="App">
      <h1>ravenous</h1>
        <SearchBar />
        <BusinessList />
      </div>
    )
  }
}

export default App;

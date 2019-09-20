import React from "react";
import Header from "./components/Header.js";
import { Route, Link } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';


export default function App() {

  return (
    <main>
      <Header />
      <Link to="/characters">Character List</Link>
      <br />
      <Link to="/">Home</Link>
      <Route exact path='/' component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
    </main>
  );
}

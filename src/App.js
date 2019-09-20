import React from "react";
import Header from "./components/Header.js";
import { Route, Link } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';


export default function App() {
  return (
    <main>
      <Header />

      <Route path='/' component={WelcomePage} />
    </main>
  );
}

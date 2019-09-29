import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character/`)
          .then(response => {
            console.log(response.data.results);
            setCharacter(response.data.results);
          })
          .catch(error => {
            console.log(error);
          })
  }, []);

    const searchCharacter = (characterFilter) => {

      let filteredCharacters = character;
      filteredCharacters = filteredCharacters.filter((character) => {
        let characterName = character.name.toLowerCase()
        return characterName.indexOf(
          characterFilter.toLowerCase() !== -1
        )
      })
      setCharacter(filteredCharacters)
    }

  return (
    <section className="character-list">
      <SearchForm searchCharacter={searchCharacter} />
      <h2>
      {character.map(character => {
        return <CharacterCard key={Math.random()} character={character}/>
      })}
      </h2>
      
    </section>
  );
}

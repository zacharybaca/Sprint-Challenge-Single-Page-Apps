import React from "react";

export default function CharacterCard(props) {
  return <span>
          <ul>
            <li>{props.character.name}</li>
            {props.character.species}
            <br />
            
          </ul>
        </span>;
}

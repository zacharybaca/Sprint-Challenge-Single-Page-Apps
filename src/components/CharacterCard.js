import React from "react";
import styled from 'styled-components';

const Image = styled.img`
  display: flex;
`
const Container = styled.div`
  display: flex;
  border: 2px solid black;
  justify-content: center;
`


export default function CharacterCard(props) {
  return <Container>
          <ul>
            <li>Name: {props.character.name}</li>
            <Image src = {props.character.image} alt="character" />
            Species: {props.character.species}
            <br />
          </ul>
        </Container>;
}

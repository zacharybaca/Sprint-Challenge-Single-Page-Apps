import React, { useState } from "react";
import styled from 'styled-components';

const Form = styled.form`
  margin-top: 20%;
  margin-right: 20%;
`


export default function SearchForm(props) {
 
  const [person, setPerson] = useState({ person: '' })
  
  const onChange = e => {
    setPerson({ person: e.target.value });
  }



  return (
    <section>
     <Form onSubmit={props.searchCharacter}>
        <label for="name">Name</label>
        <input id="name" onChange={onChange} placeholder="Search For Character" type="text" name="name" />
        <button type="submit">Submit</button>
     </Form>
    </section>
  );
}

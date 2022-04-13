import './App.css';
import React, { useState, useEffect } from 'react'

const App = (props) => {
  const [people, setPeople] = useState([]);

  // useEffect(() => {
  //   alert("HELLOOO ")
  // }, [])
  // This effect is called once whenever a webpage is loaded

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(response => response.json())
    .then(response => setPeople(response.results))
  }, []);

  return (
    <div>
        {people.map((person, index)=>{
            return (<div key={index} >
              <li className="pokemons">{person.name}</li>
              </div>)
        })}
    </div>
);

}

export default App;

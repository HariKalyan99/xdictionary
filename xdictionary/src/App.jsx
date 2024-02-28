
import { useRef, useState } from 'react';
import './App.css'



function App() {
  const dictionary = 
  [
  
      { word: "React", meaning: "A JavaScript library for building user interfaces." },
  
      { word: "Component", meaning: "A reusable building block in React." },
  
      { word: "State", meaning: "An object that stores data for a component." }
  
  ];

  const [meaning, setMeaning] = useState("");

  const inputRef = useRef("");

  const searchWord = (e) => {
    e.preventDefault();
    let inp = inputRef.current.value.toLowerCase();

    const foundMeaning = dictionary.find((wordings) => wordings.word.toLowerCase() === inp)
    if(foundMeaning){
      setMeaning(foundMeaning.meaning);
    }else {
      setMeaning("Word not found in the dictionary.")
    }
  }
  

  return (
    <div>
      <h1>Dictionary App</h1>
      <br />
      <form onSubmit={(e) => searchWord(e)}>
      <input type="text" ref={inputRef} placeholder='Search for a word...'/>
      <button type='submit'>Search</button>
      </form>
      <br />
      <h3>Definition:</h3>
      <div>
        <p> {meaning}</p>
      </div>
    </div>
  )
}

export default App

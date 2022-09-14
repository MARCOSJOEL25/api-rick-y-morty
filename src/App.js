import React, { useEffect, useState } from "react";
import NavBar from "./component/NavBar";
import Character from "./component/Character";
import Pagination from "./component/Pagination";

function App() {
  const [character, setcharacter] = useState([]);
  const [info, setinfo] = useState({});
  const API_URL = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (API_URL) => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setinfo(data.info);
        setcharacter(data.results);
      })
      .catch((err) => console.log(err));
  };

  const onPrev = () => {
    fetchCharacters(info.prev);
  };

  const onNext = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters(API_URL);
  }, []);

  return (
    <>
      <NavBar brand="Rick Y Morty App" />
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrev={onPrev}
        onNext={onNext}
      />
      <div className="container mt-3">
        <Character characters={character} />
      </div>
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrev={onPrev}
        onNext={onNext}
      />
    </>
  );
}

export default App;

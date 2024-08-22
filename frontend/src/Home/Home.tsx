/**
 * The Home Page component for the BuddyFinder web applicaiton.
*/

import { useState } from "react";

//CSS styling imports go here
import "./Home.css"

//utility function imports go here

const DogSearchForm = () => {
  const [searchInput, setSearchInput] = useState<string | undefined>(undefined);

  const inputBoxStyle = {
    height: 30,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  };
  const buttonStyle = {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  }

  function handleSearch(event: any) {
    event.preventDefault();
    setSearchInput(event.target.value);
  }

  return (
    <form className="dog-search-form">
      <input
        type="text"
        placeholder="Seach For a Dog Breed"
        onChange={handleSearch}
        value={searchInput}
        style={inputBoxStyle}
      />
      <button
        type="button"
        style={buttonStyle}
      >Search</button>
    </form>
  );
}

const Info = () => {

  return (
    <div className="info-box">
      <p>This is a website to search for dogs to adopt. One dog adoption is one less dog on the streets!</p>
    </div>
  );
}

const Home = () => {

  return (
    <>
      <h1 style={{textAlign: 'center'}}><span className="page-title">Buddy Finder</span></h1>
      <Info />
      <DogSearchForm />
    </>
  );
}

export default Home;
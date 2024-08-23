/**
 * The Home Page component for the BuddyFinder web applicaiton.
*/

import { useEffect, useState } from "react";

//CSS styling imports go here
import "./Home.css"
import { AxiosResponse } from "axios";

//api and request imports go here
import { getAllPetData } from "../services/requests/AdoptAPet";

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
      <p>This is a website to search for dogs to adopt. One dog adoption is one less dog off the streets!</p>
    </div>
  );
}

const PetsInfo = (props: PetInfo[]) => {


  return (
    <>
    </>
  );
}

const Home = () => {
  const [petData, setPetData] = useState<Promise<AxiosResponse> | undefined>(undefined);

  function loadPetData() {
    const response = getAllPetData();

    return response;
  }

  useEffect(() => {
    const petInfo = loadPetData();

    setPetData(petInfo);
  }, []);

  return (
    <>
      <h1 style={{textAlign: 'center'}}><span className="page-title">Buddy Finder</span></h1>
      <Info />
      <DogSearchForm />
      <h2>
        { petData && JSON.stringify(petData) }
      </h2>
    </>
  );
}

export default Home;
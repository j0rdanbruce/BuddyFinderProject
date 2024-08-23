/**
 * The Home Page component for the BuddyFinder web applicaiton.
*/

import { FC, useCallback, useEffect, useState } from "react";

//CSS styling imports go here
import "./Home.css"

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

/*
const PetsInfo: FC<PetsProp> = (props) => {
  const { pets } = props;
  
  const petCards = pets.map((pet: PetInfo, i: number) => (
    <div
      className="pet-info-card"
      key={pet.id}
    >
      <h3>{pet.name}</h3>
    </div>
  ));

  return (
    petCards
  );
}
*/

const PetInfoContainer = () => {

  return (
    <div className="pet-info-container">
      
    </div>
  );
}

const Home = () => {
  const [petData, setPetData] = useState<PetInfo[]>([]);

  const fetchPetData = useCallback( async() => {
    const data = await getAllPetData();
    setPetData(data as PetInfo[]);
  }, []);

  useEffect(() => {

    fetchPetData();
  }, [fetchPetData]);

  return (
    <>
      <h1 style={{textAlign: 'center'}}><span className="page-title">Buddy Finder</span></h1>
      <Info />
      <DogSearchForm />
      {
        petData.map((pet) => {
          return (
            <div className="pet-card" key={pet.id} >
              <h3>{pet.name}</h3>
              <ul>
                <li>{pet.gender}</li>
                <li>{pet.age}</li>
                <li>{pet.primaryBreed}</li>
                <li>{pet.secondaryBreed}</li>
                <li><img src={pet.photo} /></li>
              </ul>
            </div>
          )
        })
      }
    </>
  );
}

export default Home;
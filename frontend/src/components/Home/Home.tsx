/**
 * The Home Page component for the BuddyFinder web applicaiton.
*/

import { FC, useCallback, useEffect, useState } from "react";

//CSS styling imports go here
import "./Home.css"

//component imports go here
import AdvancedSearchForm from "../AdvancedSearchForm/AdvancedSearchForm";

//api and request imports go here
import { getAllPetData } from "../../services/requests/AdoptAPet";

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

const PetCard: FC<PetInfo> = (props) => {
  const {
    id,
    name,
    gender,
    age,
    size,
    primaryBreed,
    secondaryBreed,
    photo
  } = props;
  const styles = {
    bottomContainer: {
      background: gender === "m" ? "blue" : "red",
      boxShadow: gender === "m" ? "4px 4px 10px blue" : "4px 4px 10px red",
    }
  }

  return (
    <div className="pet-card" key={id}>
      <div className="image-container">
        <img className="pet-image" src={photo} />
      </div>
      <div className="main-info-container">
        <h2>{name}</h2>
        <p>Gender: {gender}</p>
        <p>Age: {age}</p>
        <p>Breed: {primaryBreed}</p>
      </div>
      <div className="additional-info-container" style={styles.bottomContainer} >
        <p>working on it</p>
      </div>
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
      <AdvancedSearchForm />
      <div className="card-container">
        {//Map function to create info cards for each pet
          petData.map((pet) => {
            return (
              <PetCard
                id={pet.id} 
                name={pet.name}
                gender={pet.gender}
                age={pet.age}
                size={pet.size}
                primaryBreed={pet.primaryBreed}
                secondaryBreed={pet.secondaryBreed}
                photo={pet.photo}
              />
            )
          })
        }
      </div>
    </>
  );
}

export default Home;
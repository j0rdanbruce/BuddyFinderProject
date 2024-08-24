/**
* Component for the Advanced Search Form to add additional details for pet adoption search.
*/


import { useState } from "react";

//CSS imports go here
import "./AdvancedSearchForm.css";

//api and request imports go here
import { getAdvancedSearch } from "../../services/requests/AdoptAPet";


const AdvancedSearchForm = () => {
  const [searchDetails, setSearchDetails] = useState<AdvancedSearch>({
    species: undefined,
    gender: undefined,
    zipcode: undefined,
    miles: undefined,
    results: undefined
  });


  function handleAdvancedSearch() {
    
  }

  function handleCancelBtnClick() {

  }


 return (
   <form className="search-form">
    <div className="species">
      <label>
        Animal Species: <input
                          type="text"
                          name="species"
                          value={searchDetails.species}
                          placeholder="E.g: dog, cat, lizard, etc."
                          onChange={(event) => {
                            setSearchDetails({
                              ...searchDetails,
                              species: event.target.value
                            })
                          }}/>
      </label>
    </div>
    <div className="gender-btn">
      <label>
        <input type="radio" name="radio-btn" value="m" onChange={(event) => {setSearchDetails({...searchDetails, gender: event.target.value})}} /> Male
      </label>
    </div>
    <div className="gender-btn">
      <label>
        <input type="radio" name="radio-btn" value="f" onChange={(event) => {setSearchDetails({...searchDetails, gender: event.target.value})}} /> Female
      </label>
    </div>
    <div className="gender-btn">
      <label>
        <input type="radio" name="radio-btn" value="both" onChange={(event) => {setSearchDetails({...searchDetails, gender: event.target.value})}} /> Both
      </label>
    </div>
    <div className="zipcode">
      <label>
        Location Origin: <input type="text" name="zipcode" placeholder="Zipcode" onChange={(event) => {setSearchDetails({...searchDetails, zipcode: event.target.value})}} />
      </label>
    </div>
    <div className="miles">
      <label>
        Maximum Distance: 
        <select value={searchDetails.miles} onChange={(event) => {setSearchDetails({...searchDetails, miles: event.target.value})}} >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={25}>25</option>
          <option value={35}>35</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value="unlimited">100+</option>
        </select>
      </label>
    </div>
    <div className="total-results">
      <label>
        Number of Results: 
        <select value={searchDetails.results} onChange={(event) => {setSearchDetails({...searchDetails, results: Number(event.target.value)})}}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
          <option value={50}>50</option>
          <option value={60}>60</option>
          <option value={70}>70</option>
          <option value={80}>80</option>
          <option value={90}>90</option>
          <option value={100}>100</option>
          <option value={200}>200</option>
          <option value={300}>300</option>
        </select>
      </label>
    </div>
    <div className="btn-container">
      <button className="cancel-btn" onClick={handleCancelBtnClick} >Cancel</button><button className="apply-btn" onClick={handleAdvancedSearch}>Search</button>
    </div>
   </form>
 );
}


export default AdvancedSearchForm;

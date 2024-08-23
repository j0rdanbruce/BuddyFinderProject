/**
* Component for the Advanced Search Form to add additional details for pet adoption search.
*/


import { useState } from "react";

//CSS imports go here
import "./AdvancedSearchForm.css";

const AdvancedSearchForm = () => {
 const [searchDetails, setSearchDetails] = useState({});


 function handleAdvancedSearch() {


 }


 return (
   <form className="search-form">
     <div className="species">
       <label>
         Animal Species: <input type="text" name="species" placeholder="E.g: dog, cat, lizard, etc." />
       </label>
     </div>
     <div className="gender-btn">
       <label>
         <input type="radio" name="radio-btn" value="m" /> Male
       </label>
     </div>
     <div className="gender-btn">
       <label>
         <input type="radio" name="radio-btn" value="f" /> Female
       </label>
     </div>
     <div className="total-results">
       <label>
         Number of Results:
         <select>
           <option value={10}></option>
           <option value={20}></option>
           <option value={30}></option>
           <option value={40}></option>
           <option value={50}></option>
           <option value={60}></option>
         </select>
       </label>
     </div>
    
   </form>
 );
}


export default AdvancedSearchForm;

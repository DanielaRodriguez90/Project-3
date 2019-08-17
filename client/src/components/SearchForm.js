import React from "react";


// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="recipe">What Would You Like to Cook?</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="Recipe"
          list="Recipes"
          type="text"
          className="form-control"
          placeholder="Recie LookUp"
          id="recipe"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;

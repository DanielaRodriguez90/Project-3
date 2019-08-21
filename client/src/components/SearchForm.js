import React from "react";

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
          placeholder="Dish"
          id="recipe"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-dark">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;

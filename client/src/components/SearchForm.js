import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="Recipe"
          list="Recipes"
          type="text"
          className="form-control"
          placeholder="What Would You Like to Cook?"
          id="recipe"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-warning btn-block">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;

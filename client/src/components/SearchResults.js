import React from "react";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result} className="list-group-item">
          
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;

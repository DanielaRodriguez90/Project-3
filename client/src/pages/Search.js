import React, { Component } from "react";
import API from "../utils/API";
// import Container from "reactstrap";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
// import Alert from "../components/Alert";

class Search extends Component {
  state = {
    search: "",
    recipes: [],
    results: [],
    error: ""
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getRecipes(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ recipes: res.data, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        {/* <Container style={{ minHeight: "80%" }}> */}
          <h1 className="text-center">Search Recipes</h1>
          {/* <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert> */}
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            recipes={this.state.recipes}
          />
          <SearchResults recipes={this.state.recipes} />
        {/* </Container> */}
      </div>
    );
  }
}

export default Search;

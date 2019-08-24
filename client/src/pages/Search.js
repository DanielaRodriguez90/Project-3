import React, { Component } from "react";
import { Jumbotron, Container } from 'reactstrap';
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

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
          <Jumbotron className="jumbotron" fluid>
            <Container fluid>
              <h1 className="display-3">HomeCooks</h1>
              <p className="text-warning">Search. Cook. Repeat!</p>
            </Container>
          </Jumbotron>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            recipes={this.state.recipes}
          />
          <SearchResults recipes={this.state.recipes} />
      </div>
    );
  }
}

export default Search;

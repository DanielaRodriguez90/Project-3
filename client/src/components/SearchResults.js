import React from "react";
import { Card, Button, CardTitle, CardBody,CardText } from 'reactstrap';

function SearchResults(props) {
  return (
    <div>
    <Card className="card">
        {props.recipes.results? props.recipes.results.map(result => 
        <Card>
            <CardBody>
            <CardTitle className="cardTitle" tag="h2">{result.title}</CardTitle>
            <CardText className="cardText">
            <h3><strong>What You'll Need: </strong></h3>{result.ingredients}</CardText>
            <a href={result.href}>
              <Button size="md" className="btn btn-warning">Cook This!</Button>
            </a>
            <hr/>
          </CardBody>
        </Card>
         ):null}
       
      </Card>
    </div>
  );
}

export default SearchResults;

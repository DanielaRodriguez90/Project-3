import React from "react";
import { Card, Button, CardHeader, CardBody,
  CardTitle, CardText } from 'reactstrap';

function SearchResults(props) {
  return (
    <div>
    <Card>
        {props.recipes.results? props.recipes.results.map(result => 
        <Card>
            <CardBody>
            <CardHeader tag="h3">{result.title}</CardHeader>
            <CardText>{result.ingredients}</CardText>
            <a href={result.href}>
              <Button className="btn btn-dark">Cook This!</Button>
            </a>
          </CardBody>
        </Card>
         ):null}
       
      </Card>
    </div>
  );
}

export default SearchResults;

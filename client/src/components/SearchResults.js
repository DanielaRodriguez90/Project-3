import React from "react";
import { Card, Button, CardHeader, CardBody,
  CardTitle, CardText } from 'reactstrap';

function SearchResults(props) {
  return (
    <div>
    <Card>
        <CardHeader tag="h3">Featured</CardHeader>
        <CardBody>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button className="btn btn-dark">Cook This!</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default SearchResults;

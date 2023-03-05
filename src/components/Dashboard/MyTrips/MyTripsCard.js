import React from "react";
import { Col, Card, Button } from "react-bootstrap";

function MyTripsCard({ setData, obj }) {
  return (
    <Col xs={12} sm={12} md={6} lg={4} className="p-0 my-1 p-3">
      <Card className="border-0" style={{ backgroundColor: "#F7F7F7" }}>
        {console.log(obj)}
        <Card.Body>
          <Card.Title>Trip name: {obj.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Place Name: {obj.loc_name}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            Start date: {obj.start_date}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            End date: {obj.end_date}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            Your Reviews:
          </Card.Subtitle>
          <Card.Text>{obj.feedback === 0 ? "Pending" : "Submitted"}</Card.Text>
          <div className="d-flex align-items-end justify-content-between">
            <Card.Subtitle className=" text-muted">{}</Card.Subtitle>
            <Button
              variant="primary"
              onClick={(e) => {
                console.log();
                setData(obj);
              }}
            >
              Details
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default MyTripsCard;

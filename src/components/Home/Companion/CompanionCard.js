import React, { useContext } from "react";
import { Col, Card, Button, Ratio, Row } from "react-bootstrap";
import { AppBinderContext } from "../../../AppBinderContext";
import axiosInstance from "../../../axiosInstance";

function Companion({ user }) {
  const [themeColors] = useContext(AppBinderContext);
  const arr = Object.keys(themeColors);
  const getColor = () =>
    themeColors[arr[Math.floor(Math.random() * (arr.length - 1))]];

  return (
    <div>
      {/* <Col xs={12} sm={12} md={6} lg={4} className='p-0 my-1 p-3'> */}
      <Card className="border-0 my-2" style={{ backgroundColor: "#F7F7F7" }}>
        {console.log(user.profile_img)}
        <Card.Img
          variant="top"
          className="img-fluid"
          src={
            user.profile_img ||
            "https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg"
          }
        />
        <Card.Body>
          <div className="d-flex justify-content-between flex-column gap-1 mb-3">
            <Card.Title className="fs-4">
              {user.name}, {user.age}
            </Card.Title>
            <Card.Subtitle className="text-muted">{user.home}</Card.Subtitle>
          </div>
          <Card.Text className="d-flex gap-2 align-items-center flex-wrap">
            {user.interests.map((item, key) => (
              <div
                className="border border-2 p-1 rounded-5"
                key={key}
                style={{ backgroundColor: getColor(), color: "white" }}
              >
                {item}
              </div>
            ))}
          </Card.Text>
          <div className="d-flex flex-column gap-2 mt-4">
            <Button
              variant=""
              className="btn btn-warning"
              onClick={(e) => {
                axiosInstance
                  .post("/send-request/", {
                    data: {
                      uid: JSON.parse(sessionStorage.getItem("user_data")).id,
                      email: user.email,
                    },
                  })
                  .then((res) => {
                    window.location.reload();
                  });
              }}
            >
              Connect
            </Button>
            <Button variant="" className="btn btn-danger">
              Block
            </Button>
          </div>
        </Card.Body>
      </Card>
      {/* </Col> */}
    </div>
  );
}

export default Companion;

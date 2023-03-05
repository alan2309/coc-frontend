import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import axiosInstance from "../../../axiosInstance";

const Notification = () => {
  const [pending_req, setPending_req] = useState([]);
  useEffect(() => {
    axiosInstance
      .post("/notifications/", { data: { uid: 3 } })
      .then((res) => {
        console.log(res);
        setPending_req(res.data.reqs);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {};
  }, []);

  const dummyNotif = [];
  return (
    <>
      <Container>
        <h1 className="display-2 text-center fw-bold my-5">My Notifications</h1>
        <div className="d-flex flex-column gap-3">
          <Container className="p-0">
            <Row>
              {/* Map here */}
              {pending_req?.length > 0 &&
                pending_req.map((res) => {
                  return (
                    <Col xs={12} sm={6} md={4} lg={4} className="p-2">
                      <div
                        className="m-2 py-3 rounded row"
                        style={{ backgroundColor: "#F7F7F7" }}
                      >
                        <div className="rounded-5 col-6">
                          <Image
                            className="img-fluid"
                            rounded
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBv1NvQoim7kfx9qVxorSXLq_gY_6hW3g1mw&usqp=CAU"
                            alt=""
                            srcset=""
                          />
                        </div>
                        <div className="col-6 d-flex flex-column justify-content-between align-items-center h-100 gap-5">
                          <div className="display-6">{res.name}</div>
                          <div className="d-flex align-items-center justify-content-between gap-5">
                            <i
                              className="fa-2xl fa-solid fa-circle-check"
                              onClick={(e) => {
                                axiosInstance
                                  .post("/accept-request/", {
                                    data: { uid: JSON.parse(sessionStorage.getItem("user_data"))?.id, email: res.email },
                                  })
                                  .then((res) => {

                                    axios.post("https://localhost:5000/api/addFriend/",{myemail:JSON.parse(sessionStorage.getItem("user_data"))?.email,email:res.email})
                                    console.log(res.data);
                                  })
                                  .catch((err) => {
                                    console.log(err);
                                  });
                              }}
                            ></i>
                            <i className="fa-2xl fa-solid fa-circle-xmark"></i>
                          </div>
                        </div>
                      </div>
                    </Col>
                  );
                })}
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default Notification;

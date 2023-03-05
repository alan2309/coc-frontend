import React, { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import ChatContainer from "../Chat/Chat-Components/ChatContainer";
import Contacts from "../Chat/Chat-Components/Contacts";
import Welcome from "../Chat/Chat-Components/Welcome.jsx";
import { AppBinderContext } from "../../AppBinderContext";

export default function Chat() {
    const [themeColors]=useContext(AppBinderContext)
  const navigate = useNavigate();
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  async function newreuse() {
    if (!sessionStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          username: "hetvi",
          password: "password@123",
        }
      );
      if (data.status === false) {
        //toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        sessionStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );

        //navigate("/");
      }
    } else {
      setCurrentUser(
        await JSON.parse(
          sessionStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
        )
      );
    }
  }
  useEffect(() => {
    console.log(!sessionStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY));
    newreuse();
  }, []);
  useEffect(() => {
    if (currentUser) {
      socket.current = io("http://localhost:5000");
      socket.current.emit("add-user", currentUser._id);
    }
  }, [currentUser]);

  async function reUSe() {
    if (currentUser) {
      //if (currentUser.isAvatarImageSet) {
      const data = await axios.get(
        `http://localhost:5000/api/auth/getAllFrndsUsers/${currentUser._id}`
      );
      setContacts(data.data);
      //} else {
      //  navigate("/setAvatar");
      //}
    }
  }
  useEffect(() => {
    reUSe();
  }, [currentUser]);
  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };
  return (
    <>
      <Container id="chatid">
        <div className="container">
          <Contacts contacts={contacts} changeChat={handleChatChange} />
          {currentChat === undefined ? (
            <Welcome />
          ) : (
            <ChatContainer currentChat={currentChat} socket={socket} />
          )}
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: white;
  .container {
    height: 85vh;
    background-color: light-grey;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;

import React from "react";
import { Container } from "react-bootstrap";

const Message = () => {
  return (
    <div
      style={{
        background: "rgb(39, 39, 39)",
        paddingBottom: "75%"
      }}
    >
      <Container>
        <p className="msg">CLICK GET USERS TO GET MY TEAM'S DATA</p>
      </Container>
    </div>
  );
};

export default Message;

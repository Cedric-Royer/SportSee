import React from "react";
import "./HelloMessage.scss";

const HelloMessage = ({ firstName }) => (
  <p className="hello-message">
    <span>Bonjour</span>
    <span className="hello-message__name">{firstName}</span>
  </p>
);

export default HelloMessage;

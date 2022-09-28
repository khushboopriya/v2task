import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import ShareButton from "./ShareButton";
import Card from "./Card";

const MainPage = () => {
  const [message, setMessage] = useState("Click On Share Button");
  const [showCard, setShowCard] = useState(false);

  const shareClicked = () => {
    setMessage("click on input field to add people, email, groups");
    setShowCard(!showCard);
  };

  return (
    <>
      <Typography> {message} </Typography>
      <ShareButton shareClicked={shareClicked} />
      <br />
      <br />
      {showCard && <Card />}
    </>
  );
};

export default MainPage;

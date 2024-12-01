import { useState } from "react";

import "./App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

function App() {
  const firstname = "Prince";
  return (
    <div className="text-center text-success">
      <Card style={{ width: "70rem", border: "4px solid black" }}>
        <Name />
        <Price />
        <Description />
        <Image />
      </Card>

      {/* greeting messag */}
      <div>
        <h2>Hello, {firstname ? firstname : "there"}!!</h2>
        {firstname && (
          <img
            className=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
            alt="profile"
          />
        )}
      </div>
    </div>
  );
}

export default App;

<Card style={{ width: "18rem" }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>;

import React from "react";
import { Container, Button } from "reactstrap";
import "./OrderComplete.css";
import { useHistory } from "react-router-dom";

const OrderComplete = ({ order }) => {
  const history = useHistory();

  const handleClick = (e) => {
    history.push("/");
  };

  return (
    <div>
      {order ? (
        <Container className="complete-container">
          <h1>Your Order Has Been Made!</h1>
          <h2>Name: {order.name}</h2>
          <h2>Order Number: {order.id}</h2>
          <h2>Sauce: {order.sauce}</h2>
          <h2>Size: {order.size}</h2>
          {order.instructions.length > 0 ? (
            <h2>Instructions: {order.instructions}</h2>
          ) : null}
          <Button color="success" onClick={handleClick} className="btn-home">
            Home
          </Button>
        </Container>
      ) : (
        <h1>There was an issue with your order, please try again...</h1>
      )}
    </div>
  );
};

export default OrderComplete;

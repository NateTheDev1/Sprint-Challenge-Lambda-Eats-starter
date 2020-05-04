import React from "react";
import "./Home.css";
import { Container, Button } from "reactstrap";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const handleClick = (e) => {
    history.push("/pizza");
  };

  return (
    <div className="header">
      <img
        className="header-img"
        src="https://images.unsplash.com/photo-1517685645259-c6caddb7165d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
      />
      <div className="top-home">
        <h1 className="lead-title">
          Your favorite food, delivered while coding
        </h1>
        <Button color="danger" className="btn" onClick={handleClick}>
          Pizza?
        </Button>
      </div>
    </div>
  );
};

export default Home;

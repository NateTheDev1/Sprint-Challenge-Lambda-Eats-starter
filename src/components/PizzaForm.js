import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { Container, Input, Form, FormGroup, Label, Button } from "reactstrap";
import axios from "axios";
import "./PizzaForm.css";
import { useHistory } from "react-router-dom";

const PizzaForm = ({ setOrder }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const [post, setPost] = useState([]);

  const [formState, setFormState] = useState({
    size: "Small",
    sauce: "Alfredo",
    name: "",
    instructions: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errors, setErrors] = useState({
    size: "",
    sauce: "",
    name: "",
    instructions: "",
  });

  const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field").min(2),
    instructions: yup.string(),
    sauce: yup.string(),
    size: yup.string(),
  });

  const validateChange = (e) => {
    if (e.target.type !== "checkbox") {
      yup
        .reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then((valid) => {
          setErrors({ ...errors, [e.target.name]: "" });
        })
        .catch((err) => {
          console.log("error!", err);
          setErrors({ ...errors, [e.target.name]: err.errors[0] });
        });
    }
  };

  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      console.log("valid?", valid);
      setIsButtonDisabled(!valid);
    });
  }, [formState]);

  const inputChange = (e) => {
    console.log("input changed!", e.target.value);
    e.persist();
    if (e.target.type === "checkbox") {
      validateChange(e);
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    } else {
      validateChange(e);
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://reqres.in/api/users", formState)
      .then((response) => {
        setPost(response.data);
        console.log(response.data);
        setFormState({
          size: "Small",
          sauce: "Alfredo",
          name: "",
          instructions: "",
        });
        setTimeout(() => {
          setLoading(false);
          setOrder(response.data);
          history.push("/completed");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {loading ? (
        <h1 className="loading">Loading</h1>
      ) : (
        <Container className="form-container">
          <div className="form-header">
            <h2>Build Your Own Pizza</h2>
          </div>
          <Form onSubmit={formSubmit}>
            <FormGroup>
              <Label for="size" className="choice-header">
                Choice of Size
              </Label>
              <p className="required">Required</p>
              <Input type="select" name="size" id="size" onChange={inputChange}>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="sauce" className="choice-header">
                Choice of Sauce
              </Label>
              <p className="required">Required</p>
              <Input
                type="select"
                name="sauce"
                id="sauce"
                onChange={inputChange}
              >
                <option value="Marinara">Marinara</option>
                <option value="Alfredo">Alfredo</option>
                <option value="BBQ">BBQ</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="toppings" className="choice-header">
                Add Toppings
              </Label>
              <p className="required">Required</p>
              <div className="toppings">
                <FormGroup check inline>
                  <Label for="pepperoni" className="toppings-label">
                    Pepperoni
                  </Label>
                  <Input
                    type="checkbox"
                    name="pepperoni"
                    onChange={inputChange}
                  />
                </FormGroup>
                <FormGroup check inline>
                  <Label for="chicken" className="toppings-label">
                    Chicken
                  </Label>
                  <Input
                    type="checkbox"
                    name="chicken"
                    onChange={inputChange}
                  />
                </FormGroup>
                <FormGroup check inline>
                  <Label for="sausage" className="toppings-label">
                    Sausage
                  </Label>
                  <Input
                    type="checkbox"
                    name="sausage"
                    onChange={inputChange}
                  />
                </FormGroup>
                <FormGroup check inline>
                  <Label for="mushroom" className="toppings-label">
                    Mushroom
                  </Label>
                  <Input
                    type="checkbox"
                    name="mushroom"
                    onChange={inputChange}
                  />
                </FormGroup>
                <FormGroup check inline>
                  <Label for="onion" className="toppings-label">
                    Onion
                  </Label>
                  <Input type="checkbox" name="onion" onChange={inputChange} />
                </FormGroup>
                <FormGroup check inline>
                  <Label for="green-peppers" className="toppings-label">
                    Green Peppers
                  </Label>
                  <Input
                    type="checkbox"
                    name="green-peppers"
                    onChange={inputChange}
                  />
                </FormGroup>
                <FormGroup check inline>
                  <Label for="black-olives" className="toppings-label">
                    Black Olives
                  </Label>
                  <Input
                    type="checkbox"
                    onChange={inputChange}
                    name="black-olives"
                  />
                </FormGroup>
                <FormGroup check inline>
                  <Label for="tomato" className="toppings-label">
                    Tomato
                  </Label>
                  <Input type="checkbox" name="tomato" onChange={inputChange} />
                </FormGroup>
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="info" className="choice-header">
                Additional Information
              </Label>
              <p className="required">Required</p>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                value={formState.name}
                onChange={inputChange}
              />
              {errors.name.length > 0 ? (
                <p className="error">{errors.name}</p>
              ) : null}
              <FormGroup style={{ marginTop: "3%" }}>
                <Label for="instructions">Instructions</Label>
                <Input
                  type="textarea"
                  name="instructions"
                  id="instructions"
                  placeholder="What would you like..?"
                  value={formState.instructions}
                  onChange={inputChange}
                />
              </FormGroup>
            </FormGroup>
            <Button
              color="success"
              type="submit"
              className="form-submit"
              disabled={isButtonDisabled}
            >
              Add To Order $17.99
            </Button>
          </Form>
        </Container>
      )}
    </div>
  );
};

export default PizzaForm;

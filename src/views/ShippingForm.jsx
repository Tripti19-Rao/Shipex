import { React, useState } from "react";
import { MDBRow, MDBCol, MDBBtn, MDBCard } from "mdbreact";
import axios from "axios";

function ShippingForm() {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState(1);
  const [color, setColor] = useState("#3F51B5");
  const [country, setCountry] = useState("Sweden");
  
  const cardstyle = {
    width: "500px",
    left: "50%",
    top: "50%",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    padding: "10px",
  };

  const sabmitHandler = async (event) => {
    event.preventDefault();

    if (name === "" || weight === "" || color === "" || country === "") {
      alert("Please fill all the feilds");
      return;
    }
    event.target.className += " was-validated";
    const multiplier = {
      Sweden: 11.42,
      China: 8.71,
      Brazil: 7.43,
      Australia: 1.83,
    };
    const cost = (multiplier[country] * weight).toFixed(2);

    const order = {
      name: name,
      weight: weight,
      color: color,
      country: country,
      cost: cost,
    };
    try {
      await axios.post("http://localhost:5000/create", order);
      alert("Order created succcesfully");
    } catch (err) {
      console.log(err);
      alert("Error in creating the order");
    }
  };
  return (
    <div>
      <MDBCard style={cardstyle}>
        <form className="needs-validation" noValidate onSubmit={sabmitHandler}>
          <MDBRow>
            <MDBCol md="12" className="mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => setName(event.target.value)}
                required
                id="name"
                value={name}
              />
            </MDBCol>
            <MDBCol md="12" className="mb-3">
              <label>Weight(kg)</label>
              <input
                type="number"
                className="form-control"
                onChange={(event) => setWeight(event.target.value)}
                required
                value={weight}
                min="0"
              />
            </MDBCol>
            <MDBCol md="12" className="mb-3">
              <label>Box Color</label>
              <input
                type="color"
                className="form-control"
                onChange={(event) => setColor(event.target.value)}
                required
                value={color}
              />
            </MDBCol>
            <MDBCol md="12" className="mb-3">
              <label>Destination Country</label>
              <select
                className="browser-default custom-select"
                onChange={(event) => setCountry(event.target.value)}
                required
                value={country}
              >
                <option value="Sweden" default>
                  Sweden
                </option>
                <option value="China">China</option>
                <option value="Brazil">Brazil</option>
                <option value="Australia">Australia</option>
              </select>
            </MDBCol>
            <MDBCol md="12" className="mb-3">
              <MDBBtn color="indigo" type="submit">
                Save
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBCard>
    </div>
  );
}

export default ShippingForm;

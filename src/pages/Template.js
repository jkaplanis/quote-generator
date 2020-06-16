import React, { useState, useEffect } from "react";
import { Grid, Image, Input, Form } from "semantic-ui-react";
import html2canvas from "html2canvas";
import jsPdf from "jspdf";

function Template() {
  const [formState, setFormState] = useState({
    sellerName: "",
    sellerPhone: "",
    sellerEmail: "",
    reference: "",
    clientName: "",
    clientPhone: "",
    clientEmail: "",
    quoteType: "",
    quoteCost: "",
    aircratType: "",
    departAirport: "",
    departDate: "",
    departTime: "",
    arriveAirport: "",
    arriveDate: "",
    arriveTime: "",
    distance: "",
    flightTime: "",
    paxCount: 0
  });

  const renderOptions = () => {
    let options = [];
    for (let i = 1; i <= 200; i++) {
      options.push({ key: i, text: i, value: i });
    }
    return options;
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={5}>
          <Image
            style={{ maxWidth: "150px" }}
            src="https://www.getlivewire.com/wp-content/uploads/2018/10/Your-Logo-here.png"
          />
        </Grid.Column>
        {/* Seller Contact Info */}
        <Grid.Column floated="right" width={5}>
          <Input
            placeholder="Your Name"
            name="sellerName"
            type="text"
            id="sellerName"
            onChange={handleChange}
          />
          <Input
            placeholder="Your Phone Number"
            name="sellerPhone"
            type="text"
            id="sellerPhone"
            onChange={handleChange}
          />
          <Input
            placeholder="Your Email"
            name="sellerEmail"
            type="email"
            id="sellerEmail"
            onChange={handleChange}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={2}>Reference</Grid.Column>
        <Grid.Column width={14}>
          {" "}
          <Input
            placeholder="Reference Number"
            name="reference"
            type="text"
            id="reference"
            onChange={handleChange}
          />{" "}
          June 15, 2020 3:33pm
        </Grid.Column>
      </Grid.Row>
      {/* Client Contact Info */}
      <Grid.Row>
        <Grid.Column width={2}>Prepared for</Grid.Column>
        <Grid.Column width={14}>
          <Input
            placeholder="Client Name"
            name="clientName"
            type="text"
            id="clientName"
            onChange={handleChange}
          />
          <Input
            placeholder="Client Phone Number"
            name="clientPhone"
            type="text"
            id="clientPhone"
            onChange={handleChange}
          />
          <Input
            placeholder="Your Email"
            name="clientEmail"
            type="email"
            id="clientEmail"
            onChange={handleChange}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={2}>Quote</Grid.Column>
        <Grid.Column width={8}>Total aircraft cost</Grid.Column>
        <Grid.Column width={6}>
          <Input
            placeholder="$ Cost"
            name="quoteCost"
            type="number"
            id="quoteCost"
            onChange={handleChange}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ textAlign: "right" }} width={10}>
          Total
        </Grid.Column>
        <Grid.Column width={6}>${formState.quoteCost}</Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={2}>Aircraft</Grid.Column>
        <Grid.Column width={14}>
          {" "}
          <Input
            placeholder="Aircraft"
            name="aircratType"
            type="text"
            id="aircratType"
            onChange={handleChange}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{ fontWeight: "bold" }}>
        <Grid.Column width={2}></Grid.Column>
        <Grid.Column width={4}> Depart/Arrive</Grid.Column>
        <Grid.Column width={2}>Date</Grid.Column>
        <Grid.Column width={2}>Local Time</Grid.Column>
        <Grid.Column width={2}>Distance</Grid.Column>
        <Grid.Column width={2}>Flight Time</Grid.Column>
        <Grid.Column width={2}>Passenger Count</Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={2}>Itinerary</Grid.Column>
        <Grid.Column width={4}>
          <Input
            placeholder="Origin Airport"
            name="departAirport"
            type="text"
            id="departAirport"
            onChange={handleChange}
          />
        </Grid.Column>
        <Grid.Column width={2}>June 23, 2020</Grid.Column>
        <Grid.Column width={2}>9:00AM PDT</Grid.Column>
        <Grid.Column width={2}>
          {" "}
          <Input
            placeholder="Nautical Miles"
            name="distance"
            type="number"
            id="distance"
            onChange={handleChange}
          />
        </Grid.Column>
        <Grid.Column width={2}>
          {" "}
          <Input
            placeholder="Hr:Min"
            name="flightTime"
            type="text"
            id="flightTime"
            onChange={handleChange}
          />
        </Grid.Column>
        <Grid.Column width={2}>
          {" "}
          <Form.Select
            fluid
            name="paxCount"
            id="paxCount"
            options={renderOptions()}
            placeholder="0"
            onChange={handleChange}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={2}></Grid.Column>
        <Grid.Column width={4}>
          {" "}
          <Input
            placeholder="Destination Airport"
            name="arriveAirport"
            type="text"
            id="arriveAirport"
            onChange={handleChange}
          />
        </Grid.Column>
        <Grid.Column width={2}>June 23, 2020</Grid.Column>
        <Grid.Column width={2}>5:33PM EDT</Grid.Column>
        <Grid.Column width={2}></Grid.Column>
        <Grid.Column width={2}></Grid.Column>
        <Grid.Column width={2}></Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Template;

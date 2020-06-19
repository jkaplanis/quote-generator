import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { Grid, Image, Input, Form, Button } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import Pdf from "./PrintReadyPdf";

import "react-datepicker/dist/react-datepicker.css";

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
    aircraftType: "",
    departAirport: "",
    departDate: new Date(),
    departTime: new Date(),
    arriveAirport: "",
    arriveDate: new Date(),
    arriveTime: new Date(),
    distance: "",
    flightTime: "",
    paxCount: ""
  });

  const history = useHistory();

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const renderPdf = () => {
    history.push({ pathname: "/print", formState });
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
            placeholder="Client Email"
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
        <Grid.Column width={2}>
          <DatePicker
            selected={formState.departDate}
            onChange={date => setFormState({ ...formState, departDate: date })}
            dateFormat="MMMM d, yyyy"
          />
        </Grid.Column>
        <Grid.Column width={2}>
          <DatePicker
            selected={formState.departTime}
            onChange={time => setFormState({ ...formState, departTime: time })}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={1}
            timeCaption="Time"
            dateFormat="h:mm aa"
          />
        </Grid.Column>
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
          <Input
            name="paxCount"
            id="paxCount"
            type="number"
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
        <Grid.Column width={2}>
          <DatePicker
            selected={formState.arriveDate}
            onChange={date => setFormState({ ...formState, arriveDate: date })}
            dateFormat="MMMM d, yyyy"
          />
        </Grid.Column>
        <Grid.Column width={2}>
          <DatePicker
            selected={formState.arriveTime}
            onChange={time => setFormState({ ...formState, arriveTime: time })}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={1}
            timeCaption="Time"
            dateFormat="h:mm aa"
          />
        </Grid.Column>
        <Grid.Column width={2}></Grid.Column>
        <Grid.Column width={2}></Grid.Column>
        <Grid.Column width={2}></Grid.Column>
      </Grid.Row>
      <Button positive onClick={renderPdf}>
        Create PDF
      </Button>
    </Grid>
  );
}

export default Template;

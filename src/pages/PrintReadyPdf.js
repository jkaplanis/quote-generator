import React from "react";
import { Grid, Image } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

function Pdf() {
  const history = useHistory();
  const userInput = history.location.formState;
  console.log(history.location.formState);
  // console.log(history.location.formState.departTime.getHours());

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={5}>
          <Image
            style={{ maxWidth: "150px" }}
            src="https://www.getlivewire.com/wp-content/uploads/2018/10/Your-Logo-here.png"
          />
        </Grid.Column>
        <Grid.Column floated="right" width={5}>
          <p>{userInput.sellerName}</p>
          <p>Phone: {userInput.sellerPhone}</p>
          <p>
            Email: <a href="mailto:john@company.com">{userInput.sellerEmail}</a>
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={2}>Reference</Grid.Column>
        <Grid.Column width={14}>{userInput.reference}</Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={2}>Prepared for</Grid.Column>
        <Grid.Column width={14}>
          <p>{userInput.clientName}</p>
          <p>P: {userInput.clientPhone}</p>
          <p>{userInput.clientEmail}</p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={2}>Quote</Grid.Column>
        <Grid.Column width={8}>Total aircraft cost</Grid.Column>
        <Grid.Column width={6}>{userInput.quoteCost}</Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ textAlign: "right" }} width={10}>
          Total
        </Grid.Column>
        <Grid.Column width={6}>{userInput.quoteCost}</Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={2}>Aircraft</Grid.Column>
        <Grid.Column width={14}>{userInput.aircraftType}</Grid.Column>
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
        <Grid.Column width={4}>{userInput.departAirport}</Grid.Column>
        <Grid.Column width={2}>June 23, 2020</Grid.Column>
        <Grid.Column width={2}>9:00AM PDT</Grid.Column>
        <Grid.Column width={2}>{userInput.distance} nm</Grid.Column>
        <Grid.Column width={2}>{userInput.flightTime}</Grid.Column>
        <Grid.Column width={2}>{userInput.paxCount} PAX</Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={2}></Grid.Column>
        <Grid.Column width={4}> {userInput.arriveAirport}</Grid.Column>
        <Grid.Column width={2}>June 23, 2020</Grid.Column>
        <Grid.Column width={2}>5:33PM EDT</Grid.Column>
        <Grid.Column width={2}></Grid.Column>
        <Grid.Column width={2}></Grid.Column>
        <Grid.Column width={2}></Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Pdf;

import React from "react";
import { Grid, Image } from "semantic-ui-react";

function Pdf() {
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
          <p>John Smith</p>
          <p>Phone: 555-555-5555</p>
          <p>
            Email: <a href="mailto:john@company.com">john@company.com</a>
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={2}>Reference</Grid.Column>
        <Grid.Column width={14}>EE-1449 June 15, 2020 3:33pm</Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={2}>Prepared for</Grid.Column>
        <Grid.Column width={14}>
          <p>Mary Customer</p>
          <p>P: 555-123-4567</p>
          <p>mary@customer.com</p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={2}>Quote</Grid.Column>
        <Grid.Column width={8}>Total aircraft cost</Grid.Column>
        <Grid.Column width={6}>$42,123</Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ textAlign: "right" }} width={10}>
          Total
        </Grid.Column>
        <Grid.Column width={6}>$42,123</Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={2}>Aircraft</Grid.Column>
        <Grid.Column width={14}> Gulfstream G650</Grid.Column>
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
        <Grid.Column width={4}>VAN NUYS, California, US (KVNY)</Grid.Column>
        <Grid.Column width={2}>June 23, 2020</Grid.Column>
        <Grid.Column width={2}>9:00AM PDT</Grid.Column>
        <Grid.Column width={2}>2,8301 nm</Grid.Column>
        <Grid.Column width={2}>5:33</Grid.Column>
        <Grid.Column width={2}>6 PAX</Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={2}></Grid.Column>
        <Grid.Column width={4}> TETORBORO, New Jersey, US (KTEB)</Grid.Column>
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

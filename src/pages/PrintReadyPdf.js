import React from "react";
import { Grid, Image, Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPdf from "jspdf";

function Pdf() {
  const history = useHistory();
  const userInput = history.location.formState;

  //convert military time to standard
  const convertTime = time => {
    const hours = time.getHours();
    let minutes = time.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (hours < 12) {
      return `${hours}:${minutes}AM`;
    } else if (hours === 12) {
      return `${hours}:${minutes}PM`;
    } else if (hours > 12) {
      const standardHours = hours - 12;
      return `${standardHours}:${minutes}PM`;
    }
  };

  const printPdf = () => {
    const domElement = document.getElementById("page");
    html2canvas(domElement, {
      onclone: document => {
        document.getElementById("print-button").style.visibility = "hidden";
      }
    }).then(canvas => {
      console.log(canvas);
      const img = canvas.toDataURL("image/png");
      const pdf = new jsPdf();
      pdf.addImage(img, "JPEG", 0, 0);
      pdf.save("your-filename.pdf");
    });
  };

  return (
    <Grid id="page">
      <Grid.Row>
        <Grid.Column width={5}>
          <Image style={{ maxHeight: "150px" }} src={userInput.sellerLogo} />
        </Grid.Column>
        <Grid.Column floated="right" width={5}>
          <p>{userInput.sellerName}</p>
          <p>Phone: {userInput.sellerPhone}</p>
          <p>
            Email:{" "}
            <a href={`mailto:${userInput.sellerEmail}`}>
              {userInput.sellerEmail}
            </a>
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
        <Grid.Column width={2}>
          {convertTime(userInput.departTime)} PDT
        </Grid.Column>
        <Grid.Column width={2}>{userInput.distance} nm</Grid.Column>
        <Grid.Column width={2}>{userInput.flightTime}</Grid.Column>
        <Grid.Column width={2}>{userInput.paxCount} PAX</Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={2}></Grid.Column>
        <Grid.Column width={4}> {userInput.arriveAirport}</Grid.Column>
        <Grid.Column width={2}>June 23, 2020</Grid.Column>
        <Grid.Column width={2}>
          {convertTime(userInput.arriveTime)} EDT
        </Grid.Column>
        <Grid.Column width={2}></Grid.Column>
        <Grid.Column width={2}></Grid.Column>
        <Grid.Column width={2}></Grid.Column>
      </Grid.Row>
      <Button positive id="print-button" onClick={printPdf}>
        Save PDF
      </Button>
    </Grid>
  );
}

export default Pdf;

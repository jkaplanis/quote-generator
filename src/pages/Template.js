import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Image, Input, Button, Icon } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import API from "../utils/API";

function Template() {
  const [formState, setFormState] = useState({
    airportCodes: [],
    sellerLogo: "",
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
  const [itinerary, setItinerary] = useState([
    {
      departAirport: "",
      departDate: new Date(),
      departTime: new Date(),
      arriveAirport: "",
      arriveDate: new Date(),
      arriveTime: new Date(),
      distance: "",
      flightTime: "",
      paxCount: ""
    }
  ]);

  // API call to retrieve airport codes and save them to state
  useEffect(() => {
    API.getAirports().then(res => {
      if (!res) {
        console.log("No airports returned from database");
      } else {
        setFormState({ ...formState, airportCodes: res.data });
      }
    });
  }, []);

  // render dropdown options for airport selection
  function renderAiportOptions() {
    return formState.airportCodes.map(airport => {
      if (airport.airportName === "N/A") {
        return (
          <option
            key={airport._id}
            value={`${airport.city}, ${airport.country} (${airport.icaoCode})`}
          />
        );
      } else {
        return (
          <option
            key={airport._id}
            value={`${airport.city}, ${airport.country} (${airport.icaoCode} - ${airport.airportName})`}
          />
        );
      }
    });
  }

  const history = useHistory();
  const todaysDate = new Date().toDateString();

  // update state with user input
  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleItineraryUpdate = (e, index) => {
    const { name, value } = e.target;
    const itineraryData = [...itinerary];
    itineraryData[index][name] = value;
    setItinerary(itineraryData);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setItinerary([
      ...itinerary,
      {
        departAirport: "",
        departDate: new Date(),
        departTime: new Date(),
        arriveAirport: "",
        arriveDate: new Date(),
        arriveTime: new Date(),
        distance: "",
        flightTime: "",
        paxCount: ""
      }
    ]);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const itineraryData = [...itinerary];
    itineraryData.splice(index, 1);
    setItinerary(itineraryData);
  };

  // display user logo and update state
  const handleImgUpload = event => {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
      //add the image file to state
      setFormState({
        ...formState,
        sellerLogo: e.target.result
      });
    };
    reader.readAsDataURL(file);
  };

  //render pdf upon user clicking create PDF button
  const renderPdf = () => {
    history.push({ pathname: "/print", formState, itinerary });
  };

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={5}>
          <div>
            <Input
              type="file"
              name="sellerLogo"
              onChange={e => handleImgUpload(e)}
            ></Input>
          </div>
          <Image style={{ maxHeight: "150px" }} src={formState.sellerLogo} />
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
        <Grid.Column className="label" width={2}>
          Reference
        </Grid.Column>
        <Grid.Column width={14}>
          {" "}
          <Input
            placeholder="Reference Number"
            name="reference"
            type="text"
            id="reference"
            onChange={handleChange}
          />
          {`${todaysDate}`}
        </Grid.Column>
      </Grid.Row>
      {/* Client Contact Info */}
      <Grid.Row>
        <Grid.Column className="label" width={2}>
          Prepared for
        </Grid.Column>
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
        <Grid.Column className="label" width={2}>
          Quote
        </Grid.Column>
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
        <Grid.Column className="label" width={2}>
          Aircraft
        </Grid.Column>
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
      {itinerary.map((x, index) => {
        return (
          <>
            <Grid.Row>
              <Grid.Column className="label" width={2}>
                {itinerary.length === 1 ? (
                  "Itinerary"
                ) : (
                  <Icon
                    onClick={() => handleRemoveClick(index)}
                    name="delete"
                    color="red"
                  />
                )}
              </Grid.Column>
              <Grid.Column width={4}>
                <div>
                  <Input
                    placeholder="Origin Airport"
                    name="departAirport"
                    type="text"
                    id="departAirport"
                    list="airports"
                    value={x.departAirport}
                    onChange={e => handleItineraryUpdate(e, index)}
                  />
                  <datalist id="airports">{renderAiportOptions()}</datalist>
                </div>
              </Grid.Column>
              <Grid.Column width={2}>
                <DatePicker
                  selected={x.departDate}
                  onChange={date => {
                    const itineraryData = [...itinerary];
                    itineraryData[index]["departDate"] = date;
                    setItinerary(itineraryData);
                  }}
                  dateFormat="MMMM d, yyyy"
                />
              </Grid.Column>
              <Grid.Column width={2}>
                <DatePicker
                  selected={x.departTime}
                  onChange={time => {
                    const itineraryData = [...itinerary];
                    itineraryData[index]["departTime"] = time;
                    setItinerary(itineraryData);
                  }}
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
                  value={x.distance}
                  onChange={e => handleItineraryUpdate(e, index)}
                />
              </Grid.Column>
              <Grid.Column width={2}>
                {" "}
                <Input
                  placeholder="Hr:Min"
                  name="flightTime"
                  type="text"
                  id="flightTime"
                  value={x.flightTime}
                  onChange={e => handleItineraryUpdate(e, index)}
                />
              </Grid.Column>
              <Grid.Column width={2}>
                <Input
                  name="paxCount"
                  id="paxCount"
                  type="number"
                  placeholder="0"
                  value={x.paxCount}
                  onChange={e => handleItineraryUpdate(e, index)}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={2}></Grid.Column>
              <Grid.Column width={4}>
                <div>
                  <Input
                    placeholder="Destination Airport"
                    name="arriveAirport"
                    type="text"
                    id="arriveAirport"
                    list="airports"
                    value={x.arriveAirport}
                    onChange={e => handleItineraryUpdate(e, index)}
                  />
                  <datalist id="airports">{renderAiportOptions()}</datalist>
                </div>
              </Grid.Column>
              <Grid.Column width={2}>
                <DatePicker
                  selected={x.arriveDate}
                  onChange={date => {
                    const itineraryData = [...itinerary];
                    itineraryData[index]["arriveDate"] = date;
                    setItinerary(itineraryData);
                  }}
                  dateFormat="MMMM d, yyyy"
                />
              </Grid.Column>
              <Grid.Column width={2}>
                <DatePicker
                  selected={x.arriveTime}
                  onChange={time => {
                    const itineraryData = [...itinerary];
                    itineraryData[index]["arriveTime"] = time;
                    setItinerary(itineraryData);
                  }}
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
            </Grid.Row>{" "}
          </>
        );
      })}
      <Button positive onClick={renderPdf}>
        Create PDF
      </Button>
      <Button positive onClick={handleAddClick}>
        Add Leg
      </Button>
    </Grid>
  );
}

export default Template;

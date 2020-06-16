import React, { useState } from "react";
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
}

export default Template;

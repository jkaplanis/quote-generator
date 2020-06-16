import React from "react";
import { Page, Text, Document, StyleSheet, Font } from "@react-pdf/renderer";

const MyDocument = () => (
  <Document>
    <Page style={styles.body}>
      {/* <Image
        style={styles.image}
        src="/static/images/quijote1.jpg"
      /> */}
      <Text style={styles.text}>
        <p>
          <span style={styles.textCaption}>Prepared for: </span>
          John Doe
        </p>
      </Text>
      <Text style={styles.quote}>
        <p>Total Aircraft Cost</p>
      </Text>
      <Text style={[styles.quote, { alignItems: "flex-end" }]}>
        <p>{"Total Cost $50,000"}</p>
      </Text>
    </Page>
  </Document>
);

// Create styles
Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf"
});

const styles = StyleSheet.create({
  quote: {
    display: "flex"
  },
  price: {
    display: "flex",
    alignItems: "flex-end"
  },

  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Oswald"
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: "Oswald"
  },

  textCaption: {
    fontWeight: "bold",
    display: "inline-block",
    width: 90
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman"
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey"
  }
});

export default MyDocument;

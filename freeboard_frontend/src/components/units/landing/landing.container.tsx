import React, { useContext } from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";
import { useQuery } from "@apollo/client";

import { GlobalContext } from "../../../../pages/_app";
import LandingUI from "./landing.presenter";
import { FETCH_USER_LOGGED_IN } from "./landing.queries";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// ReactPDF.render(<LandingUI />, `/example.pdf`);
export default function Landing() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const MyDocument = () =>
    // <Document>
    //   <Page size="A4" style={styles.page}>
    //     <View style={styles.section}>
    //       <Text>Section #1</Text>
    //     </View>
    //     <View style={styles.section}>
    //       <Text>Section #2</Text>
    //     </View>
    //   </Page>
    // </Document>
    console.log("aaa");
  return (
    //@ts-ignore
    <LandingUI data={data} MyDocument={MyDocument} />
  );
}

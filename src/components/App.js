import React from "react";
import Header from "./Header";
import TicketList from "./TicketList";
import Footer from "./Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <TicketList />
      <Footer />
    </React.Fragment>
  );
}

export default App;

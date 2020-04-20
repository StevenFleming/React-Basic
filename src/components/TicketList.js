import React from "react";
import Ticket from "./Ticket";

const masterTicketList = [
  {
    names: `Thato and Haley`,
    location: `3A`,
    issue: ` Firebase won't save record. Halp`,
  },
  {
    names: `Sleater and Kinney`,
    location: `4B`,
    issue: ` Prop types are throwing an error`,
  },

  {
    names: `Imani & Jacob`,
    location: `9F`,
    issue: ` Child componenet isn't rendering.`,
  },

  {
    names: `Jack & Jill`,
    location: `10F`,
    issue: ` something is wrong - test.`,
  },
];

function TicketList() {
  return (
    <React.Fragment>
      <hr />
      {masterTicketList.map((ticket, index) => (
        <Ticket
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index}
        />
      ))}
    </React.Fragment>
  );
}

export default TicketList;

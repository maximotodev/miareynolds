"use client";
import EventBox from "./EventBox";
import SectionHeader from "../SectionHeader";
import { useState, useEffect } from "react";

const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("/api/events")
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);
  return (
    <section className="section" id="tours">
      <div className="container mx-auto">
        <SectionHeader pretitle="World Tour" title="Upcoming Events" />
        {/* event box */}
        <EventBox events={events} />
      </div>
    </section>
  );
};

export default Events;

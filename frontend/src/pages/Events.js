import { json, useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  //const events = useLoaderData();
  const data = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>
  // }

  const events = data.events;

  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return {isError: true, message: 'Could not fetch events.'};
    //throw { message: 'Could not fetch events.'};

    // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    //   status: 500,
    // });
    return json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    // const resData = await response.json();
    // return resData.events;

    //const res = new Response('any data', {status: 201});
    //return res;

    return response;
  }
}

/**
 * you don't need to manually extract the data from the response:
const resData = await response.json();
return resData.events;
instead  you can directly:
 return response;
 this special kind of return object is supported by React Router and its loader functions.
 *  */

//* fetching data from backend
// import { useEffect, useState } from 'react';
// import EventsList from '../components/EventsList';

// function EventsPage() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [fetchedEvents, setFetchedEvents] = useState();
//   const [error, setError] = useState();

//   useEffect(() => {
//     async function fetchEvents() {
//       setIsLoading(true);
// const response = await fetch('http://localhost:8080/events');

// if (!response.ok) {
//   setError('Fetching events failed.');
// } else {
//   const resData = await response.json();
//   setFetchedEvents(resData.events);
// }
//       setIsLoading(false);
//     }

//     fetchEvents();
//   }, []);
//   return (
//     <>
//       <div style={{ textAlign: 'center' }}>
//         {isLoading && <p>Loading...</p>}
//         {error && <p>{error}</p>}
//       </div>
//       {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
//     </>
//   );
// }
// export default EventsPage;

//* DUMMY_EVENTS
// import React from "react";
// import { Link } from "react-router-dom";

// const DUMMY_EVENTS = [
//   { id: "e1", title: "Some event" },
//   { id: "e2", title: "another event" },
// ];
// function EventsPage() {
//   return (
//     <>
//       <h1>EventsPage</h1>
//       <ul>
//         {DUMMY_EVENTS.map((event) => (
//           <li key={event.id}>
//             {/* <Link to={`/events/${event.id}`}></Link> */}
//             <Link to={event.id}>{event.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </>)}
// export default EventsPage;

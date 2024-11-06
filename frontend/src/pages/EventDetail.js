import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");

  return <EventItem event={data.event} />;
}

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    return response;
  }
}

export async function action({params, request}) {
  const eventId = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });
  if (!response.ok) {
    throw json({ message: "Could not delete event." }, { status: 500 });
  }
  return redirect("/events");
}






















// import { useParams } from "react-router-dom";

// function EventDetailPage() {
//   const params = useParams();
//   return(
//     <>
//      <h1>EventDetailPage</h1>
//      <p>Event ID: {params.eventId}</p>
//     </>
//   )
// }
// export default EventDetailPage;

//eventId must match the parameter name you've defined in your route path, it must be :eventId is the dynamic part of the URL

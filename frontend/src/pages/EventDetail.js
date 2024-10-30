import { useParams } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();


  return(
    <>
     <h1>EventDetailPage</h1>
     <p>Event ID: {params.eventId}</p>
    </>
  )
  
}

export default EventDetailPage;

//eventId must match the parameter name you've defined in your route path, it must be :eventId is the dynamic part of the URL

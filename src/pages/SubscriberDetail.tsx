import { useParams } from "react-router-dom";

export default function SubscriberDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>Subscriber Detail</h1>
      <p>Viewing details for subscriber ID: {id}</p>
    </div>
  );
}

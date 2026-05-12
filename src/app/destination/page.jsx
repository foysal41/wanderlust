import DestinationCard from "../components/DestinationCard";

export default async function DestinationPage() {

  const res = await fetch("http://localhost:5000/destination")
  const destinations = await res.json();
  
  return (
    <div className="max-w-7xl mx-auto py-15 px-5">
      <h1>All Destinations</h1>

      <div className="grid grid-cols-3 gap-4">
        {
          destinations.map(destination => (
            <DestinationCard key={destination._id} destination={destination}></DestinationCard>
          ))
        }
      </div>
    </div>
  )
}

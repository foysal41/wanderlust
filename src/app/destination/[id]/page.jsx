import DeleteDialoag from "@/app/components/DeleteDialoag";
import EditModal from "@/app/components/EditModal";
import Image from "next/image";


export default async function DestinationDetalisPage({params}) {
    const {id} = await params
   
    const res = await fetch(`https://wanderlust-server-f87e.onrender.com/destination/${id}`)
    const destination = await res.json();
    const { imageUrl, price , destinationName ,duration ,country, description} = destination

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <button className="text-gray-600 text-sm">← Back to Destinations</button>

        <div className="flex gap-3">
         
          <EditModal destination={destination} ></EditModal>
        
          <DeleteDialoag destination={destination} ></DeleteDialoag>
        </div>
      </div>


      <Image src={imageUrl}
        alt={destinationName} height={400}  width={600} priority  
        className="w-full h-[430px] object-cover rounded-md"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 border rounded-md p-6">
        <div className="md:col-span-2">
          <p className="text-sm text-gray-500 mb-2">📍 {country}</p>

          <h1 className="text-4xl font-semibold mb-3">{destinationName}</h1>

          <div className="flex gap-4 text-sm text-gray-600 mb-6">
            <span>⭐ 4.9</span>
            <span>(234 reviews)</span>
            <span>📅 {duration}</span>
          </div>

          <h2 className="text-xl font-semibold mb-3">Overview</h2>

          <p className="text-gray-600 leading-7 mb-6">
           {description}
          </p>

          <h2 className="text-xl font-semibold mb-3">Highlights</h2>

        
        </div>

        <div className="border rounded-md p-5 h-fit shadow-sm">
          <p className="text-sm text-gray-500">Starting from</p>

          <h2 className="text-3xl font-bold text-cyan-500">${price}</h2>

          <p className="text-sm text-gray-500 mb-5">per person</p>

          <input
            type="date"
            className="w-full border rounded-md p-3 mb-4 text-sm"
          />

          <button className="w-full bg-cyan-500 text-white py-3 rounded-md text-sm font-medium">
            Book Now →
          </button>

          <p className="text-green-600 text-sm mt-4">
            ✔ Free cancellation up to 7 days
          </p>
        </div>
      </div>
    </div>
  )
}

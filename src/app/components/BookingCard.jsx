

export default function BookingCard({destination}) {
    

    const {price } = destination


  return (
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
  )
}

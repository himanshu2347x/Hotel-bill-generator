import { Hotel } from "lucide-react";

export const HotelSelector = ({ selectedHotel, onSelectHotel }) => {
    const hotels = [
        { id: 'lotus', name: 'Hotel Lotus Heart', location: 'Latehar, Jharkhand' },
        { id: 'jyoti', name: 'Hotel Jyoti Lok', location: 'Simdega, Jharkhand' },
        { id: 'kpinn', name: 'Hotel K.P. Inn', location: 'Ranchi, Jharkhand' }
    ];

    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                <Hotel className="w-6 h-6" />
                Select Hotel
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {hotels.map(hotel => (
                    <button
                        key={hotel.id}
                        onClick={() => onSelectHotel(hotel.id)}
                        className={`p-6 rounded-lg border-2 transition-all ${selectedHotel === hotel.id
                                ? 'border-blue-600 bg-blue-50 shadow-lg'
                                : 'border-gray-300 bg-white hover:border-blue-400'
                            }`}
                    >
                        <h3 className="font-bold text-lg mb-2">{hotel.name}</h3>
                        <p className="text-sm text-gray-600">{hotel.location}</p>
                    </button>
                ))}
            </div>
        </div>
    );
};
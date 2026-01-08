import { Download, Hotel } from 'lucide-react';
import { useState } from "react";
import { JyotiLokBill } from "./components/bills/JyotiLokBill";
import { KPInnBill } from "./components/bills/KPInnBill";
import { LotusHeartBill } from "./components/bills/LotusHeartBill";


export default function HotelBillGenerator() {
  const [selectedHotel, setSelectedHotel] = useState('lotus');


  const [lotusData, setLotusData] = useState({
    customerName: '', invoiceNo: '', address: '', arrivalDate: '', state: '',
    departureDate: '', stateCode: '', partyMob: '', gstinNumber: '', time: '',
    description: '', hsn: '', days: '', rate: '', amountInWords: '',
    cgst: '', sgst: '', igst: ''
  });

  const [kpData, setKpData] = useState({
    billNo: '', date: '', guestName: '', address: '', rate: '', roomNo: '',
    arrivalDate: '', departureDate: '', arrivalTime: '', departureTime: '',
    days: '', sgst: 'Included', cgst: 'Included', guestCharge: ''
  });

  const [jyotiData, setJyotiData] = useState({
    billNo: '', dated: '', guestName: '', guestAddress: '', guestGstin: '',
    roomNo: '', time: '', description: '', amount: '', amountInWords: ''
  });

  const handleLotusChange = (e) => {
    setLotusData({ ...lotusData, [e.target.name]: e.target.value });
  };

  const handleKpChange = (e) => {
    setKpData({ ...kpData, [e.target.name]: e.target.value });
  };

  const handleJyotiChange = (e) => {
    setJyotiData({ ...jyotiData, [e.target.name]: e.target.value });
  };

  const downloadPDF = async () => {
    window.print();
  };


  

  const hotels = [
    { id: 'lotus', name: 'Hotel Lotus Heart', location: 'Latehar, Jharkhand' },
    { id: 'jyoti', name: 'Hotel Jyoti Lok', location: 'Simdega, Jharkhand' },
    { id: 'kpinn', name: 'Hotel K.P. Inn', location: 'Ranchi, Jharkhand' }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Hotel Bill Generator</h1>

        {/* Hotel Selector */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
            <Hotel className="w-6 h-6" />
            Select Hotel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {hotels.map(hotel => (
              <button
                key={hotel.id}
                onClick={() => setSelectedHotel(hotel.id)}
                className={`p-6 rounded-lg border-2 transition-all ${selectedHotel === hotel.id
                    ? 'border-blue-600 bg-blue-50 shadow-lg transform scale-105'
                    : 'border-gray-300 bg-white hover:border-blue-400'
                  }`}
              >
                <h3 className="font-bold text-lg mb-2">{hotel.name}</h3>
                <p className="text-sm text-gray-600">{hotel.location}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Download Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={downloadPDF}
            className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
          >
            <Download className="w-6 h-6" />
            Download Bill as PDF
          </button>
        </div>

        {/* Bill Component */}
        {selectedHotel === 'lotus' && <LotusHeartBill formData={lotusData} onInputChange={handleLotusChange} />}
        {selectedHotel === 'kpinn' && <KPInnBill formData={kpData} onInputChange={handleKpChange} />}
        {selectedHotel === 'jyoti' && <JyotiLokBill formData={jyotiData} onInputChange={handleJyotiChange} />}
      </div>
    </div>
  );
}

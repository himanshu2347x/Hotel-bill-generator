import { Download, Hotel } from 'lucide-react';
import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 p-4 sm:p-8">
      <Analytics />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-5xl font-bold mb-2 sm:mb-3 text-indigo-900">
            Hotel Bill Generator
          </h1>
          <p className="text-gray-600 text-lg sm:text-2xl">Developed by <span className="font-semibold text-green-700">Himanshu Sinha</span></p>
        </div>

        {/* Hotel Selector */}
        <div className="mb-6 sm:mb-8 bg-white p-4 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 flex items-center gap-2 sm:gap-3">
            <Hotel className="w-5 h-5 sm:w-7 sm:h-7 text-indigo-600" />
            Select Hotel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6">
            {hotels.map(hotel => (
              <button
                key={hotel.id}
                onClick={() => setSelectedHotel(hotel.id)}
                className={`p-4 sm:p-6 rounded-lg sm:rounded-xl border-2 transition-all duration-300 ${selectedHotel === hotel.id
                  ? 'border-indigo-500 bg-indigo-50 shadow-lg transform scale-[1.02] sm:scale-105'
                  : 'border-gray-200 bg-white hover:border-indigo-300 hover:shadow-md'
                  }`}
              >
                <h3 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2 text-gray-800">{hotel.name}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{hotel.location}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Download Button */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <button
            onClick={downloadPDF}
            className="flex items-center gap-2 sm:gap-3 bg-indigo-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl hover:bg-indigo-700 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 font-semibold text-base sm:text-lg"
          >
            <Download className="w-5 h-5 sm:w-6 sm:h-6" />
            Download Bill as PDF
          </button>
        </div>

        {/* Bill Component */}
        <div className="bill-container">
          {selectedHotel === 'lotus' && <LotusHeartBill formData={lotusData} onInputChange={handleLotusChange} />}
          {selectedHotel === 'kpinn' && <KPInnBill formData={kpData} onInputChange={handleKpChange} />}
          {selectedHotel === 'jyoti' && <JyotiLokBill formData={jyotiData} onInputChange={handleJyotiChange} />}
        </div>
      </div>
    </div>
  );
}
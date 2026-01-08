import { Hotel } from 'lucide-react';
import { useState } from "react";
import { JyotiLokBill } from "./components/bills/JyotiLokBill";
import { KPInnBill } from "./components/bills/KPInnBill";
import { LotusHeartBill } from "./components/bills/LotusHeartBill";
import { HotelSelector } from "./components/HotelSelector";
import { PdfDownloadButton } from "./components/PdfDownloadButton";

const App = () => {
  const [selectedHotel, setSelectedHotel] = useState('');
  const [formData, setFormData] = useState({
    // Lotus Heart fields
    customerName: '',
    invoiceNo: '',
    address: '',
    arrivalDate: '',
    state: '',
    departureDate: '',
    stateCode: '',
    partyMob: '',
    gstinNumber: '',
    time: '',
    description: '',
    hsn: '',
    days: '',
    rate: '',
    amountInWords: '',
    cgst: '',
    sgst: '',
    igst: '',
    // Jyoti Lok fields
    billNo: '',
    dated: '',
    guestName: '',
    guestAddress: '',
    guestGstin: '',
    roomNo: '',
    amount: '',
    // K.P. Inn fields
    date: '',
    arrivalTime: '',
    departureTime: '',
    guestCharge: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getHotelName = () => {
    const hotelNames = {
      'lotus': 'Hotel-Lotus-Heart',
      'jyoti': 'Hotel-Jyoti-Lok',
      'kpinn': 'Hotel-KP-Inn'
    };
    return hotelNames[selectedHotel] || 'Hotel-Bill';
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Hotel Bill Generator</h1>
          <p className="text-gray-600">Create professional hotel invoices instantly</p>
        </div>

        <HotelSelector selectedHotel={selectedHotel} onSelectHotel={setSelectedHotel} />

        {selectedHotel && (
          <>
            <div className="mb-6 flex justify-center print:hidden">
              <PdfDownloadButton hotelName={getHotelName()} />
            </div>

            {selectedHotel === 'lotus' && (
              <LotusHeartBill formData={formData} onInputChange={handleInputChange} />
            )}
            {selectedHotel === 'jyoti' && (
              <JyotiLokBill formData={formData} onInputChange={handleInputChange} />
            )}
            {selectedHotel === 'kpinn' && (
              <KPInnBill formData={formData} onInputChange={handleInputChange} />
            )}
          </>
        )}

        {!selectedHotel && (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <Hotel className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Select a Hotel to Begin</h3>
            <p className="text-gray-500">Choose one of the hotels above to start creating your bill</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
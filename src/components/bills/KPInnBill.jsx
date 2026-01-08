export const KPInnBill = ({ formData, onInputChange }) => {
    const calculateTotal = () => {
        const guestCharge = parseFloat(formData.guestCharge) || 0;
        return guestCharge.toFixed(2);
    };

    return (
        <div id="bill" className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
            <div className="border-4 border-black p-6">
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-bold mb-2">HOTEL K.P. Inn</h1>
                    <div className="inline-block border-2 border-black px-4 py-1 mb-2">
                        <p className="font-semibold">LOADGING & BOARDING</p>
                    </div>
                    <p className="text-sm">KISHAN SINGH COLONY, STATION ROAD, RANCHI (JHARKHAND)</p>
                    <p className="text-sm font-semibold">GSTIN : 20AABAH9802P1ZL</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className="block text-sm font-semibold mb-1">Bill No:</label>
                        <input
                            type="text"
                            name="billNo"
                            value={formData.billNo}
                            onChange={onInputChange}
                            className="w-full border-b-2 border-black pb-1 focus:outline-none focus:border-blue-500"
                            placeholder="Bill number"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-1">Date:</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={onInputChange}
                            className="w-full border-b-2 border-black pb-1 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Name of the Guest:</label>
                    <input
                        type="text"
                        name="guestName"
                        value={formData.guestName}
                        onChange={onInputChange}
                        className="w-full border-b-2 border-black pb-1 focus:outline-none focus:border-blue-500"
                        placeholder="Guest name"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-semibold mb-1">Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={onInputChange}
                        className="w-full border-b-2 border-black pb-1 focus:outline-none focus:border-blue-500"
                        placeholder="Full address"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className="block text-sm font-semibold mb-1">Rate Rs:</label>
                        <input
                            type="number"
                            name="rate"
                            value={formData.rate}
                            onChange={onInputChange}
                            className="w-full border-b-2 border-black pb-1 focus:outline-none focus:border-blue-500"
                            placeholder="2000"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-1">Room No:</label>
                        <input
                            type="text"
                            name="roomNo"
                            value={formData.roomNo}
                            onChange={onInputChange}
                            className="w-full border-b-2 border-black pb-1 focus:outline-none focus:border-blue-500"
                            placeholder="104"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className="block text-sm font-semibold mb-1">Arrival Date:</label>
                        <input
                            type="date"
                            name="arrivalDate"
                            value={formData.arrivalDate}
                            onChange={onInputChange}
                            className="w-full border-b-2 border-black pb-1 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-1">Departure Date:</label>
                        <input
                            type="date"
                            name="departureDate"
                            value={formData.departureDate}
                            onChange={onInputChange}
                            className="w-full border-b-2 border-black pb-1 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className="block text-sm font-semibold mb-1">Arrival Time:</label>
                        <input
                            type="time"
                            name="arrivalTime"
                            value={formData.arrivalTime}
                            onChange={onInputChange}
                            className="w-full border-b-2 border-black pb-1 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-1">Departure Time:</label>
                        <input
                            type="time"
                            name="departureTime"
                            value={formData.departureTime}
                            onChange={onInputChange}
                            className="w-full border-b-2 border-black pb-1 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                </div>

                <table className="w-full border-2 border-black mb-6">
                    <tbody>
                        <tr className="border-b-2 border-black">
                            <td className="p-3 font-semibold">No. of Days</td>
                            <td className="p-3 text-right">
                                <input
                                    type="number"
                                    name="days"
                                    value={formData.days}
                                    onChange={onInputChange}
                                    className="w-20 text-right border-b border-black focus:outline-none"
                                    placeholder="01"
                                />
                            </td>
                        </tr>
                        <tr className="border-b-2 border-black">
                            <td className="p-3 font-semibold">SGST 6%</td>
                            <td className="p-3 text-right">
                                <input
                                    type="text"
                                    name="sgst"
                                    value={formData.sgst}
                                    onChange={onInputChange}
                                    className="w-32 text-right border-b border-black focus:outline-none"
                                    placeholder="Included"
                                />
                            </td>
                        </tr>
                        <tr className="border-b-2 border-black">
                            <td className="p-3 font-semibold">CGST 6%</td>
                            <td className="p-3 text-right">
                                <input
                                    type="text"
                                    name="cgst"
                                    value={formData.cgst}
                                    onChange={onInputChange}
                                    className="w-32 text-right border-b border-black focus:outline-none"
                                    placeholder="Included"
                                />
                            </td>
                        </tr>
                        <tr className="border-b-2 border-black">
                            <td className="p-3 font-semibold">Guest Charge</td>
                            <td className="p-3 text-right">
                                <input
                                    type="number"
                                    name="guestCharge"
                                    value={formData.guestCharge}
                                    onChange={onInputChange}
                                    className="w-32 text-right border-b border-black focus:outline-none font-semibold"
                                    placeholder="2000"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 font-bold text-lg">G Total</td>
                            <td className="p-3 text-right font-bold text-lg">{calculateTotal()}/-</td>
                        </tr>
                    </tbody>
                </table>

                <div className="border-t-2 border-black pt-4">
                    <p className="text-sm text-center mb-4">Chek out Time 24 Hrs.</p>
                    <p className="text-sm text-center font-semibold mb-8">CUSTOMER'S SATISFACTION IS OUR MOTTO</p>

                    <div className="text-right">
                        <p className="text-lg font-bold">HOTEL KP INN</p>
                        <p className="text-sm">RANCHI</p>
                        <p className="text-sm">Authorised Signature</p>
                        <div className="border-t-2 border-black w-48 ml-auto mt-2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
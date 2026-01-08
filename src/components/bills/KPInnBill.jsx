export const KPInnBill = ({ formData, onInputChange }) => {
    const calculateTotal = () => {
        const guestCharge = parseFloat(formData.guestCharge) || 0;
        return guestCharge || '';
    };

    return (
        <div id="bill" className="bg-white p-4 mx-auto" style={{ width: '500px', fontSize: '13px' }}>
            <div className="border-2 border-black p-3">
                {/* Header */}
                <div className="text-center mb-2">
                    <h1 className="text-2xl font-bold">HOTEL K.P. Inn</h1>
                    <div className="inline-block border border-black px-3 py-0.5 my-1">
                        <p className="font-semibold text-xs">LOADGING & BOARDING</p>
                    </div>
                    <p className="text-xs">KISHAN SINGH COLONY, STATION ROAD, RANCHI (JHARKHAND)</p>
                    <p className="text-xs font-semibold">GSTIN : 20AABAH9802P1ZL</p>
                </div>

                {/* Bill No and Date */}
                <div className="flex text-xs mt-3 mb-2">
                    <div className="flex items-center" style={{ width: '200px' }}>
                        <span className="font-semibold" style={{ width: '50px' }}>Bill No.</span>
                        <span className="border-b border-black" style={{ width: '80px' }}>
                            <input
                                type="text"
                                name="billNo"
                                value={formData.billNo}
                                onChange={onInputChange}
                                className="w-full focus:outline-none bg-transparent"
                            />
                        </span>
                    </div>
                    <div className="flex items-center ml-auto">
                        <span className="font-semibold" style={{ width: '40px' }}>Date :</span>
                        <span className="border-b border-black" style={{ width: '80px' }}>
                            <input
                                type="text"
                                name="date"
                                value={formData.date}
                                onChange={onInputChange}
                                className="w-full focus:outline-none bg-transparent"
                            />
                        </span>
                    </div>
                </div>

                {/* Name of the Guest */}
                <div className="flex text-xs mb-2">
                    <span className="font-semibold" style={{ width: '110px' }}>Name of the Guest</span>
                    <span className="border-b border-black flex-1">
                        <input
                            type="text"
                            name="guestName"
                            value={formData.guestName}
                            onChange={onInputChange}
                            className="w-full focus:outline-none bg-transparent"
                        />
                    </span>
                </div>

                {/* Address */}
                <div className="flex text-xs mb-2">
                    <span className="font-semibold" style={{ width: '60px' }}>Address :</span>
                    <span className="border-b border-black flex-1">
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={onInputChange}
                            className="w-full focus:outline-none bg-transparent"
                        />
                    </span>
                </div>

                {/* Rate Rs, Room No, SI. No */}
                <div className="flex text-xs mb-2">
                    <div className="flex items-center">
                        <span className="font-semibold" style={{ width: '55px' }}>Rate Rs.</span>
                        <span className="border-b border-black" style={{ width: '70px' }}>
                            <input
                                type="text"
                                name="rate"
                                value={formData.rate}
                                onChange={onInputChange}
                                className="w-full focus:outline-none bg-transparent"
                            />
                        </span>
                    </div>
                    <div className="flex items-center ml-4">
                        <span className="font-semibold" style={{ width: '65px' }}>Room No.</span>
                        <span className="border-b border-black" style={{ width: '50px' }}>
                            <input
                                type="text"
                                name="roomNo"
                                value={formData.roomNo}
                                onChange={onInputChange}
                                className="w-full focus:outline-none bg-transparent"
                            />
                        </span>
                    </div>
                    <div className="flex items-center ml-4">
                        <span className="font-semibold" style={{ width: '45px' }}>SI. No.</span>
                        <span className="border-b border-black" style={{ width: '50px' }}>
                            <input
                                type="text"
                                name="siNo"
                                value={formData.siNo}
                                onChange={onInputChange}
                                className="w-full focus:outline-none bg-transparent"
                            />
                        </span>
                    </div>
                </div>

                {/* Arrival Date, Departure Date */}
                <div className="flex text-xs mb-2">
                    <div className="flex items-center">
                        <span className="font-semibold" style={{ width: '80px' }}>Arrival Date</span>
                        <span className="border-b border-black" style={{ width: '80px' }}>
                            <input
                                type="text"
                                name="arrivalDate"
                                value={formData.arrivalDate}
                                onChange={onInputChange}
                                className="w-full focus:outline-none bg-transparent"
                            />
                        </span>
                    </div>
                    <div className="flex items-center ml-4">
                        <span className="font-semibold" style={{ width: '100px' }}>Departure Date</span>
                        <span className="border-b border-black" style={{ width: '80px' }}>
                            <input
                                type="text"
                                name="departureDate"
                                value={formData.departureDate}
                                onChange={onInputChange}
                                className="w-full focus:outline-none bg-transparent"
                            />
                        </span>
                    </div>
                </div>

                {/* Arrival Time, Departure Time */}
                <div className="flex text-xs mb-2">
                    <div className="flex items-center">
                        <span className="font-semibold" style={{ width: '80px' }}>Arrival Time</span>
                        <span className="border-b border-black" style={{ width: '80px' }}>
                            <input
                                type="text"
                                name="arrivalTime"
                                value={formData.arrivalTime}
                                onChange={onInputChange}
                                className="w-full focus:outline-none bg-transparent"
                            />
                        </span>
                    </div>
                    <div className="flex items-center ml-4">
                        <span className="font-semibold" style={{ width: '100px' }}>Departure Time</span>
                        <span className="border-b border-black" style={{ width: '80px' }}>
                            <input
                                type="text"
                                name="departureTime"
                                value={formData.departureTime}
                                onChange={onInputChange}
                                className="w-full focus:outline-none bg-transparent"
                            />
                        </span>
                    </div>
                </div>

                {/* Table */}
                <table className="w-full border-2 border-black mt-2 text-xs">
                    <tbody>
                        <tr className="border-b border-black">
                            <td className="p-2 font-semibold border-r border-black">No. of Days</td>
                            <td className="p-2 text-right" style={{ width: '100px' }}>
                                <input
                                    type="text"
                                    name="days"
                                    value={formData.days}
                                    onChange={onInputChange}
                                    className="w-full text-right focus:outline-none bg-transparent"
                                />
                            </td>
                        </tr>
                        <tr className="border-b border-black">
                            <td className="p-2 font-semibold border-r border-black">SGST 6%</td>
                            <td className="p-2 text-right">
                                <input
                                    type="text"
                                    name="sgst"
                                    value={formData.sgst}
                                    onChange={onInputChange}
                                    className="w-full text-right focus:outline-none bg-transparent"
                                />
                            </td>
                        </tr>
                        <tr className="border-b border-black">
                            <td className="p-2 font-semibold border-r border-black">CGST 6%</td>
                            <td className="p-2 text-right">
                                <input
                                    type="text"
                                    name="cgst"
                                    value={formData.cgst}
                                    onChange={onInputChange}
                                    className="w-full text-right focus:outline-none bg-transparent"
                                />
                            </td>
                        </tr>
                        <tr className="border-b border-black">
                            <td className="p-2 font-semibold border-r border-black">Guest Charge</td>
                            <td className="p-2 text-right">
                                <input
                                    type="text"
                                    name="guestCharge"
                                    value={formData.guestCharge}
                                    onChange={onInputChange}
                                    className="w-full text-right focus:outline-none bg-transparent font-semibold"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="p-2 font-bold border-r border-black">G. Total</td>
                            <td className="p-2 text-right font-bold">{calculateTotal()}/-</td>
                        </tr>
                    </tbody>
                </table>

                {/* Footer */}
                <div className="border-t border-black mt-2 pt-2 text-xs">
                    <p className="text-left">Chek out Time 24 Hrs.</p>
                    <p className="text-left font-semibold">CUSTOMER'S SATISFACTION IS OUR MOTTO</p>

                    <div className="text-right mt-4">
                        <p className="font-bold">HOTEL KP INN</p>
                        <p className="text-xs">RANCHI</p>
                        <div className="border-t border-black w-24 ml-auto mt-3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
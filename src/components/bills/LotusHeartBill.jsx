export const LotusHeartBill = ({ formData, onInputChange }) => {
    return (
        <div id="bill" className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <div className="border-4 border-black p-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <p className="text-sm font-semibold">GSTIN: 20ABAFM3942L1ZG</p>
                    </div>
                    <div className="text-center flex-1">
                        <h1 className="text-4xl font-bold">HOTEL LOTUS HEART</h1>
                        <p className="text-sm mt-2">Main Road Balumath (Near New Bus Stand) Dist - Latehar (Jharkhand)</p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm font-semibold">Mob.- 8787935303</p>
                    </div>
                </div>

                <div className="border-t-2 border-black pt-4">
                    <div className="text-center mb-4">
                        <h2 className="text-2xl font-bold">INVOICE</h2>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                            <label className="block text-sm font-semibold mb-1">Name:</label>
                            <input
                                type="text"
                                name="customerName"
                                value={formData.customerName}
                                onChange={onInputChange}
                                className="w-full border-b-2 border-black pb-1 focus:outline-none focus:border-blue-500"
                                placeholder="Enter customer name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Invoice No:</label>
                            <input
                                type="text"
                                name="invoiceNo"
                                value={formData.invoiceNo}
                                onChange={onInputChange}
                                className="w-full border-b-2 border-black pb-1 focus:outline-none focus:border-blue-500"
                                placeholder="Invoice number"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Address:</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={onInputChange}
                                className="w-full border-b-2 border-black pb-1 focus:outline-none focus:border-blue-500"
                                placeholder="Enter address"
                            />
                        </div>
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
                            <label className="block text-sm font-semibold mb-1">State:</label>
                            <input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={onInputChange}
                                className="w-full border-b-2 border-black pb-1 focus:outline-none focus:border-blue-500"
                                placeholder="State"
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
                        <div>
                            <label className="block text-sm font-semibold mb-1">State Code:</label>
                            <input
                                type="text"
                                name="stateCode"
                                value={formData.stateCode}
                                onChange={onInputChange}
                                className="w-full border-b-2 border-black pb-1 focus:outline-none focus:border-blue-500"
                                placeholder="State code"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Party Mob:</label>
                            <input
                                type="tel"
                                name="partyMob"
                                value={formData.partyMob}
                                onChange={onInputChange}
                                className="w-full border-b-2 border-black pb-1 focus:outline-none focus:border-blue-500"
                                placeholder="Mobile number"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">GSTIN Number:</label>
                            <input
                                type="text"
                                name="gstinNumber"
                                value={formData.gstinNumber}
                                onChange={onInputChange}
                                className="w-full border-b-2 border-black pb-1 focus:outline-none focus:border-blue-500"
                                placeholder="GSTIN (optional)"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Time:</label>
                            <input
                                type="time"
                                name="time"
                                value={formData.time}
                                onChange={onInputChange}
                                className="w-full border-b-2 border-black pb-1 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                    </div>

                    <table className="w-full border-2 border-black mb-6">
                        <thead>
                            <tr className="border-b-2 border-black">
                                <th className="border-r-2 border-black p-2 text-left w-16">S.L.</th>
                                <th className="border-r-2 border-black p-2 text-left">Description</th>
                                <th className="border-r-2 border-black p-2 text-center w-24">HSN</th>
                                <th className="border-r-2 border-black p-2 text-center w-24">Days</th>
                                <th className="border-r-2 border-black p-2 text-center w-24">Rate</th>
                                <th className="p-2 text-right w-32">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b-2 border-black">
                                <td className="border-r-2 border-black p-2">1.</td>
                                <td className="border-r-2 border-black p-2">
                                    <input
                                        type="text"
                                        name="description"
                                        value={formData.description}
                                        onChange={onInputChange}
                                        className="w-full focus:outline-none"
                                        placeholder="AC Double Executive Room"
                                    />
                                </td>
                                <td className="border-r-2 border-black p-2">
                                    <input
                                        type="text"
                                        name="hsn"
                                        value={formData.hsn}
                                        onChange={onInputChange}
                                        className="w-full text-center focus:outline-none"
                                        placeholder="HSN"
                                    />
                                </td>
                                <td className="border-r-2 border-black p-2">
                                    <input
                                        type="number"
                                        name="days"
                                        value={formData.days}
                                        onChange={onInputChange}
                                        className="w-full text-center focus:outline-none"
                                        placeholder="1"
                                    />
                                </td>
                                <td className="border-r-2 border-black p-2">
                                    <input
                                        type="number"
                                        name="rate"
                                        value={formData.rate}
                                        onChange={onInputChange}
                                        className="w-full text-center focus:outline-none"
                                        placeholder="2000"
                                    />
                                </td>
                                <td className="p-2 text-right font-semibold">
                                    {formData.rate && formData.days ? (formData.rate * formData.days).toFixed(2) : '0.00'}
                                </td>
                            </tr>
                            <tr style={{ height: '200px' }}>
                                <td colSpan="6" className="border-r-2 border-black"></td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="border-2 border-black p-4">
                            <p className="font-semibold mb-2">Bank Details</p>
                            <div className="mb-4">
                                <label className="block text-sm mb-1">Rupees In Words:</label>
                                <input
                                    type="text"
                                    name="amountInWords"
                                    value={formData.amountInWords}
                                    onChange={onInputChange}
                                    className="w-full border-b border-black focus:outline-none text-sm"
                                    placeholder="Two thousand only"
                                />
                            </div>
                            <div className="mt-8">
                                <p className="text-sm mb-2">Customer Signature</p>
                                <div className="border-t border-black w-48"></div>
                            </div>
                        </div>
                        <div className="border-2 border-black p-4">
                            <div className="space-y-2">
                                <div className="flex justify-between border-b border-black pb-2">
                                    <span>Total:</span>
                                    <span className="font-semibold">{formData.rate && formData.days ? (formData.rate * formData.days).toFixed(2) : '0.00'}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>CGST@......%</span>
                                    <input
                                        type="number"
                                        name="cgst"
                                        value={formData.cgst}
                                        onChange={onInputChange}
                                        className="w-20 text-right border-b border-black focus:outline-none"
                                        placeholder="0"
                                    />
                                </div>
                                <div className="flex justify-between">
                                    <span>SGST@......%</span>
                                    <input
                                        type="number"
                                        name="sgst"
                                        value={formData.sgst}
                                        onChange={onInputChange}
                                        className="w-20 text-right border-b border-black focus:outline-none"
                                        placeholder="0"
                                    />
                                </div>
                                <div className="flex justify-between">
                                    <span>IGST@......%</span>
                                    <input
                                        type="number"
                                        name="igst"
                                        value={formData.igst}
                                        onChange={onInputChange}
                                        className="w-20 text-right border-b border-black focus:outline-none"
                                        placeholder="0"
                                    />
                                </div>
                                <div className="flex justify-between border-t-2 border-black pt-2 font-bold text-lg">
                                    <span>Grand Total:</span>
                                    <span>
                                        {(
                                            parseFloat(formData.rate * formData.days || 0) +
                                            parseFloat(formData.cgst || 0) +
                                            parseFloat(formData.sgst || 0) +
                                            parseFloat(formData.igst || 0)
                                        ).toFixed(2)}
                                    </span>
                                </div>
                            </div>
                            <div className="mt-8 text-right">
                                <p className="text-sm mb-2">For Hotel Lotus Heart</p>
                                <p className="text-sm">Authorised Signature</p>
                                <div className="border-t border-black w-48 ml-auto mt-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

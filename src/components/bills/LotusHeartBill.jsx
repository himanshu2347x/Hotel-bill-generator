export const LotusHeartBill = ({ formData, onInputChange }) => {
    return (
        <div id="bill" className="bg-white p-4 mx-auto" style={{ width: '480px', fontSize: '13px' }}>
            <div className="border-2 border-black p-3">
                {/* Header */}
                <div className="flex justify-between items-start text-xs mb-1">
                    <div>
                        <p className="font-semibold">GSTIN</p>
                        <p>20ABAFM3942L1ZG</p>
                    </div>
                    <div className="text-center">
                        <p className="font-semibold">INVOICE</p>
                    </div>
                    <div className="text-right">
                        <p className="font-semibold">Mob.-</p>
                        <p>8787935303</p>
                    </div>
                </div>

                {/* Hotel Name */}
                <div className="text-center border-t border-black pt-1">
                    <h1 className="text-xl font-bold tracking-wide">HOTEL LOTUS HEART</h1>
                    <p className="text-xs">Main Road Balumath (Near New Bus Stand) Dist - Latehar (Jharkhand)</p>
                </div>

                {/* Form Fields - Two Column Layout */}
                <div className="mt-3 text-xs">
                    <div className="flex mb-2">
                        <div className="flex items-center" style={{ width: '230px' }}>
                            <span className="font-semibold" style={{ width: '65px' }}>Name</span>
                            <span className="border-b border-black" style={{ width: '150px', display: 'inline-block' }}>
                                <input
                                    type="text"
                                    name="customerName"
                                    value={formData.customerName}
                                    onChange={onInputChange}
                                    className="w-full focus:outline-none bg-transparent"
                                />
                            </span>
                        </div>
                        <div className="flex items-center" style={{ width: '200px' }}>
                            <span className="font-semibold" style={{ width: '100px' }}>Invoice No.</span>
                            <span className="border-b border-black" style={{ width: '80px', display: 'inline-block' }}>
                                <input
                                    type="text"
                                    name="invoiceNo"
                                    value={formData.invoiceNo}
                                    onChange={onInputChange}
                                    className="w-full focus:outline-none bg-transparent"
                                />
                            </span>
                        </div>
                    </div>
                    <div className="flex mb-2">
                        <div className="flex items-center" style={{ width: '230px' }}>
                            <span className="font-semibold" style={{ width: '65px' }}>Address</span>
                            <span className="border-b border-black" style={{ width: '150px', display: 'inline-block' }}>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={onInputChange}
                                    className="w-full focus:outline-none bg-transparent"
                                />
                            </span>
                        </div>
                        <div className="flex items-center" style={{ width: '200px' }}>
                            <span className="font-semibold" style={{ width: '100px' }}>Arrival Date</span>
                            <span className="border-b border-black" style={{ width: '80px', display: 'inline-block' }}>
                                <input
                                    type="text"
                                    name="arrivalDate"
                                    value={formData.arrivalDate}
                                    onChange={onInputChange}
                                    className="w-full focus:outline-none bg-transparent"
                                />
                            </span>
                        </div>
                    </div>
                    <div className="flex mb-2">
                        <div className="flex items-center" style={{ width: '230px' }}>
                            <span className="font-semibold" style={{ width: '65px' }}>State</span>
                            <span className="border-b border-black" style={{ width: '150px', display: 'inline-block' }}>
                                <input
                                    type="text"
                                    name="state"
                                    value={formData.state}
                                    onChange={onInputChange}
                                    className="w-full focus:outline-none bg-transparent"
                                />
                            </span>
                        </div>
                        <div className="flex items-center" style={{ width: '200px' }}>
                            <span className="font-semibold" style={{ width: '100px' }}>Departure Date</span>
                            <span className="border-b border-black" style={{ width: '80px', display: 'inline-block' }}>
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
                    <div className="flex mb-2">
                        <div className="flex items-center" style={{ width: '230px' }}>
                            <span className="font-semibold" style={{ width: '65px' }}>State Code</span>
                            <span className="border-b border-black" style={{ width: '150px', display: 'inline-block' }}>
                                <input
                                    type="text"
                                    name="stateCode"
                                    value={formData.stateCode}
                                    onChange={onInputChange}
                                    className="w-full focus:outline-none bg-transparent"
                                />
                            </span>
                        </div>
                        <div className="flex items-center" style={{ width: '200px' }}>
                            <span className="font-semibold" style={{ width: '100px' }}>Party Mob</span>
                            <span className="border-b border-black" style={{ width: '80px', display: 'inline-block' }}>
                                <input
                                    type="tel"
                                    name="partyMob"
                                    value={formData.partyMob}
                                    onChange={onInputChange}
                                    className="w-full focus:outline-none bg-transparent"
                                />
                            </span>
                        </div>
                    </div>
                    <div className="flex mb-2">
                        <div className="flex items-start" style={{ width: '230px' }}>
                            <span className="font-semibold" style={{ width: '65px', lineHeight: '1.2' }}>GSTIN<br />Number</span>
                            <span className="border-b border-black" style={{ width: '150px', display: 'inline-block' }}>
                                <input
                                    type="text"
                                    name="gstinNumber"
                                    value={formData.gstinNumber}
                                    onChange={onInputChange}
                                    className="w-full focus:outline-none bg-transparent"
                                />
                            </span>
                        </div>
                        <div className="flex items-center" style={{ width: '200px' }}>
                            <span className="font-semibold" style={{ width: '100px' }}>Time</span>
                            <span className="border-b border-black" style={{ width: '80px', display: 'inline-block' }}>
                                <input
                                    type="text"
                                    name="time"
                                    value={formData.time}
                                    onChange={onInputChange}
                                    className="w-full focus:outline-none bg-transparent"
                                />
                            </span>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <table className="w-full border-2 border-black mt-2 text-xs">
                    <thead>
                        <tr className="border-b border-black">
                            <th className="border-r border-black p-1 text-left w-8">S. L.</th>
                            <th className="border-r border-black p-1 text-left" style={{ width: '120px' }}>Description</th>
                            <th className="border-r border-black p-1 text-center w-12">HSN</th>
                            <th className="border-r border-black p-1 text-center w-12">Days</th>
                            <th className="border-r border-black p-1 text-center" style={{ width: '50px' }}>Rate</th>
                            <th className="p-1 text-center w-16">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ height: '60px' }} className="align-top">
                            <td className="border-r border-black p-1">1.</td>
                            <td className="border-r border-black p-1">
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={onInputChange}
                                    className="w-full h-full focus:outline-none bg-transparent resize-none"
                                    rows={3}
                                    style={{ minHeight: '50px' }}
                                />
                            </td>
                            <td className="border-r border-black p-1">
                                <input
                                    type="text"
                                    name="hsn"
                                    value={formData.hsn}
                                    onChange={onInputChange}
                                    className="w-full text-center focus:outline-none bg-transparent"
                                />
                            </td>
                            <td className="border-r border-black p-1">
                                <input
                                    type="number"
                                    name="days"
                                    value={formData.days}
                                    onChange={onInputChange}
                                    className="w-full text-center focus:outline-none bg-transparent"
                                />
                            </td>
                            <td className="border-r border-black p-1">
                                <input
                                    type="number"
                                    name="rate"
                                    value={formData.rate}
                                    onChange={onInputChange}
                                    className="w-full text-center focus:outline-none bg-transparent"
                                />
                            </td>
                            <td className="p-1 text-center font-semibold">
                                {formData.rate && formData.days ? (formData.rate * formData.days) : ''}
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* Bottom Section */}
                <div className="flex border-2 border-black border-t-0 text-xs">
                    {/* Left side - Bank Details */}
                    <div className="flex-1 border-r border-black p-2">
                        <p className="font-semibold text-center mb-1">Bank Details</p>
                        <div className="mt-2">
                            <p className="mb-1">Rupees In Words:</p>
                            <input
                                type="text"
                                name="amountInWords"
                                value={formData.amountInWords}
                                onChange={onInputChange}
                                className="w-full border-b border-black focus:outline-none bg-transparent"
                            />
                        </div>
                        <div className="mt-4">
                            <p className="text-xs">Customer Signature</p>
                            <div className="border-t border-black w-32 mt-3"></div>
                        </div>
                    </div>

                    {/* Right side - Totals */}
                    <div className="w-44 p-1">
                        <div className="flex justify-between border-b border-black py-1">
                            <span>Total</span>
                            <span className="font-semibold">{formData.rate && formData.days ? (formData.rate * formData.days) : ''}</span>
                        </div>
                        <div className="flex justify-between py-1">
                            <span>CGST@..........%</span>
                            <input
                                type="text"
                                name="cgst"
                                value={formData.cgst}
                                onChange={onInputChange}
                                className="w-12 text-right focus:outline-none bg-transparent"
                            />
                        </div>
                        <div className="flex justify-between py-1">
                            <span>SGST@..........%</span>
                            <input
                                type="text"
                                name="sgst"
                                value={formData.sgst}
                                onChange={onInputChange}
                                className="w-12 text-right focus:outline-none bg-transparent"
                            />
                        </div>
                        <div className="flex justify-between py-1">
                            <span>IGST @..........%</span>
                            <input
                                type="text"
                                name="igst"
                                value={formData.igst}
                                onChange={onInputChange}
                                className="w-12 text-right focus:outline-none bg-transparent"
                            />
                        </div>
                        <div className="flex justify-between border-t border-black py-1 font-bold">
                            <span>Grand Total</span>
                            <span>
                                {(
                                    parseFloat(formData.rate * formData.days || 0) +
                                    parseFloat(formData.cgst || 0) +
                                    parseFloat(formData.sgst || 0) +
                                    parseFloat(formData.igst || 0)
                                ) || ''}
                            </span>
                        </div>
                        <div className="mt-3 text-right text-xs">
                            <p>For - Hotel Lotus Heart</p>
                            <p className="mt-1">Authorised Signature</p>
                            <div className="border-t border-black w-24 ml-auto mt-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

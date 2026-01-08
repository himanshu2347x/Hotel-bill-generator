export const JyotiLokBill = ({ formData, onInputChange }) => {
    return (
        <div id="bill" className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
            <div className="border-4 border-black rounded-lg p-6">
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-bold mb-2">HOTEL JYOTI LOK</h1>
                    <p className="text-sm">Prince Chouck Simdega (Jh)</p>
                    <p className="text-sm">MOB. - 9798705094</p>
                    <p className="text-sm font-semibold">GSTIN - 20AABFH8023P2ZF</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className="block text-sm font-semibold mb-1">Bill NO:</label>
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
                        <label className="block text-sm font-semibold mb-1">Dated:</label>
                        <input
                            type="date"
                            name="dated"
                            value={formData.dated}
                            onChange={onInputChange}
                            className="w-full border-b-2 border-black pb-1 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-semibold mb-1">To Guest:</label>
                    <input
                        type="text"
                        name="guestName"
                        value={formData.guestName}
                        onChange={onInputChange}
                        className="w-full border-b-2 border-black pb-1 focus:outline-none focus:border-blue-500 mb-2"
                        placeholder="Guest name"
                    />
                    <input
                        type="text"
                        name="guestAddress"
                        value={formData.guestAddress}
                        onChange={onInputChange}
                        className="w-full border-b-2 border-black pb-1 focus:outline-none focus:border-blue-500"
                        placeholder="Address"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className="block text-sm font-semibold mb-1">GSTIN:</label>
                        <input
                            type="text"
                            name="guestGstin"
                            value={formData.guestGstin}
                            onChange={onInputChange}
                            className="w-full border-b-2 border-black pb-1 focus:outline-none focus:border-blue-500"
                            placeholder="Guest GSTIN"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-1">ROOM NO:</label>
                        <input
                            type="text"
                            name="roomNo"
                            value={formData.roomNo}
                            onChange={onInputChange}
                            className="w-full border-b-2 border-black pb-1 focus:outline-none focus:border-blue-500"
                            placeholder="Room number"
                        />
                    </div>
                </div>

                <div className="text-right mb-2">
                    <label className="text-sm font-semibold">Time: </label>
                    <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={onInputChange}
                        className="border-b-2 border-black pb-1 focus:outline-none focus:border-blue-500"
                    />
                </div>

                <table className="w-full border-2 border-black mb-6">
                    <thead>
                        <tr className="border-b-2 border-black bg-gray-100">
                            <th className="border-r-2 border-black p-3 text-left">DESCRIPTION</th>
                            <th className="p-3 text-right">AMOUNT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ height: '150px' }} className="border-b-2 border-black">
                            <td className="border-r-2 border-black p-3">
                                <input
                                    type="text"
                                    name="description"
                                    value={formData.description}
                                    onChange={onInputChange}
                                    className="w-full focus:outline-none"
                                    placeholder="A/C Room"
                                />
                            </td>
                            <td className="p-3 text-right">
                                <input
                                    type="number"
                                    name="amount"
                                    value={formData.amount}
                                    onChange={onInputChange}
                                    className="w-full text-right focus:outline-none font-semibold"
                                    placeholder="2000"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className="block text-sm font-semibold mb-1">In Words:</label>
                        <input
                            type="text"
                            name="amountInWords"
                            value={formData.amountInWords}
                            onChange={onInputChange}
                            className="w-full border-b-2 border-black pb-1 focus:outline-none focus:border-blue-500"
                            placeholder="Two thousand rupees only"
                        />
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-bold">{formData.amount || '0'}/-</p>
                    </div>
                </div>

                <div className="flex justify-between items-end mt-8">
                    <div>
                        <p className="text-sm mb-2">Customer Signature</p>
                        <div className="border-t-2 border-black w-48"></div>
                    </div>
                    <div className="text-right">
                        <p className="text-sm font-bold mb-2">Hotel Jyoti Lok</p>
                        <p className="text-sm">Authorised Signature</p>
                        <div className="border-t-2 border-black w-48"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export const JyotiLokBill = ({ formData, onInputChange }) => {
    return (
        <div id="bill" className="bg-white p-4 mx-auto" style={{ width: '500px', fontSize: '13px' }}>
            <div className="border-2 border-black p-3">
                {/* Header Section - Hotel Info */}
                <div className="border-b border-black pb-2">
                    <h1 className="text-xl font-bold mb-1">HOTEL JYOTI LOK</h1>
                    <p className="text-xs">Prince Chouck Simdega (Jh)</p>
                    <p className="text-xs">MOB. - 9798705094</p>
                    <p className="text-xs font-semibold">GSTIN - 20AABFH8023P2ZF</p>
                </div>

                {/* Guest Details + Bill Details Section */}
                <div className="flex mt-2 text-xs">
                    {/* Left - Guest Info */}
                    <div className="flex-1 border-r border-black pr-2">
                        <div className="flex mb-1">
                            <span className="font-semibold" style={{ width: '60px' }}>To Guest</span>
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
                        <div className="flex mb-1">
                            <span style={{ width: '60px' }}></span>
                            <span className="border-b border-black flex-1">
                                <input
                                    type="text"
                                    name="guestAddress"
                                    value={formData.guestAddress}
                                    onChange={onInputChange}
                                    className="w-full focus:outline-none bg-transparent"
                                />
                            </span>
                        </div>
                        <div className="flex mb-1">
                            <span className="font-semibold" style={{ width: '50px' }}>GSTIN</span>
                            <span className="border-b border-black" style={{ width: '130px' }}>
                                <input
                                    type="text"
                                    name="guestGstin"
                                    value={formData.guestGstin}
                                    onChange={onInputChange}
                                    className="w-full focus:outline-none bg-transparent"
                                />
                            </span>
                            <span className="font-semibold ml-2" style={{ width: '65px' }}>ROOM NO.</span>
                            <span className="border-b border-black" style={{ width: '40px' }}>
                                <input
                                    type="text"
                                    name="roomNo"
                                    value={formData.roomNo}
                                    onChange={onInputChange}
                                    className="w-full focus:outline-none bg-transparent"
                                />
                            </span>
                        </div>
                    </div>
                    {/* Right - Bill Details */}
                    <div className="pl-2" style={{ width: '130px' }}>
                        <div className="flex mb-2">
                            <span className="font-semibold" style={{ width: '45px' }}>Bill NO.</span>
                            <span className="border-b border-black flex-1">
                                <input
                                    type="text"
                                    name="billNo"
                                    value={formData.billNo}
                                    onChange={onInputChange}
                                    className="w-full focus:outline-none bg-transparent"
                                />
                            </span>
                        </div>
                        <div className="flex mb-2">
                            <span className="font-semibold" style={{ width: '45px' }}>Dated</span>
                            <span className="border-b border-black flex-1">
                                <input
                                    type="text"
                                    name="dated"
                                    value={formData.dated}
                                    onChange={onInputChange}
                                    className="w-full focus:outline-none bg-transparent"
                                />
                            </span>
                        </div>
                        <div className="flex mb-2">
                            <span className="font-semibold" style={{ width: '45px' }}>Time</span>
                            <span className="border-b border-black flex-1">
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
                            <th className="border-r border-black p-1 text-center">DESCRIPTION</th>
                            <th className="p-1 text-center" style={{ width: '80px' }}>AMOUNT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ height: '80px' }} className="align-top">
                            <td className="border-r border-black p-1">
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={onInputChange}
                                    className="w-full h-full focus:outline-none bg-transparent resize-none"
                                    rows={3}
                                    style={{ minHeight: '70px' }}
                                />
                            </td>
                            <td className="p-1 text-right">
                                <input
                                    type="text"
                                    name="amount"
                                    value={formData.amount}
                                    onChange={onInputChange}
                                    className="w-full text-right focus:outline-none bg-transparent font-semibold"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* Bottom Section */}
                <div className="border-2 border-black border-t-0 text-xs">
                    <div className="flex">
                        <div className="flex-1 border-r border-black p-2">
                            <div className="flex items-center">
                                <span className="font-semibold" style={{ width: '60px' }}>In Words</span>
                                <span className="border-b border-black flex-1">
                                    <input
                                        type="text"
                                        name="amountInWords"
                                        value={formData.amountInWords}
                                        onChange={onInputChange}
                                        className="w-full focus:outline-none bg-transparent"
                                    />
                                </span>
                            </div>
                            <div className="mt-4">
                                <p className="text-xs">Customer Signature</p>
                                <div className="border-t border-black w-32 mt-3"></div>
                            </div>
                        </div>
                        <div className="p-2 text-right" style={{ width: '100px' }}>
                            <p className="font-bold text-base">{formData.amount || ''}/-</p>
                            <div className="mt-6">
                                <p className="text-xs font-semibold">Hotel Jyoti Lok</p>
                                <p className="text-xs mt-1">Authorised Signature</p>
                                <div className="border-t border-black w-20 ml-auto mt-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
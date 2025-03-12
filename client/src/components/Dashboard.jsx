import React from "react";

function Dashboard(){
    return(
        <div>
            <h1 className="text-center font-bold text-2xl text-blue-500">Shipment Details

            </h1>
            <table className="border border-gray-400 w-[80%] mx-auto mt-8 ">
                <thead>
                    <tr className="bg-orange-200 border border-gary-400">
                        <th className="py-2 px-4 border border-gray-400 ">Sl.No</th>
                        <th className="py-2 px-4 border border-gray-400">Sender Name</th>
                        <th className="py-2 px-4 border border-gray-400">Delivery Status</th>
                        <th className="py-2 px-4 border border-gray-400">Receiver Name</th>
                        
                    </tr>
                </thead>
            </table>

        </div>
    )
}
export default Dashboard
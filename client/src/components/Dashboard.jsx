import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import { toast } from 'react-toastify'

function Dashboard(){

    const [shipments, setShipments] = useState([])

    useEffect(() => {
        viewShipments()
    }, [])

    const viewShipments = async () => {
        try {
            const response = await axios.get('http://localhost:8000/viewShipments');
            console.log("Shipments Data:", response.data);
            setShipments(response.data);
        } catch (error) {
            console.log("Error fetching shipments:", error);
        }
    };
    

    const handleDelete = async (id) => {
        const isConfirmed = confirm('Are you sure you want to delete this product?');
        if (isConfirmed) {
            try {
                const response = await axios.delete(`http://localhost:8000/deleteShipments/${id}`);
                toast.success(response.data.message);
                viewShipments();
            } catch (error) {
                console.log(error);
            }
        }
    };
    



    return(
        <div>
            <h1 className="text-center font-bold text-2xl text-blue-500">Shipment Details

            </h1>
            <table className="border border-gray-500 w-[80%] mx-auto mt-8 mb-5">
                <caption className="text-right mb-4">
                    <Link to={'/addshipments'} className="text-blue-400 underline cursor-pointer text-xl">Add New Shipment</Link>
                </caption>
                <thead>
                    <tr className="bg-violet-600 border border-gray-400">
                        <th className="py-2 px-4 border border-gray-400 ">Sl.No</th>
                        <th className="py-2 px-4 border border-gray-400">Sender</th>
                        <th className="py-2 px-4 border border-gray-400">Status</th>
                        <th className="py-2 px-4 border border-gray-400">Receiver</th>
                        <th colSpan={2} className="py-2 px-4 border border-gray-400">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {shipments.map((item, index) => {
                        return (
                            <tr className="border border-gray-400" key={index}>
                                <td className="py-2 px-3 border border-gray-400">{index + 1}</td>
                                <td className="py-2 px-3 border border-gray-400">{item.sendername}</td>
                                <td className="py-2 px-3 border border-gray-400">{item.deliverystatus}</td>
                                <td className="py-2 px-3 border border-gray-400">{item.recievername}</td>
                                <td className="py-2 px-3 border border-gray-400">
                                    <Link to={`/editShipments/${item._id}`} className="text-blue-800 underline cursor-pointer">Edit</Link>
                                </td>
                                <td>
                                    <button className="text-red-600 underline cursor-pointer px-2 text-semibold" onClick={() => handleDelete(item._id)}>Delete
                                        
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>

            </table>

        </div>
    )
}
export default Dashboard
import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer, Bounce } from "react-toastify";
import { Link } from "react-router-dom";

function AddShipments() {
    const [sendername, setSname] = useState("");
    const [status, setStatus] = useState("");
    const [receivername, setRname] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Submitted", { sendername, status, receivername }); // Debugging

        try {
            const response = await axios.post("http://localhost:8000/addShipments", {
                sendername,
                deliverystatus: status, // Fixed field name
                recievername: receivername // Fixed field name
            });

            console.log("Response Data:", response.data); // Debugging
            toast.success(response.data.message);
        } catch (error) {
            console.log("Error:", error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-12 pb-12">
            <h3 className="text-blue-600 text-center text-2xl mb-4 text-bold">Add New Shipment Details</h3>
            <Link to={'/'} className="mb-4 text-xl text-blue-600 cursor-pointer text-right py-3">View Shipments</Link>
            <form onSubmit={handleSubmit} className="w-full flex flex-col">
                <div className="mb-4">
                    <label className="text-lg px-3">Sender Name</label>
                    <input type="text" placeholder="Sender Name" onChange={(e) => setSname(e.target.value)} className="border border-gray-300 rounded px-3 py-2 text-lg"/>
                </div>
                <div className="mb-4">
                    <label className="text-lg px-2">Delivery Status</label>
                    <input type="text" placeholder="Status" onChange={(e) => setStatus(e.target.value)} className="border border-gray-300 rounded px-3 py-2 text-lg"/>
                </div>
                <div className="mb-4">
                    <label className="text-lg px-2">Receiver Name</label>
                    <input type="text" placeholder="Recipient's Name" onChange={(e) => setRname(e.target.value)} className="border border-gray-300 rounded px-3 py-2 text-lg"/>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="bg-blue-500 w-[50%] px-3 py-2 rounded-2xl text-white">Add New Shipment</button>
                </div>
            </form>

            
            <ToastContainer position="top-left" autoClose={2000} hideProgressBar={false} closeOnClick={true} transition={Bounce} theme="dark" />
        </div>
    );
}

export default AddShipments;

import React, { useState, useEffect } from "react"; // ✅ Added missing imports
import axios from "axios";
import { toast, ToastContainer, Bounce } from "react-toastify";
import { Link, useParams } from "react-router-dom"; // ✅ Added useParams

function EditShipments() {
    const [sendername, setSname] = useState("");
    const [status, setStatus] = useState(""); // ✅ Changed to string
    const [recievername, setRname] = useState(""); // ✅ Changed to string
    const { id } = useParams(); // ✅ Get ID from URL

    useEffect(() => {
        findShipment();
    }, [id]);

    const findShipment = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/findShipments/${id}`);
            setSname(response.data.sendername);
            setStatus(response.data.deliverystatus); // ✅ Fixed field name
            setRname(response.data.recievername);
        } catch (error) {
            console.log("Error fetching shipment:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8000/editShipments/${id}`, {
                sendername,
                deliverystatus: status, // ✅ Fixed field name
                recievername
            });
            toast.success(response.data.message);
        } catch (error) {
            console.log("Error updating shipment:", error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-12 pb-12">
            <h3 className="text-blue-600 text-center text-2xl mb-4 font-bold">Edit Shipment Details</h3>
            <Link to={'/'} className="mb-4 text-xl text-blue-600 cursor-pointer text-right py-3">View Shipments</Link>
            <form onSubmit={handleSubmit} className="w-full flex flex-col">
                <div className="mb-4">
                    <label className="text-lg px-3">Sender Name</label>
                    <input type="text" placeholder="Sender Name" value={sendername} onChange={(e) => setSname(e.target.value)} className="border border-gray-300 rounded px-3 py-2 text-lg"/>
                </div>
                <div className="mb-4">
                    <label className="text-lg px-2">Delivery Status</label>
                    <input type="text" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} className="border border-gray-300 rounded px-3 py-2 text-lg"/>
                </div>
                <div className="mb-4">
                    <label className="text-lg px-2">Receiver Name</label>
                    <input type="text" placeholder="Recipient's Name" value={recievername} onChange={(e) => setRname(e.target.value)} className="border border-gray-300 rounded px-3 py-2 text-lg"/>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="bg-blue-500 w-[50%] px-3 py-2 rounded-2xl text-white">Update Shipment</button>
                </div>
            </form>

            <ToastContainer position="top-left" autoClose={2000} hideProgressBar={false} closeOnClick={true} transition={Bounce} theme="dark" />
        </div>
    );
}

export default EditShipments;

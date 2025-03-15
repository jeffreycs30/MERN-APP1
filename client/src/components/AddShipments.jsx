import React,{ useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";



function AddShipments(){

    const [sendername, setSname] = useState("");
    const [status, setStatus] = useState("");
    const [recievername, setRname] = useState("");

    const handleSubmit = async (e) => {
     e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/addShipments", {
            sendername,
            deliverystatus,
            recievername,
            });
            toast.success(response.data.message);
        } catch (error) {
        console.log(error);
        }
    };

    return(
        <div>
            <h3 className="text-blue text-center">Add New Shipment Details</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                <label>Sender Name</label>
                <input type="text" placeholder="Sender Name" onChange={(e) => setSname(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label>Delivery Status</label>
                    <input type="number" placeholder="Status" onChange={(e) => setStatus(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label>Receiver Name</label>
                    <input type="number" placeholder="Recipient's Name" onChange={(e) => setRname(e.target.value)}/>
                </div>
                <div className="flex justify-center">
                    <button type="submit">Add New Shipment</button>
                </div>
                <ToastContainer
                    position="top-left"
                    autoClose={2000}
                    hideProgressBar={false}
                    closeOnClick={true}
                    transition={Bounce}
                    theme="dark"
                />
            </form>

        </div>
    )
}
export default AddShipments
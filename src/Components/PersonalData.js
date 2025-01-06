// import React, { useState } from "react";





// const PersonalData = (props) => {
//     function AcademicInfo () {
//       props.setCurrentStep(2)
// // window.location.href="/AcademicInfo"
//     }
// const [formData, setFormData] = useState({
//     name: "",
//     dob: "",
//     gender: "",
//     fatherGuardianName: "",
//     presentAddress: "",
//     presentPincode: "",
//     contact: "",
//     alternateContact: "",
//     email: "",
//     emergencyContact: "",
//     proof: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = "Name is required.";
//     if (!formData.dob) newErrors.dob = "Date of Birth is required.";
//     if (!formData.gender) newErrors.gender = "Gender is required.";
//     if (!formData.fatherGuardianName)
//       newErrors.fatherGuardianName = "Father's/Guardian's Name is required.";
//     if (!formData.presentAddress)
//       newErrors.presentAddress = "Present Address is required.";
//     if (!formData.presentPincode)
//       newErrors.presentPincode = "Present Pincode is required.";
//     if (!formData.contact) newErrors.contact = "Contact is required.";
//     if (!formData.email) newErrors.email = "Email is required.";
//     if (!formData.emergencyContact)
//       newErrors.emergencyContact = "Emergency Contact is required.";
//     if (!formData.proof) newErrors.proof = "Proof for identity is required.";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       console.log("Personal Information Submitted:", formData);
   
//       localStorage.setItem("personalData", JSON.stringify(formData));
//       props.setCurrentStep(2)
//       setFormData({
//         name: "",
//         dob: "",
//         gender: "",
//         fatherGuardianName: "",
//         presentAddress: "",
//         presentPincode: "",
//         contact: "",
//         alternateContact: "",
//         email: "",
//         emergencyContact: "",
//         proof: "",
//       });
//       setErrors({});
//     } else {
//       alert("Please fill all required fields.");
//     }
//   };

//   return (
  
    
//     <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "auto" }}>
//       <h2 className="PHead">Personal Information Form</h2>
      
//       <div>
//         <label>Name (required):</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//         {errors.name && <p className="error">{errors.name}</p>}
//       </div>

//       <div>
//         <label>Date of Birth (required):</label>
//         <input
//           type="date"
//           name="dob"
//           value={formData.dob}
//           onChange={handleChange}

//         />
//         {errors.dob && <p className="error">{errors.dob}</p>}
//       </div>

//       <div>
//         <label>Gender (required):</label>
//         <select name="gender" value={formData.gender} onChange={handleChange}>
//           <option value="">Select Gender</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//           <option value="other">Other</option>
//         </select>
//         {errors.gender && <p className="error">{errors.gender}</p>}
//       </div>

//       <div>
//         <label>Father's/Guardian's Name (required):</label>
//         <input
//           type="text"
//           name="fatherGuardianName"
//           value={formData.fatherGuardianName}
//           onChange={handleChange}
//         />
//         {errors.fatherGuardianName && <p className="error">{errors.fatherGuardianName}</p>}
//       </div>

//       <div>
//         <label>Present Address (required):</label>
//         <textarea
//           name="presentAddress"
//           value={formData.presentAddress}
//           onChange={handleChange}
//         ></textarea>
//         {errors.presentAddress && <p className="error">{errors.presentAddress}</p>}
//       </div>

//       <div>
//         <label>Present Pincode (required):</label>
//         <input
//           type="text"
//           name="presentPincode"
//           value={formData.presentPincode}
//           onChange={handleChange}
//         />
//         {errors.presentPincode && <p className="error">{errors.presentPincode}</p>}
//       </div>

//       <div>
//         <label>Contact (required):</label>
//         <input
//           type="text"
//           name="contact"
//           value={formData.contact}
//           onChange={handleChange}
//         />
//         {errors.contact && <p className="error">{errors.contact}</p>}
//       </div>

//       <div>
//         <label>Alternate Contact:</label>
//         <input
//           type="text"
//           name="alternateContact"
//           value={formData.alternateContact}
//           onChange={handleChange}
//         />
//       </div>

//       <div>
//         <label>Email (required):</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         {errors.email && <p className="error">{errors.email}</p>}
//       </div>

//       <div>
//         <label>Emergency Contact (required):</label>
//         <input
//           type="text"
//           name="emergencyContact"
//           value={formData.emergencyContact}
//           onChange={handleChange}
//         />
//         {errors.emergencyContact && <p className="error">{errors.emergencyContact}</p>}
//       </div>

//       <div>
//         <label>Submitted Proof for Identity (required):</label>
//         <select name="proof" value={formData.proof} onChange={handleChange}>
//           <option value="">Select Proof</option>
//           <option value="aadhaar">Aadhaar</option>
//           <option value="pan">PAN</option>
//           <option value="voterId">Voter ID</option>
//           <option value="drivingLicence">Driving Licence</option>
//         </select>
//         {errors.proof && <p className="error">{errors.proof}</p>}
//       </div>
      
       
     
// <div>
    
// <button type="submit"  className="Button1">Next</button>
     
//  </div> 
// </form>
//   );
// };

// export default PersonalData;
































import React, { useState } from "react";

const PersonalData = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    fatherGuardianName: "",
    presentAddress: "",
    presentPincode: "",
    contact: "",
    alternateContact: "",
    email: "",
    emergencyContact: "",
    proof: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.dob) newErrors.dob = "Date of Birth is required.";
    if (!formData.gender) newErrors.gender = "Gender is required.";
    if (!formData.fatherGuardianName)
      newErrors.fatherGuardianName = "Father's/Guardian's Name is required.";
    if (!formData.presentAddress)
      newErrors.presentAddress = "Present Address is required.";
    if (!formData.presentPincode)
      newErrors.presentPincode = "Present Pincode is required.";
    if (!formData.contact) newErrors.contact = "Contact is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.emergencyContact)
      newErrors.emergencyContact = "Emergency Contact is required.";
    if (!formData.proof) newErrors.proof = "Proof for identity is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Personal Information Submitted:", formData);
      localStorage.setItem("personalData", JSON.stringify(formData));
      props.setCurrentStep(2);
      setFormData({
        name: "",
        dob: "",
        gender: "",
        fatherGuardianName: "",
        presentAddress: "",
        presentPincode: "",
        contact: "",
        alternateContact: "",
        email: "",
        emergencyContact: "",
        proof: "",
      });
      setErrors({});
    } else {
      alert("Please fill all required fields.");
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        backgroundColor: "#fff",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Personal Information Form
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <div>
          <label>Name (required):</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
          />
          {errors.name && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors.name}</p>
          )}
        </div>

        <div>
          <label>Date of Birth (required):</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
          />
          {errors.dob && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors.dob}</p>
          )}
        </div>

        <div>
          <label>Gender (required):</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors.gender}</p>
          )}
        </div>

        <div>
          <label>Father's/Guardian's Name (required):</label>
          <input
            type="text"
            name="fatherGuardianName"
            value={formData.fatherGuardianName}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
          />
          {errors.fatherGuardianName && (
            <p style={{ color: "red", fontSize: "14px" }}>
              {errors.fatherGuardianName}
            </p>
          )}
        </div>

        <div>
          <label>Present Address (required):</label>
          <textarea
            name="presentAddress"
            value={formData.presentAddress}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              height: "80px",
            }}
          ></textarea>
          {errors.presentAddress && (
            <p style={{ color: "red", fontSize: "14px" }}>
              {errors.presentAddress}
            </p>
          )}
        </div>

        <div>
          <label>Present Pincode (required):</label>
          <input
            type="text"
            name="presentPincode"
            value={formData.presentPincode}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
          />
          {errors.presentPincode && (
            <p style={{ color: "red", fontSize: "14px" }}>
              {errors.presentPincode}
            </p>
          )}
        </div>

        <div>
          <label>Contact (required):</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
          />
          {errors.contact && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors.contact}</p>
          )}
        </div>

        <div>
          <label>Alternate Contact:</label>
          <input
            type="text"
            name="alternateContact"
            value={formData.alternateContact}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
          />
        </div>

        <div>
          <label>Email (required):</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
          />
          {errors.email && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors.email}</p>
          )}
        </div>

        <div>
          <label>Emergency Contact (required):</label>
          <input
            type="text"
            name="emergencyContact"
            value={formData.emergencyContact}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
          />
          {errors.emergencyContact && (
            <p style={{ color: "red", fontSize: "14px" }}>
              {errors.emergencyContact}
            </p>
          )}
        </div>

        <div>
          <label>Submitted Proof for Identity (required):</label>
          <select
            name="proof"
            value={formData.proof}
            onChange={handleChange}
            style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
          >
            <option value="">Select Proof</option>
            <option value="aadhaar">Aadhaar</option>
            <option value="pan">PAN</option>
            <option value="voterId">Voter ID</option>
            <option value="drivingLicence">Driving Licence</option>
          </select>
          {errors.proof && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors.proof}</p>
          )}
        </div>

        <div className="text-end">
          <button 
            type="submit"
            style={{
              padding: "10px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              width:"fit-content"
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalData;

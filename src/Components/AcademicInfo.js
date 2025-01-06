// import React, { useState } from "react"; 


// const AcademicInfo = (props) => {

//     function EmploymentInfo ()  {
//       props.setCurrentStep (1)
//         // window.location.href="/EmploymentInfo"
//             }
//     function  PersonalData () {
//       props.setCurrentStep (3)
//         // window.location.href='/PersonalData'
//     }

//   const [formData, setFormData] = useState({
//     highestQualification: "",
//     passingYear: "",
//     collegeName: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.highestQualification)
//       newErrors.highestQualification = "Highest Qualification is required.";
//     if (!formData.passingYear)
//       newErrors.passingYear = "Passing Year is required.";
//     if (!formData.collegeName)
//       newErrors.collegeName = "College Name is required.";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       console.log("Academic Information Submitted:", formData);
     
//       localStorage.setItem("personalData", JSON.stringify(formData));
//       props.setCurrentStep(3);
     
//       setFormData({
//         highestQualification: "",
//         passingYear: "",
//         collegeName: "",
//       });
//       setErrors({});
//     } else {
//       alert("Please fill all required fields.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "auto" }}>
//       <h2 className="AHead">Academic Information Form</h2>

//       <div>
//         <label>Highest Qualification (required):</label>
//         <select
//           name="highestQualification"
//           value={formData.highestQualification}
//           onChange={handleChange}
//         >
//           <option value="">Select Qualification</option>
//           <option value="High School">High School</option>
//           <option value="Intermediate">Intermediate</option>
//           <option value="Bachelor's Degree">Bachelor's Degree</option>
//           <option value="Master's Degree">Master's Degree</option>
//           <option value="PhD">PhD</option>
//         </select>
//         {errors.highestQualification && (
//           <p className="error">{errors.highestQualification}</p>
//         )}
//       </div>

//       <div>
//         <label>Passing Year of Highest Qualification (required):</label>
//         <input
//           type="number"
//           name="passingYear"
//           value={formData.passingYear}
//           onChange={handleChange}
//           placeholder="e.g., 2020"
//         />
//         {errors.passingYear && <p className="error">{errors.passingYear}</p>}
//       </div>

//       <div>
//         <label>College Name (required):</label>
//         <input
//           type="text"
//           name="collegeName"
//           value={formData.collegeName}
//           onChange={handleChange}
//         />
//         {errors.collegeName && <p className="error">{errors.collegeName}</p>}
//       </div>

//       <div className="Button3">

//       <button onClick={PersonalData} style={{ marginTop: "20px" }}>
//         Previous
//       </button>
//       <button  type="Submit" className="Button2">Next</button>
//       </div>
//     </form>
    

//   );
// };

// export default AcademicInfo;































import React, { useState } from "react";

const AcademicInfo = (props) => {
  const [formData, setFormData] = useState({
    highestQualification: "",
    passingYear: "",
    collegeName: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.highestQualification)
      newErrors.highestQualification = "Highest Qualification is required.";
    if (!formData.passingYear)
      newErrors.passingYear = "Passing Year is required.";
    if (!formData.collegeName)
      newErrors.collegeName = "College Name is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Academic Information Submitted:", formData);
      localStorage.setItem("academicData", JSON.stringify(formData));
      props.setCurrentStep(3); // Move to the next step
      setFormData({
        highestQualification: "",
        passingYear: "",
        collegeName: "",
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
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Academic Information Form
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
          <label>Highest Qualification (required):</label>
          <select
            name="highestQualification"
            value={formData.highestQualification}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <option value="">Select Qualification</option>
            <option value="High School">High School</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Bachelor's Degree">Bachelor's Degree</option>
            <option value="Master's Degree">Master's Degree</option>
            <option value="PhD">PhD</option>
          </select>
          {errors.highestQualification && (
            <p style={{ color: "red", fontSize: "14px" }}>
              {errors.highestQualification}
            </p>
          )}
        </div>

        <div>
          <label>Passing Year of Highest Qualification (required):</label>
          <input
            type="number"
            name="passingYear"
            value={formData.passingYear}
            onChange={handleChange}
            placeholder="e.g., 2020"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
            }}
          />
          {errors.passingYear && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors.passingYear}</p>
          )}
        </div>

        <div>
          <label>College Name (required):</label>
          <input
            type="text"
            name="collegeName"
            value={formData.collegeName}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
            }}
          />
          {errors.collegeName && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors.collegeName}</p>
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
       <button
  className="button-previous"
  type="button"
  onClick={() => props.setCurrentStep(1)}
  style={{
    padding: "10px 20px",
    
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  marginLeft:"0px",
  width:"fit-content"
    
  
  
  }}
  onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
  onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
>
  Previous
</button>
<button
  className="button-next"
  type="submit"
  style={{
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
 

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

export default AcademicInfo;

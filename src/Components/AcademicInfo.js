import React, { useState } from "react"; 


const AcademicInfo = (props) => {

    function EmploymentInfo ()  {
      props.setCurrentStep (1)
        // window.location.href="/EmploymentInfo"
            }
    function  PersonalData () {
      props.setCurrentStep (3)
        // window.location.href='/PersonalData'
    }

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
     
      localStorage.setItem("personalData", JSON.stringify(formData));
      props.setCurrentStep(3);
     
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
    <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "auto" }}>
      <h2 className="AHead">Academic Information Form</h2>

      <div>
        <label>Highest Qualification (required):</label>
        <select
          name="highestQualification"
          value={formData.highestQualification}
          onChange={handleChange}
        >
          <option value="">Select Qualification</option>
          <option value="High School">High School</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Bachelor's Degree">Bachelor's Degree</option>
          <option value="Master's Degree">Master's Degree</option>
          <option value="PhD">PhD</option>
        </select>
        {errors.highestQualification && (
          <p className="error">{errors.highestQualification}</p>
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
        />
        {errors.passingYear && <p className="error">{errors.passingYear}</p>}
      </div>

      <div>
        <label>College Name (required):</label>
        <input
          type="text"
          name="collegeName"
          value={formData.collegeName}
          onChange={handleChange}
        />
        {errors.collegeName && <p className="error">{errors.collegeName}</p>}
      </div>

      <div className="Button3">

      <button onClick={PersonalData} style={{ marginTop: "20px" }}>
        Previous
      </button>
      <button  type="Submit" className="Button2">Next</button>
      </div>
    </form>
    

  );
};

export default AcademicInfo;
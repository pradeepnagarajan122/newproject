import React, { useState } from "react";


const EmploymentInfo = (props) => {
    function AcademicInfo () {
      props.setCurrentStep (2)
      // window.location.href="/AcademicInfo"
    }

    function Registration () {
      props.setCurrentStep (4)
      // window.location.href="/Registration"
    }

  const [formData, setFormData] = useState({
    occupation: "",
    companyName: "",
    joinedDate: "",
    duration: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.occupation) newErrors.occupation = "Occupation is required.";
    if (!formData.companyName)
      newErrors.companyName = "Company Name is required.";
    if (!formData.joinedDate) newErrors.joinedDate = "Joined Date is required.";
    if (!formData.duration) newErrors.duration = "Duration is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Employment Information Submitted:", formData);
     
      localStorage.setItem("personalData", JSON.stringify(formData));
      props.setCurrentStep(4);
      
      // console.log('Entered Details: ',fdgd, hghf, jhjhghg, hfhgf)
      setFormData({
        occupation: "",
        companyName: "",
        joinedDate: "",
        duration: "",
      });
      setErrors({});
    } else {
      alert("Please fill all required fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Employment Information Form</h2>

      <div>
        <label>Occupation/Previous Experience (required):</label>
        <input
          type="text"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
        />
        {errors.occupation && <p className="error">{errors.occupation}</p>}
      </div>

      <div>
        <label>Company Name (required):</label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
        {errors.companyName && <p className="error">{errors.companyName}</p>}
      </div>

      <div>
        <label>Joined Date (required):</label>
        <input
          type="date"
          name="joinedDate"
          value={formData.joinedDate}
          onChange={handleChange}
        />
        {errors.joinedDate && <p className="error">{errors.joinedDate}</p>}
      </div>

      <div>
        <label>Duration (required):</label>
        <input
          type="text"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          placeholder="e.g., 2 years, 6 months"
        />
        {errors.duration && <p className="error">{errors.duration}</p>}
      </div>

      <div className="Button4">

      <button onClick={AcademicInfo} style={{ marginTop: "20px" }}>
        Previous
      </button>
      
      <button  type="Submit" className="Button5">Next</button>
      </div>
    </form>
  );

 
};

export default EmploymentInfo;

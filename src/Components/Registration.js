


import { useState } from "react";
import { Link } from "react-router-dom";

const Registration = (props) => {
  function EmploymentInf() {
    props.setCurrentStep(3);
  }
 
  const [formData, setFormData] = useState({
    registrationDate: "",
    courseSelection: "",
    batchSelection: "",
    howDidYouKnow: "",
    friendName: "",
    feesMethod: "",
    identityProof: "",
  });

  const [errors, setErrors] = useState({});
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== "friendName") {
        newErrors[key] = `${key} is required.`;
      }
    });

    // Check if "howDidYouKnow" is selected
    if (!formData.howDidYouKnow) {
      newErrors.howDidYouKnow = "Please select how you came to know about us.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate() && isChecked) {
      console.log("Student Information Submitted:", formData);
     
      alert("Student Information Submitted");
      localStorage.setItem("personalData", JSON.stringify(formData));
      setFormData({
        registrationDate: "",
        courseSelection: "",
        batchSelection: "",
        howDidYouKnow: "",
        friendName: "",
        feesMethod: "",
        identityProof: "",
      });
      setErrors({});
    } else {
      alert("Please Fill All Requirements.");
    }
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="form-container">
      <h2 className="submit-btn">Course Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Date of Registration */}
        <div className="form-group">
          <label htmlFor="registrationDate">Date of Registration:</label>
          <input
            type="date"
            id="registrationDate"
            name="registrationDate"
            value={formData.registrationDate}
            onChange={handleChange}
          />
          {errors.registrationDate && (
            <p className="error">{errors.registrationDate}</p>
          )}
        </div>

        {/* Course Selection */}
        <div className="form-group">
          <label htmlFor="courseSelection">Course Selection:</label>
          <select
            id="courseSelection"
            name="courseSelection"
            value={formData.courseSelection}
            onChange={handleChange}
          >
            <option value="">-- Select Course --</option>
            <option value="frontend">
              Frontend Web Development (React.js)
            </option>
            <option value="backend">
              Backend Web Development (Node.js, Express.js, MongoDB)
            </option>
            <option value="fullstack">
              Full Stack Web Development (MERN Stack)
            </option>
            <option value="hrAnalytics">HR Analytics</option>
            <option value="dataScience">Data Science</option>
            <option value="embedded">Embedded Development</option>
            <option value="wiringHarness">Wiring Harness</option>
            <option value="automobile">
              Automobile Interior & Exterior Designing
            </option>
          </select>
          {errors.courseSelection && (
            <p className="error">{errors.courseSelection}</p>
          )}
        </div>

        {/* Batch Selection */}
        <div className="form-group">
          <label htmlFor="batchSelection">Batch Selection:</label>
          <select
            id="batchSelection"
            name="batchSelection"
            value={formData.batchSelection}
            onChange={handleChange}
          >
            <option value="">-- Select Batch --</option>
            <option value="SB033">SB033 - Dec Batch</option>
            <option value="SB034">SB034 - Jan Batch</option>
            <option value="SB035">SB035 - Feb Batch</option>
          </select>
          {errors.batchSelection && (
            <p className="error">{errors.batchSelection}</p>
          )}
        </div>

        {/* How Did You Know */}
        <div className="form-group">
          <p>How Did You Know About Us?</p>
          <div>
            <input
              type="radio"
              id="friend"
              name="howDidYouKnow"
              value="friend"
              checked={formData.howDidYouKnow === "friend"}
              onChange={handleChange}
            />
            <label htmlFor="friend">Friend</label>
            {formData.howDidYouKnow === "friend" && (
              <input
                type="text"
                placeholder="Enter Friend's Name"
                name="friendName"
                value={formData.friendName}
                onChange={handleChange}
              />
            )}
          </div>

          <div>
            <input
              type="radio"
              id="newspaper"
              name="howDidYouKnow"
              value="newspaper"
              checked={formData.howDidYouKnow === "newspaper"}
              onChange={handleChange}
            />
            <label htmlFor="newspaper">Newspaper</label>
          </div>

          <div>
            <input
              type="radio"
              id="seminar"
              name="howDidYouKnow"
              value="seminar"
              checked={formData.howDidYouKnow === "seminar"}
              onChange={handleChange}
            />
            <label htmlFor="seminar">Seminar</label>
          </div>

          <div>
            <input
              type="radio"
              id="exStudent"
              name="howDidYouKnow"
              value="ex-student"
              checked={formData.howDidYouKnow === "ex-student"}
              onChange={handleChange}
            />
            <label htmlFor="exStudent">Ex-student</label>
          </div>

          {errors.howDidYouKnow && (
            <p className="error">{errors.howDidYouKnow}</p>
          )}
        </div>

        {/* Fees Method */}
        <div className="form-group">
          <label htmlFor="feesMethod">Course Fees Method:</label>
          <select
            id="feesMethod"
            name="feesMethod"
            value={formData.feesMethod}
            onChange={handleChange}
          >
            <option value="">-- Select Fees Method --</option>
            <option value="freshRegistration">Fresh Registration</option>
            <option value="instalment">Instalment</option>
            <option value="fullPayment">Full Payment</option>
            <option value="upgradation">Upgradation</option>
          </select>
          {errors.feesMethod && <p className="error">{errors.feesMethod}</p>}
        </div>

        {/* Submitted Proof for Identity */}
        <div className="form-group">
          <label htmlFor="identityProof">Submitted Proof for Identity:</label>
          <select
            id="identityProof"
            name="identityProof"
            value={formData.identityProof}
            onChange={handleChange}
          >
            <option value="">-- Select Identity Proof --</option>
            <option value="aadhaar">Aadhaar</option>
            <option value="pan">PAN</option>
            <option value="voterID">Voter ID</option>
            <option value="drivingLicence">Driving Licence</option>
          </select>
          {errors.identityProof && (
            <p className="error">{errors.identityProof}</p>
          )}
        </div>

        {/* Terms & Conditions */}
        <div className="form-group">
          <input
            type="checkbox"
            id="terms"
            onChange={handleCheckboxChange}
            checked={isChecked}
          />
          <label htmlFor="terms">
            <Link to="/TermsCon">
              I agree and accept all the terms and conditions.
            </Link>
          </label>
        </div>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <button onClick={EmploymentInf} className="MySubmit">
            Previous
          </button>

          {/* Submit Button */}
          <button type="submit" style={{ padding: "10px", margin: "10px" }}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;



          


import React from "react";
import "../Css/ProgressSetup.css"; 

const steps = ["Personal Data", "Academic Info", "Employment Info", "Registration"];

const ProgressSetup = (props) => {




  return (
    <div className="progress-setup-container">
      <div className="progress-bar">
        {steps.map((step, index) => (
          <div key={index} className={`progress-step ${index + 1 <= props.currentStep ? "active" : ""}`} >
            <div className="step-number">{index + 1}</div>
            <div className="step-label">{step}</div>
          </div>
        ))}
        <div
          className="progress-line"
          style={{
            width: `${((props.currentStep - 1) / (steps.length - 1)) * 100}%`,
          }}
        ></div>
      </div>

    
   
    </div>
  );
};

export default ProgressSetup;
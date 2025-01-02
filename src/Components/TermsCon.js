








import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function TermsAndCon(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Accessing the data passed from the previous page
  const previousPageData = location.state || {};

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isChecked) {
      setFormSubmitted(true);
      console.log('Previous page data:', previousPageData); // Log the data to the console
      alert('Form submitted successfully!');
     
    } else {
      alert('You must agree to the terms and conditions before submitting the form.');
    }
  };

  const goToPreviousStep = () => {
    props.setCurrentStep(4);
    navigate('/');
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h1>Terms & Conditions</h1>
      <ul>
        <li>Students must follow the batch time without fail.</li>
        <li>Students must attend all classes, seminars, and workshops without fail.</li>
        <li>Students must submit their given project at the end of each session.</li>
        <li>Leave should be pre-intimated to the respective person (Trainer).</li>
        <li>Students must pay their instalment (EMI) on the mentioned date.</li>
        <li>If the instalment is not paid, a fine will be applicable.</li>
        <li>Fees once paid will not be refunded in any circumstance.</li>
        <li>Course break or cancellation will not be allowed under any circumstance.</li>
        <li>Course completion certificate (CC) will be issued only after finishing the given projects.</li>
        <li>
          In case of an instant requirement for the certificate, Rs. 1000/- will be charged extra
          (within 5 days).
        </li>
      </ul>
      <form>
        <div>
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            I agree to the terms and conditions.
          </label>
        </div>
        <div
          className="container"
          style={{ justifyContent: 'space-around', display: 'flex' }}
        >
          <button
            type="button"
            onClick={goToPreviousStep}
            style={{ padding: '10px', margin: '10px', marginRight: '350px' }}
          >
            Previous
          </button>

          <button
            type="submit"
            onClick={handleSubmit}
            disabled={formSubmitted}
            style={{ marginTop: '20px', padding: '10px', margin: '10px' }} 
            
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default TermsAndCon;

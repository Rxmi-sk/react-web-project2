import React from 'react';
import { useNavigate  } from 'react-router-dom';

  
const RegistrationTwo = () => {
  const navigate  = useNavigate ();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form validation and submit form data
    // to the desired endpoint
    navigate('/Confirmation');
  };

  

  return (
    <>
      <h1 className="ha" style={{ color: "white" }}>
        Registration-Step 2
      </h1>

      <div className="Reg2" style={{ color: "white" }}>
        <form onSubmit={handleSubmit}>
          <br />
            <label htmlFor="creditCardNumber">Credit Card Number:</label>
            <input
              type="text"
              id="creditCardNumber"
              name="creditCardNumber"
              placeholder='**** **** **** ****'
              pattern="[0-9]{16}"
              required
            />
<br/><br/>
            <label htmlFor="expiryDate">Expiry Date (MM/YY):</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                placeholder='MM/YY'
                pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
                required
            />

            <br/>
            <br/>
            <label htmlFor="cvv">CVV:</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                placeholder='***'
                pattern="[0-9]{3}"
                required
            />
      <br/>
      <br/>
        <button type="submit" className="btn-four">Complete Registration</button>
        </form>
      </div>
    </>
  );
};

export default RegistrationTwo;

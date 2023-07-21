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
        Registration-Step 2 <br></br><br></br>
      </h1>

      <div className="Reg2" style={{ color: "white" }}>
      <div class="py-[7%]">
            <div class="containerx w-[85%] mx-auto flex items-center justify-between gap-20 bg-cardBG rounded-2xl p-[2%] shadow-lg">
            <div class="w-full">
              <div class="w-full">
        <form onSubmit={handleSubmit}>
        <br />
                <div className="elem-group">
                  <label htmlFor="name" style={{ color: "white", textAlign: "left" }}>
                    Name on Card:&nbsp;
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="visitor_name"
                    placeholder="John Doe"
                    pattern="[A-Z\sa-z]{3,20}"
                    required
                  />
                </div>
                <br/>
            <label htmlFor="expiryDate">Birth Date (DD/MM/YYYY):&nbsp;</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                placeholder='DD/MM/YY'
                pattern="(0[1-9]|[1-2][0-9]|3[0-1])/(0[1-9]|1[0-2])/\d{4}"
                required
            />
          <br/><br/>
            <label htmlFor="creditCardNumber">Credit Card Number:&nbsp;</label>
            <input
              type="text"
              id="creditCardNumber"
              name="creditCardNumber"
              placeholder='**** **** **** ****'
              pattern="[0-9]{16}"
              required
            />
<br/><br/>
            <label htmlFor="expiryDate">Expiry Date (MM/YY):&nbsp;</label>
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
            <label htmlFor="cvv">CVV:&nbsp;</label>
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
      </div>
      
      <div class="w-full">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFHGrjTa0tYdvUcZch90n_xYfq8Jul0Xd4Jw&usqp=CAU" alt="left_col_image" class="regpic2"></img>
        </div>   

        </div>
        </div>
        </div>
    </>
  );
};

export default RegistrationTwo;
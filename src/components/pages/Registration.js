import React from 'react';
import { useNavigate  } from 'react-router-dom';

  
const Registration = () => {
  const navigate  = useNavigate ();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form validation and submit form data
    // to the desired endpoint
    navigate('/RegistrationTwo');
  };

  

  return (
    <>
      <h1 className="ha" style={{ color: "white" }}>
        Registration-Step 1 <br></br><br></br>
      </h1>
    
          <div className="Reg1">
            <div class="py-[7%]">
            <div class="containerl w-[85%] mx-auto flex items-center justify-between gap-20 bg-cardBG rounded-2xl p-[2%] shadow-lg">
            <div class="w-full">
              <div class="w-full">
              <form onSubmit={handleSubmit}>
                <br />
                <div className="elem-group">
                  <label htmlFor="name" style={{ color: "white", textAlign: "left" }}>
                    Your Name&nbsp;
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
                <br />

                <div className="elem-group">
                  <label htmlFor="email" style={{ color: "white", textAlign: "left" }}>
                    Your Email&nbsp;
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="visitor_email"
                    placeholder="john.doe@email.com"
                    required
                  />
                </div>

                <br />

                <div className="elem-group">
                  <label htmlFor="phone" style={{ color: "white", textAlign: "left" }}>
                    Your Phone&nbsp;
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="visitor_phone"
                    placeholder="613-233-3444"
                    pattern="(\d{3})-?\s?(\d{3})-?\s?(\d{4})"
                    required
                  />
                </div>
                <br />
                <div className="elem-group inlined">
                  <label htmlFor="checkin-date" style={{ color: "white", textAlign: "left" }}>
                    Date&nbsp;
                  </label>
                  <input type="date" id="checkin-date" name="checkin" required />
                </div>
                <br />
                
                <div className="elem-group">
                  <label htmlFor="service-selection" style={{ color: "white", textAlign: "left" }}>
                    Select a Game&nbsp;
                  </label>
                  <select id="service-selection" name="service_preference" required>
                    <option value="">Choose a Game from the List</option>
                    <option value="Richcraft">Richcraft Soccer Field | 60 min | 20$</option>
                    <option value="Immaculata">Immaculata Field | 60 min | 15$</option>
                    <option value="Franklin ">Ben Franklin Superdome | 90 min | 23$</option>
                    <option value="Sooners">Sooners Megadome | 90 min | 19$</option>
                    <option value="Branchaud">Complexe Branchaud-Brière | 60 min | 20$</option>
                    <option value="Louis">Louis Riel Dome | 90 min | 25$</option>
                  </select>
                </div>
                <br />

                <div className="elem-group">
                  <label htmlFor="specialist" style={{ color: "white", textAlign: "left" }}>
                    Select a Position&nbsp;
                  </label>
                  <select id="specialist" name="specialist" required>
                    <option value="">Choose a Position from the List</option>
                    <option value="Goalie">Goalie</option>
                    <option value="Defense">Defense</option>
                    <option value="Midfield ">Midfield</option>
                    <option value="Attack">Attack</option>
                    </select>
              </div>
              <br />

              <button type="submit" className="btn-tree">Next</button>
              {/* <input type="submit" value="Next" className="btn-tree" /> */}
              </form>
            </div>
      </div>
      
      <div class="w-full">
          <img src="https://www.si.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_760/MTY4MDA2OTUyNDYyNjU2ODk2/french-player-zinedine-zidane-c-holdi-5c6c4965f44f88b130000001jpg.webp" alt="left_col_image" class="regpic"></img>
        </div>   

        </div>
        </div>
        </div>
    
          
    </>
  );
};

export default Registration;

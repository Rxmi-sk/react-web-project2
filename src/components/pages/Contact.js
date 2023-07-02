import React from "react";
import Contactform from "../Contactform";



const Contact = () => {
    return (
        <div className="containerg">
            <div className="contact-container">
                <h1 className="ha" style={{color:"white"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact Us</h1>
                <Contactform />
            </div>
  
        <div className="additional-content">
          <h3 style={{color:"white"}}><br></br><br></br><br></br>Frequently&nbsp;Asked&nbsp;Questions</h3>
          
          <div id="accordion">
                <div class="card">
                    <div class="card-header" id="headingOne">
                         <h5 class="mb-0">
                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            How can I contact 3X7GMZ?
                            </button>
                        </h5>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card-body">
                        You can reach our team by sending an email to 3X7GMZ@gmail.com or by calling us at 613-847-4567. You can also send a simple question in the contact form located on the left side of this page.
                        </div>
                    </div>
                </div>

         <div class="card">
            <div class="card-header" id="headingTwo">
                <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Are my payment details secure?
                    </button>
                </h5>
            </div>
            
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div class="card-body">
                Absolutely! We take the security of your payment information seriously. Our website is encrypted with SSL (Secure Socket Layer) technology to protect your personal and financial data. We also use trusted payment gateways to process your transactions securely. 
                </div>
            </div>
        </div>
        
        <div class="card">
            <div class="card-header" id="headingThree">
                <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    How long do games last?
                    </button>
                </h5>
            </div>
            
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div class="card-body">
                3X7GMZ matches usually last either 60 or 90 minutes. The length of the match, field location, and more important information will be specified before you register for a game
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header" id="headingFour">
                <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    How much does it cost to play?
                    </button>
                </h5>
            </div>
            
            <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                <div class="card-body">
                A 3X7GMZ match can cost anywhere from 15$ to 29.99$. The cost varies depending on the field location, the length of the game, the weather (Refs and gatekeepers get paid more when having to deal with bad weather), the cost of renting a field, and more. 
                </div>
            </div>
        </div>


        <div class="card">
            <div class="card-header" id="headingFive">
                <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Are spectators allowed?
                    </button>
                </h5>
            </div>
            
            <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                <div class="card-body">
                Spectators being allowed or not will be specified in the confirmation email sent to the players after registration. We require a spectating fee of 2.99$ payed upfront to watch the game (Any spectator caught trying to sneak into the game will be banned for life).
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header" id="headingSix">
                <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    Are there any age restrictions to play?
                    </button>
                </h5>
            </div>
            
            <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                <div class="card-body">
                The answer to this question is both yes and no. Technically, all participants must be 16+ years old. However, if the ref/gatekeepers deem a player younger than 16 years old fit/strong enough to play then they will be accepted. By registering to a game, players will have automatically signed a personal injury waiver form. 
                </div>
            </div>
        </div> 

        </div>
                </div>
      </div>
        // <div class="row">
        // <h1 class="ha">Contact Us</h1>
        // <Contactform />


        //     <h2>Additional Content</h2>
        //     <p>This is some additional content on the page.</p>
        // </div>

    );
  };
  
  export default Contact;

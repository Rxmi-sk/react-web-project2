import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image';

export default function Fields(){
    return(
    <>
    <h1 className="ha" style={{color:"white"}}> Our Fields</h1>

    
    
        <div class="row">
            <div class="col">        
                <div class="card-field">
                    <Image class="card-img-top-field" src="https://ksc.e2esoccer.com/Downloads/374/Richcraft_2.jpg" alt="Card image cap" fluid/>
                    <div class="card-body-field">
                        <h5 class="card-title-field">Richcraft Soccer Field - Kanata</h5>
                        <p class="card-text-field"> The Richcraft Field is a high quality outdoor turf soccer field located in Kanata. It's been one of our number one outdoor fields for many years. The field is closed off during the Winter season.</p>
                        <a href="/RegistrationTwo" target="_blank" class="btn btn-secondary" style={{ border: 'none' }}>View Location</a>
                    </div>
                </div>
            </div>

            <div class="col">        
                <div class="card-field">
                    <Image class="card-img-top-field" src="https://images.ottawafootysevens.com/footysevens//useruploaded/medium/1739.jpg" alt="Card image cap" fluid/>
                    <div class="card-body-field">
                        <h5 class="card-title-field">Immaculata Field | Central Ottawa</h5>
                        <p class="card-text-field"> The Immaculata Soccer Field is a new outdoor turf soccer field located in Ottawa. This is the first 3X7GMZ field located in downtown Ottawa.The field is closed off during the Winter season.</p>
                        <a href="https://goo.gl/maps/TLVBsmokHoHG9h9j7" target="_blank" class="btn btn-secondary" style={{ border: 'none' }}>View Location</a>
                    </div>
                </div>
            </div>

            <div class="col">        
                <div class="card-field">
                    <Image class="card-img-top-field" src="https://benfranklinpark.ca/wp-content/uploads/2019/11/SDBF-08-opt.jpg" alt="Card image cap" fluid/>
                    <div class="card-body-field">
                        <h5 class="card-title-field">Ben Franklin Superdome - Nepean</h5>
                        <p class="card-text-field"> The Ben Franklin Field is an indoor turf field in Nepean. It is a great field for those who live in the South of Ottawa or Barrhaven. Summer matches will be played at the field next to the dome.</p>
                        <a href="https://goo.gl/maps/9g5ySpLocKEMksoG6" target="_blank" class="btn btn-secondary" style={{ border: 'none' }}>View Location</a>
                    </div>
                </div>
            </div>


        </div>


        <div class="row">
            <h1><br></br></h1>
            <div class="col">        
                <div class="card-field">
                    <Image class="card-img-top-field" src="https://superdome.ca/wp-content/uploads/2019/11/Soccer-Opt.jpg" alt="Card image cap" fluid/>
                    <div class="card-body-field">
                        <h5 class="card-title-field">Sooners Megadome - Stittsville</h5>
                        <p class="card-text-field">The Sooners Megadome Soccer Field is an amazing new indoor turf field located in Stitsville. This new facility is great for Winter games or for when the weather is not ideal.</p>
                        <a href="https://goo.gl/maps/tt9w6auafKQRx1iB9" target="_blank" class="btn btn-secondary" style={{ border: 'none' }}>View Location</a>
                    </div>
                </div>
            </div>

            <div class="col">        
                <div class="card-field">
                    <Image class="card-img-top-field" src="https://i0.wp.com/wordpress.footysevens.com/wp-content/uploads/2013/08/img-20130828-00443.jpg?ssl=1" alt="Card image cap" fluid/>
                    <div class="card-body-field">
                        <h5 class="card-title-field">Branchaud-Brière - Gatineau</h5>
                        <p class="card-text-field">The Branchaud-Brière Soccer Field is an indoor turf field located in Gatineau. It was added as part of our expansion plan (it is the 1st 3X7GMZ field located outside of Ottawa) </p>
                        <a href="https://goo.gl/maps/PrbTBQcm6g5S8Ypz8" target="_blank" class="btn btn-secondary" style={{ border: 'none' }}>View Location</a>
                    </div>
                </div>
            </div>

            <div class="col">        
                <div class="card-field">
                    <Image class="card-img-top-field" src="https://ir.4sqi.net/img/general/original/664234_EE4ssfJVYU7BgeqSs8XZ2Sq1W_UUDvv9NTHBVJHw6Hk.jpg" alt="Card image cap" fluid/>
                    <div class="card-body-field">
                        <h5 class="card-title-field">Louis Riel Dome - Gloucester</h5>
                        <p class="card-text-field"> The LR Field is an indoor turf field located in Gloucester. It's our players' favourite field to play during Winter season. The Summer matches will be played at the fields next to the dome. </p>
                        <a href="https://goo.gl/maps/e3WBXp6wn8WiNZ5PA" target="_blank" class="btn btn-secondary" style={{ border: 'none' }}>View Location</a>
                    </div>
                </div>
            </div>


        </div>

        
        
        {/* <div class="card-field">
            <Image class="card-img-top-field" src="https://www.marvelhospitals.in/wp-content/uploads/2022/04/World-Physiotherapy-Day-1.jpg" alt="Card image cap" fluid/>
            <div class="card-body-field">
                <h5 class="card-title-field">Physiotherapy | 90$</h5>
                <p class="card-text-field"> Our PT services focus on assessing, diagnosing, and treating musculoskeletal conditions. </p>
            </div>
        </div> 

        <div class="card-field">
            <Image class="card-img-top-field" src="https://www.marvelhospitals.in/wp-content/uploads/2022/04/World-Physiotherapy-Day-1.jpg" alt="Card image cap" fluid/>
            <div class="card-body-field">
                <h5 class="card-title-field">Physiotherapy | 90$</h5>
                <p class="card-text-field"> Our PT services focus on assessing, diagnosing, and treating musculoskeletal conditions.</p>
            </div>
    </div> */}

        
</>
)    
}  
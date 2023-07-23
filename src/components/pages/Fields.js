import React, {useState} from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import Sticky from 'react-stickynode';

function Fields() {
  const fieldList = [
      {name: "Richcraft Soccer Field - Kanata", image: "https://ksc.e2esoccer.com/Downloads/374/Richcraft_2.jpg", Environment: "Outdoor", rating: "9/10", price: "26$", field: "turf", link: "https://goo.gl/maps/7yvrp2Jrm14taWej6"},
      {name: "Immaculata Field | Central Ottawa", image: "https://images.ottawafootysevens.com/footysevens//useruploaded/medium/1739.jpg", Environment: "Outdoor", rating: "9/10", price: "16$", field: "turf", link: "https://goo.gl/maps/TLVBsmokHoHG9h9j7"},
      {name: "Ben Franklin Superdome - Nepean", image: "https://benfranklinpark.ca/wp-content/uploads/2019/11/SDBF-08-opt.jpg", Environment: "Indoor", rating: "8/10", price: "25$", field: "turf", link: "https://goo.gl/maps/9g5ySpLocKEMksoG6"},
       {name: "Sooners Megadome - Stittsville", image: "https://superdome.ca/wp-content/uploads/2019/11/Soccer-Opt.jpg", Environment: "Indoor", rating: "8.5/10", price: "30$", field: "turf", link: "https://goo.gl/maps/tt9w6auafKQRx1iB9"},
      {name: "Branchaud-Brière - Gatineau", image: "https://i0.wp.com/wordpress.footysevens.com/wp-content/uploads/2013/08/img-20130828-00443.jpg?ssl=1", Environment: "Indoor", rating: "9/10", price: "26$", field: "turf", link:"https://goo.gl/maps/PrbTBQcm6g5S8Ypz8"},
      {name: "Louis Riel Dome - Gloucester", image: "https://ir.4sqi.net/img/general/original/664234_EE4ssfJVYU7BgeqSs8XZ2Sq1W_UUDvv9NTHBVJHw6Hk.jpg", Environment: "Indoor", rating: "9/10", price: "19$", field: "turf", link:"https://goo.gl/maps/e3WBXp6wn8WiNZ5PA"},
      {name: "Wesley Clover Park Field", image: "data:image/jpeg;base64,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", Environment: "Outdoor", rating: "8/10", price: "20$", field: "grass", link:"https://goo.gl/maps/FM1BXh7wHXXu4yh46"}, 
      {name: "Eva James Soccer Field", image: "https://lh3.googleusercontent.com/p/AF1QipM-arzfACKlB6Pp3GUYGLPdrnNxpBa8ufWy94pC=s1360-w1360-h1020", Environment: "Outdoor", rating: "7/10", price: "17$", field: "grass", link:"https://goo.gl/maps/WRVLx4NSKZhAqk5L6"},
       {name: "uOttawa Gee-Gees Field", image: "https://lh3.googleusercontent.com/p/AF1QipOqRcJPsfmCdDqpi6Salqd5LzDF2CmBfwm0HT4A=s1360-w1360-h1020", Environment: "Indoor", rating: "8/10", price: "18$", field: "turf", link:"https://goo.gl/maps/ePfmMGh5Yk77Q3wX9"}];

  const defaultSelectedEnvironment = ["Outdoor", "Indoor"];

  const [selectedEnvironment, setSelectedEnvironment] = useState(defaultSelectedEnvironment);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    setSelectedEnvironment((prevSelectedEnvironment) => {
      if (checked) {
      return [...prevSelectedEnvironment, name];
      } 
      
      else {
        return prevSelectedEnvironment.filter((Environment) => Environment !== name);
      }
    });
  };

  const filteredCards = fieldList.filter((card) => selectedEnvironment.includes(card.Environment));

  const renderCard = (card, index) => {
    return (
    <Card  key={index} className="descript">
        <Card.Img variant="top" src={card.image} />
          <Card.Body >
            <Card.Title style={{ fontSize: '1.5vw', fontWeight: 'bold' }}>{card.name}</Card.Title>
          <hr />
          <Card.Text style={{ fontSize: '1.2vw', fontWeight: 'bold' }}>
            Average Price: {card.price}<br />
            Rating: {card.rating}<br />
            Environment: {card.Environment}<br />
            Field Type: {card.field}<br />
          </Card.Text>
          <div>
            <a href={card.link} target="_blank" class="btn btn-secondary">View Location</a>
          </div>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossOrigin="anonymous"
      />

      <Container fluid>
          <h1 className="ha" style={{color:"white"}}> Our Fields</h1>
          <br />
        <Row>
          <Col xs={2}>
            <Sticky enabled={true} top={10}>
              <form className="filter-box">
                <h5 className="fw-bold" style={{ textAlign: "center" }}>Filter</h5>
                <hr />
                <h6 className="fw-bold"> Outdoor: <input type="checkbox" name="Outdoor" style={{ float: "right" }} onChange={handleCheckboxChange} checked={selectedEnvironment.includes("Outdoor")} /></h6>
                <h6 className="fw-bold"> Indoor: <input type="checkbox" name="Indoor" style={{ float: "right" }} onChange={handleCheckboxChange} checked={selectedEnvironment.includes("Indoor")} /></h6>
              </form>
            </Sticky>
          </Col>
          <Col>
            <div className="grid">
              {filteredCards.map(renderCard)}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Fields;




// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import { Col } from "react-bootstrap";
// import Image from 'react-bootstrap/Image';

// export default function Fields(){
//     return(
//     <>
//     <h1 className="ha" style={{color:"white"}}> Our Fields</h1>

    
    
//         <div class="row">
//             <div class="col">        
//                 <div class="card-field">
//                     <Image class="card-img-top-field" src="https://ksc.e2esoccer.com/Downloads/374/Richcraft_2.jpg" alt="Card image cap" fluid/>
//                     <div class="card-body-field">
//                         <h5 class="card-title-field">Richcraft Soccer Field - Kanata</h5>
//                         <p class="card-text-field"> The Richcraft Field is a high quality outdoor turf soccer field located in Kanata. It's been one of our number one outdoor fields for many years. The field is closed off during the Winter season.</p>
//                         <a href="https://goo.gl/maps/7yvrp2Jrm14taWej6" target="_blank" class="btn btn-secondary" style={{ border: 'none' }}>View Location</a>
//                     </div>
//                 </div>
//             </div>

//             <div class="col">        
//                 <div class="card-field">
//                     <Image class="card-img-top-field" src="https://images.ottawafootysevens.com/footysevens//useruploaded/medium/1739.jpg" alt="Card image cap" fluid/>
//                     <div class="card-body-field">
//                         <h5 class="card-title-field">Immaculata Field | Central Ottawa</h5>
//                         <p class="card-text-field"> The Immaculata Soccer Field is a new outdoor turf soccer field located in Ottawa. This is the first 3X7GMZ field located in downtown Ottawa.The field is closed off during the Winter season.</p>
//                         <a href="https://goo.gl/maps/TLVBsmokHoHG9h9j7" target="_blank" class="btn btn-secondary" style={{ border: 'none' }}>View Location</a>
//                     </div>
//                 </div>
//             </div>

//             <div class="col">        
//                 <div class="card-field">
//                     <Image class="card-img-top-field" src="https://benfranklinpark.ca/wp-content/uploads/2019/11/SDBF-08-opt.jpg" alt="Card image cap" fluid/>
//                     <div class="card-body-field">
//                         <h5 class="card-title-field">Ben Franklin Superdome - Nepean</h5>
//                         <p class="card-text-field"> The Ben Franklin Field is an indoor turf field in Nepean. It is a great field for those who live in the South of Ottawa or Barrhaven. Summer matches will be played at the field next to the dome.</p>
//                         <a href="https://goo.gl/maps/9g5ySpLocKEMksoG6" target="_blank" class="btn btn-secondary" style={{ border: 'none' }}>View Location</a>
//                     </div>
//                 </div>
//             </div>


//         </div>


//         <div class="row">
//             <h1><br></br></h1>
//             <div class="col">        
//                 <div class="card-field">
//                     <Image class="card-img-top-field" src="https://superdome.ca/wp-content/uploads/2019/11/Soccer-Opt.jpg" alt="Card image cap" fluid/>
//                     <div class="card-body-field">
//                         <h5 class="card-title-field">Sooners Megadome - Stittsville</h5>
//                         <p class="card-text-field">The Sooners Megadome Soccer Field is an amazing new indoor turf field located in Stitsville. This new facility is great for Winter games or for when the weather is not ideal.</p>
//                         <a href="https://goo.gl/maps/tt9w6auafKQRx1iB9" target="_blank" class="btn btn-secondary" style={{ border: 'none' }}>View Location</a>
//                     </div>
//                 </div>
//             </div>

//             <div class="col">        
//                 <div class="card-field">
//                     <Image class="card-img-top-field" src="https://i0.wp.com/wordpress.footysevens.com/wp-content/uploads/2013/08/img-20130828-00443.jpg?ssl=1" alt="Card image cap" fluid/>
//                     <div class="card-body-field">
//                         <h5 class="card-title-field">Branchaud-Brière - Gatineau</h5>
//                         <p class="card-text-field">The Branchaud-Brière Soccer Field is an indoor turf field located in Gatineau. It was added as part of our expansion plan (it is the 1st 3X7GMZ field located outside of Ottawa) </p>
//                         <a href="https://goo.gl/maps/PrbTBQcm6g5S8Ypz8" target="_blank" class="btn btn-secondary" style={{ border: 'none' }}>View Location</a>
//                     </div>
//                 </div>
//             </div>

//             <div class="col">        
//                 <div class="card-field">
//                     <Image class="card-img-top-field" src="https://ir.4sqi.net/img/general/original/664234_EE4ssfJVYU7BgeqSs8XZ2Sq1W_UUDvv9NTHBVJHw6Hk.jpg" alt="Card image cap" fluid/>
//                     <div class="card-body-field">
//                         <h5 class="card-title-field">Louis Riel Dome - Gloucester</h5>
//                         <p class="card-text-field"> The LR Field is an indoor turf field located in Gloucester. It's our players' favourite field to play during Winter season. The Summer matches will be played at the fields next to the dome. </p>
//                         <a href="https://goo.gl/maps/e3WBXp6wn8WiNZ5PA" target="_blank" class="btn btn-secondary" style={{ border: 'none' }}>View Location</a>
//                     </div>
//                 </div>
//             </div>


//         </div>

        
        
//         {/* <div class="card-field">
//             <Image class="card-img-top-field" src="https://www.marvelhospitals.in/wp-content/uploads/2022/04/World-Physiotherapy-Day-1.jpg" alt="Card image cap" fluid/>
//             <div class="card-body-field">
//                 <h5 class="card-title-field">Physiotherapy | 90$</h5>
//                 <p class="card-text-field"> Our PT services focus on assessing, diagnosing, and treating musculoskeletal conditions. </p>
//             </div>
//         </div> 

//         <div class="card-field">
//             <Image class="card-img-top-field" src="https://www.marvelhospitals.in/wp-content/uploads/2022/04/World-Physiotherapy-Day-1.jpg" alt="Card image cap" fluid/>
//             <div class="card-body-field">
//                 <h5 class="card-title-field">Physiotherapy | 90$</h5>
//                 <p class="card-text-field"> Our PT services focus on assessing, diagnosing, and treating musculoskeletal conditions.</p>
//             </div>
//     </div> */}

        
// </>
// )    
// }  

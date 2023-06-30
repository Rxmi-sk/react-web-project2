import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Image from 'react-bootstrap/Image';

export default function Home(){
    return( 
    <>
    
    <h1 className="home-text">Welcome to 3X7GMZ: The Ultimate 7vs7 Pickup Soccer Experience!<br></br><br></br></h1>

       <div class="card-home" >
            <Image class="card-img-top-field" src="https://ksc.e2esoccer.com/Downloads/374/Richcraft_2.jpg" alt="Card image cap" fluid/>
            <div class="card-body-home text-black text-center">
                <h4 class="card-block-home">Are you passionate about soccer and crave the excitement of competitive matches? Look no further! 3X7GMZ is your gateway to thrilling, fast-paced 7vs7 pickup soccer games played every week at 7. Join us and discover a community of dedicated players who share your love for the beautiful game.</h4>
                <a href="/Fields" class="btn btn-primary">View Our Fields</a>{' '}
                <a href="/Registration" class="btn btn-primary">Register Now</a>
            </div>
        </div>
    </>
    )
}
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Image from 'react-bootstrap/Image';

export default function HomeTwo(){
    return( 
    <>
    
    <h1 className="home-text" style={{color:"white"}}>Bienvenue à 3X7GMZ: l'expérience ultime de football en 7 contre 7 !<br></br><br></br></h1>

       <div class="card-home" >
            <Image class="card-imgop" src="https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/pyqaawxxfwzeiib35hsm" alt="Card image cap" fluid/>
            <div class="card-body-home text-black text-center">
                <h4 class="card-block-home">Êtes-vous passionné par le foot et avez-vous envie de l'excitation des matchs? Cherchez pas plus loin! 3X7GMZ est votre passerelle vers des matchs de foot rapides en 7 contre 7 joués chaque semaine à 19h. Rejoignez-nous et découvrez une communauté dévoués qui partagent votre amour pour le jeu.
<br></br><br></br></h4>
                <a href="/Fields" class="btn btn-primary" style={{ border: 'none' }}>Nos terrains de soccer</a>{' '}
                <a href="/Registration" class="btn btn-primary" style={{ border: 'none' }}>S'inscrire maintenant</a>{' '}
                <a href="/home" class="btn btn-primary" style={{ border: 'none' }}>English</a>
            </div>
        </div>
    </>
    )
}
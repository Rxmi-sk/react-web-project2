import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Image from 'react-bootstrap/Image';

export default function Referees(){
    return(
    <>
    <h1 className="ha"> Our Referees</h1>
   <div class="row">
        <div class="col">
          <div class="card-ref">
          <Image class="card-img-top" src="https://e3.365dm.com/20/03/2048x1152/skynews-anthony-taylor-referee_4957575.jpg" alt="Card image cap" fluid/>
          <div class="card-body-ref">
              <h5 class="card-title-ref">Anthony Taylor</h5>
              <p class="card-text-ref">Anthony is a highly respected referee in the world of soccer. With his sharp decision-making skills and thorough knowledge of the game, Anthony has officiated numerous high-profile matches, including UEFA Champions League fixtures. Known for his ability to maintain control on the field, he ensures fair play and upholds the integrity of the game. Anthony's expertise and professionalism make him a valuable asset to the 3X7GMZ team.</p>
          </div>
      </div>
      </div>

        <div class="col">
            <div class="card-ref">
             <Image class="card-img-top" src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blta1e832231e6fcef7/60dbb5328491e60f790c108f/59c9e6d7dedc513e7267068683ab3a2fd22f6d65.jpg?auto=webp&format=pjpg&width=3840&quality=60" alt="Card image cap" fluid/>
             <div class="card-body-ref">
                <h5 class="card-title-ref">Mike Dean</h5>
                <p class="card-text-ref">Mike is a prominent figure in the realm of refereeing, renowned for his authoritative presence on the field. With an impressive career spanning several decades, Mike has officiated countless Premier League matches. Mike's decision to join 3X7GMZ further enhances the quality of our games. His strong personality and consistent decision-making will undoubtedly contribute to the fair play and smooth running of our matches.</p>
             </div> 
             {/* Known for his strong personality and consistent decision-making, he brings a sense of stability to the games he oversees. Mike Dean's unwavering commitment to enforcing the rules while maintaining the flow of the game makes him a highly respected referee among players, coaches, and fans alike. */}
          </div>
          </div>

        <div class="col">            
          <div class="card-ref">
          <Image class="card-img-top" src="https://e0.365dm.com/18/04/2048x1152/skysports-michael-olive-oliver_4280235.jpg" alt="Card image cap" fluid/>
          <div class="card-body-ref">
            <h5 class="card-title-ref">Micheal Oliver</h5>
            <p class="card-text-ref">Michael is widely regarded as one of the top refs in the world, known for his exceptional accuracy in making crucial decisions. With a keen eye for detail, Michael has officiated in many prestigious competitions, including the FIFA World Cup. His calm demeanor on the field ensures a fair playing environment. Michael's impeccable track record has earned him immense respect in the world of soccer. Today, he is a fan favorite at 3X7GMZ. </p>
          </div>
        </div>
</div> 
</div>            

</>
)    
} 
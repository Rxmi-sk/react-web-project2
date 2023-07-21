import './Navbar.css'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className='nav'>
            
            <div className="logo">
                 <img src={process.env.PUBLIC_URL + '/ball6.png'} alt="Logo" />
            </div>

            <Link to="/" className='site-title'> 3X7GMZ</Link>

            <ul>
                 <li>
                    <Link to="/home"> Home</Link>
                </li> 

                <li>
                    <Link to="/fields"> Our Fields</Link>
                </li>

                <li>
                    <Link to="/referees"> Our Referees</Link>
                </li>

                <li>
                    <Link to="/contact"> Contact Us</Link>
                </li>

                <li>
                    <Link to="/registration"> Register Now</Link>
                </li>
{/* 
                <li>
                    <Link to="/homeTwo"> Français</Link>
                </li> */}
            </ul>


        </nav>
     
  );
}

export default Navbar
   {/* <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo">
                    3X7GMZ <i className='fab fa-typo3'/>
                </Link>
                <div className='menu-icon' onClick={handleClick}> 
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-Links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/' className='nav-Links' onClick={closeMobileMenu}>
                            Our Fields
                        </Link>
                    </li>


                    <li className='nav-item'>
                        <Link to='/' className='nav-Links' onClick={closeMobileMenu}>
                            Our Referees
                        </Link>
                    </li>


                    <li className='nav-item'>
                        <Link to='/' className='nav-Links' onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/' className='nav-Links' onClick={closeMobileMenu}>
                            Registration
                        </Link>
                    </li>
                </ul>
            </div>
            

        </nav> */}
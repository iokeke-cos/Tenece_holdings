/* I imported the icons i needed from the assets folder
I also imported the css file for the Footer into this file to be able to use it*/

import './Footer.css';

import arrow from '../assets/arrowdown.png';
import logo from '../assets/Logo.png';
import fb from '../assets/fb.png';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';


export default function Footer() {

    return(<>
    {/* I added  */}

        <footer>
            <div className="first-part">
                <a href="#home">
                <img src={logo} className='footer-logo'/>
                </a>
                <nav>
                    <ul>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/services">Services <span><img src={arrow} /></span></a>
                        </li>
                        <li>
                            <a href="/faq">FAQ</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                        <li>
                            <a href="/pricing">Pricing</a>
                        </li>
                    </ul>
                    {/* these are the linkedin, X, and Facebook logos.
                    I added an outer-logos div because I needed to adjust the position of the entire
                    logo container */}

                    <div className='outer-logos'>

                        <div className='logos'>
                            <img src={twitter} alt="X"/>
                            <img src={linkedin} alt="Linkedin"/>
                            <img src={fb} alt="Facebook"/>                  
                            

                        </div>

                    </div>

                    </nav>

            </div>

             <hr />

             {/* I separated the footer into the content before the line, and 
             content after the line  */}


            <div className='second-part'>

                <p className='copyright'>© 2023 © 2023 Webtechsolution.in</p>

                <p className='privacy'>
                    <span className='privacy-policy'>Privacy Policy</span> | 
                    <span className='cookies'> Cookies</span>

                </p>
                
                
            </div>              
                

            
               
                
                
                
        </footer>
    

    
    
    </>);
}
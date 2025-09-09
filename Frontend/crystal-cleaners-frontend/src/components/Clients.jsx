import React from 'react';
import './Clients.css'; // Import its dedicated CSS

import Buildkite from '../assets/Buildkite.png';
import Corning from '../assets/Corning.png';
import Deliveroo from '../assets/Deliveroo.png';
import Docusign from '../assets/Docusign.png';
import Verily from '../assets/Verily.png';
import Rakuten from '../assets/Rakuten.png';
import Netflix from '../assets/Netflix.png';
import Nordvpn from '../assets/Nordvpn.png';
import Trivago from '../assets/Trivago.png';
import Hubspot from '../assets/Hubspot.png';


export default function Clients() {
  return (
    <section className="clients">
      <div className="clients-container">
        <p>Trusted By Thousands of Clients</p>

        <div className="client-logos">
          <div className="logo-item">
            <img src={Buildkite} alt="BuildKite Logo" />            
          </div>
          <div className="logo-item">
            <img src={Corning} alt="Corning Logo" />
          </div>
          <div className="logo-item">
            <img src={Deliveroo} alt="Deliveroo Logo" />
          </div>
          <div className="logo-item">
            <img src={Docusign} alt="Docusign Logo" /> 
          </div>
          <div className="logo-item">
            <img src={Verily} alt="Verily Logo" /> 
          </div>
          <div className="logo-item">
            <img src={Rakuten} alt="Rakuten Logo" /> 
          </div>
          <div className="logo-item">
            <img src={Netflix} alt="Netflix Logo" /> 
          </div>
          <div className="logo-item">
            <img src={Nordvpn} alt="Nordvpn Logo" /> 
          </div>
          <div className="logo-item">
            <img src={Trivago} alt="Trivago Logo" /> 
          </div>
          <div className="logo-item">
            <img src={Hubspot} alt="Hubspot Logo" /> 
          </div>
        </div>

      </div>
    </section>
  );
}
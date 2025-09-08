import moneyBack from "../../assets/money-back.png";
import { Link } from "react-router-dom";

export default function Guarantee() {

    return (
        <>
        <section className="guarantee">
                <div className="guarantee-section">
                  <div className="image">
                    <img src={moneyBack} alt="Money Back Guaranteed" />
                  </div>
        
                  <div className="text">
                    <h3 style={{ fontSize: "48px" }}>The Shine Guarantee</h3>
                    <br />
                    <p style={{ fontsize: "18px" }}>
                      We will do it right the first time and we promise that if <br />
                      you are not completely satisfied, we'll make it right or <br />
                      give you a full refund
                    </p>
                    <br />
                    <br />
        
                    <Link to="/about" className="book-clean-button">
                      Learn More The Shine Guarantee
                    </Link>
                  </div>
                </div>
              </section>
        
        
        
        </>
    )
}
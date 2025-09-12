import { Link } from "react-router-dom";


import awardIcon from "../../assets/award-icon.png";
import handCleaning from "../../assets/hand-cleaning.png";
import handVacuum from "../../assets/hand-vacuum.png";
import certified from "../../assets/certified.png";
import time from "../../assets/time-icon.png";

export default function ReasonsToChoose() {


  return (
    <>
      <section className="choose-us">
        <div className="choose-us-component">
          <div className="main-content">
            <div className="choose-us-image">
              <img
                src={handVacuum}
                alt="cleaner working"
                style={{ width: "402px", height: "495px", flex: "none", order: "0", flexGrow: "0" }}
              />
            </div>

            <div className="choose-us-right-content">
              <div className="choose-us-text">
                <h1
                  className="choose-us-heading"
                  // style={{ fontWeight: "700", fontSize: "45px", fontStyle: "normal", letterSpacing: "-0.01em", width: "537px", height: "120px" }}

                >
                  Reasons To Choose <br /> Crystal Cleaners, Today
                </h1>
                <br />
                <p style={{ color: "#141414BF", fontSize: "18px", marginBottom: "50px"}}>
                  Choose House Cleaning SF for exceptional cleaning services. <br />
                  Contact us today to schedule your first cleaning session and
                  <br />
                  experience the difference.
                </p>
              </div>

              <div className="button-component">
                <Link to="/services" className="book-clean-button">
                  Book Your Home Clean
                </Link>
                <br /> <br />
                <p className="choose-us-meta" style={{ color: "#141414BF", fontSize: "16px", marginTop: "20px" }}>
                  34 cleans booked in the last 24 hours
                </p>
              </div>
            </div>
          </div>

          <hr style={{ border: "1px solid", width: "80%", margin: "50px auto" }} />
          {/* rest of your content */}
          <div className="icons">
            <div className="hand-cleaning">
              <img src={handCleaning} alt="cleaning" /><br /><br />
              <p>Enjoy the same trusted cleaners,<br /> every time you book</p>
            </div>

            <div className="award">
              <img src={awardIcon} alt="award-icon" />
              <br /><br />
              <p>
                We only use high quality safe, yet <br />
                effective cleaning solutions
              </p>
            </div>

            <div className="time">
              <img src={time} alt="clock" /><br /><br />
              <p>You have the option to provide your <br />own custom supplies</p>
            </div>

            <div className="certified">
              <img src={certified} alt="certified-icon" /><br /><br />
              <p>100% secure online  <br />payments</p>
            </div>
          </div>
        </div>










      </section>



    </>
  )
}




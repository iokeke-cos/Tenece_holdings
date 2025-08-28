import awardIcon from "../../assets/award-icon.png";
import handCleaning from "../../assets/hand-cleaning.png";
import handVacuum from "../../assets/hand-vacuum.png";
import certified from "../../assets/certified.png";
import time from "../../assets/time-icon.png";

export default function ReasonsToChoose() {


    return(
        <>
        <section className="choose-us">
        <div className="choose-us-component">
        <div className="main-content">
          <div className="choose-us-image">
            <img
              src={handVacuum}
              alt="cleaner working"
              style={{ width: "492px", height: "495px" }}
            />
          </div>
          <div className="choose-us-text">
            <h1
              className="choose-us-heading"
              style={{ fontWeight: "800", fontSize: "48px" }}
            >
              Reasons To Choose <br /> Crystal Cleaners, Today
            </h1>
            <br />
            <p style={{ color: "#141414BF", fontSize: "18px" }}>
              Choose House Cleaning SF for exceptional cleaning services. <br />
              Contact us today to schedule your first cleaning session and
              <br />
              experience the difference.
            </p>
          </div>

          
        </div>
        <div className="button-component">
          <button>Book Your Home Clean</button>
          <br /> <br />

          <p className="choose-us-meta" style={{ color: "#141414BF", fontSize: "16px"}}> 
            34 cleans booked in the last 24 hours
          </p>


        </div>
        
        <hr style={{ border: "1px solid" }} />

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




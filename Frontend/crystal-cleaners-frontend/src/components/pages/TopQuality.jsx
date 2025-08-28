import tick from "../../assets/tick.png";

export default function TopQuality () {

    return (
        <>

        <section className="top-quality">
        <div className="quality-container">
          <h2 style={{ fontSize: "48px" }}>
            Experience Top-Quality Cleaning for <br />
            Your Home and Office: Trust Our <br />
            Expert Team!
          </h2>
          <br />
          <br />

          <div className="top-quality-flex-container">
            <p className="instant-quotes" style={{ fontSize: "18px" }}>
              <span>
                <img className="tick" src={tick} alt="tick" />
              </span>{" "}
              Instant Quotes
            </p>

            <p className="reschedule" style={{ fontSize: "18px" }}>
              <span>
                <img className="tick" src={tick} alt="tick" />
              </span>{" "}
              No Rescheduling Fees
            </p>

            <p className="no-contracts" style={{ fontSize: "18px" }}>
              <span>
                <img className="tick" src={tick} alt="tick" />
              </span>{" "}
              No Contracts
            </p>
          </div>
          <br />
          <br />

          <div className="last-part">
            <button>Book Your Home Clean</button>
            <br /> <br />
            <p
              className="cleans-booked"
              style={{ color: "#141414", opacity: "75%", fontSize: "16px" }}
            >
              34 cleans booked in the last 24 hours
            </p>
          </div>
        </div>
      </section>
        
        
        
        
        </>
    )
}
import firstBg from "../../assets/1st-bg.png";
import secondBg from "../../assets/2nd-bg.png";
import thirdBg from "../../assets/3rd-bg.png";
import { FaRegClock, FaRegCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function BlogDisplay () {


    return(<>
    <section className="our-blog">
        <div className="blog-content">
          <div className="button-text">
            <p style={{ fontSize: "48px", fontWeight: "700" }}>Our Blog</p>
            <Link to="/blog">
            <button>View all Blog</button>
            </Link>
            
          </div>
          <br />
          <br />

          <div className="blog-cards">
            <div className="card-1">
              <img
                src={firstBg}
                alt="clean-and-organised-office"
                style={{ width: "370px", height: "292px" }}
              />

              <div className="content1">
                <p style={{ color: "gray" }}>
                  <FaRegCalendarAlt /> September | 2023
                </p>

                <p style={{ color: "gray" }}>
                  {" "}
                  <FaRegClock /> 5 min read
                </p>
              </div>

              <h4 style={{ fontWeight: "600", fontSize: "24px" }}>
                The benefits of a clean and <br />
                organized home office
              </h4>
            </div>

            <div className="card-2">
              <img
                src={secondBg}
                alt="Vacuuming"
                style={{ width: "370px", height: "292px" }}
              />

              <div className="content-2">
                <p style={{ color: "gray" }}>
                  <FaRegCalendarAlt /> September | 2023
                </p>

                <p style={{ color: "gray" }}>
                  {" "}
                  <FaRegClock /> 8 min read
                </p>
              </div>

              <h4 style={{ fontWeight: "600", fontSize: "24px" }}>
                Why you should consider hiring <br />a cleaning service
              </h4>
            </div>

            <div className="card-3">
              <img
                src={thirdBg}
                alt="wiping window"
                style={{ width: "370px", height: "292" }}
              />

              <div className="content-3">
                <p style={{ color: "gray" }}>
                  <FaRegCalendarAlt /> September | 2023
                </p>

                <p style={{ color: "gray" }}>
                  {" "}
                  <FaRegClock /> 6 min read
                </p>
              </div>

              <h4 style={{ fontWeight: "600", fontSize: "24px" }}>
                The benefits of professional <br />
                window cleaning
              </h4>
            </div>
          </div>
        </div>
      </section>


    
    
    </>)
} 
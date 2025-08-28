// CustomerReviews.jsx
import { useRef, useState, useEffect } from "react";
import leftArrow from "../../assets/arrow-left.png";
import rightArrow from "../../assets/arrow-right.png";
import man1 from "../../assets/man 1.jpg";
import moskur from "../../assets/moskur.png";
import tanvir from "../../assets/tanvir.png";
import nabil from "../../assets/nabil.jpg";
import abir from "../../assets/abir.jpg";
import "./CustomerReviews.css";

export default function CustomerReviews() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const reviews = [
    {
      id: "man1",
      image: man1,
      alt: "Customer",
      text: "The team came on time and did a fantastic job cleaning our property. Their attention to detail was impressive and the results exceeded our expectations.",
      name: "",
      role: ""
    },
    {
      id: "moskur",
      image: moskur,
      alt: "Moskur Alom",
      text: "We absolutely appreciate working with Pro Housekeepers! Our clients continue to request them week by week.",
      name: "Moskur Alom",
      role: "Vacation Rental Investor"
    },
    {
      id: "tanvir",
      image: tanvir,
      alt: "Tanvir Hasan",
      text: "Great service, great value and always available to help. They go above and beyond regularly - great partner for Airbnb cleans.",
      name: "Tanvir Hasan",
      role: "VP Business Development"
    },
    {
      id: "nabil",
      image: nabil,
      alt: "Nabil Hocks",
      text: "They are always on time, answer their phones and I've never had a guest complain about their work and have never been let down.",
      name: "Nabil Hocks",
      role: "Real Estate Broker"
    },
    {
      id: "abir",
      image: abir,
      alt: "Abir Hasan",
      text: "I had the pleasure of working with Pro Housekeepers for over 2 years. Their team is professional, reliable, and consistently delivers outstanding results.",
      name: "Abir Hasan",
      role: "Vacation Rental Investor"
    }
  ];

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (container) {
      const scrollLeft = Math.round(container.scrollLeft);
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      
      setCanScrollLeft(scrollLeft > 10); // Larger threshold for left scroll
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollByAmount = (amount) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      const handleScroll = () => {
        // Use requestAnimationFrame for better performance
        requestAnimationFrame(updateScrollButtons);
      };
      
      container.addEventListener('scroll', handleScroll);
      
      // Initial check with a slight delay to ensure proper rendering
      setTimeout(updateScrollButtons, 100);
      
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <section className="customer-reviews">
      <h2>Customer Reviews</h2>
      <div className="reviews">
        <button
          className={`arrow arrow-left ${!canScrollLeft ? 'disabled' : ''}`}
          onClick={() => scrollByAmount(-320)}
          disabled={!canScrollLeft}
        >
          <img src={leftArrow} alt="left arrow" />
        </button>

        <div className="reviews-container" ref={scrollRef}>
          {reviews.map((review) => (
            <div key={review.id} className={`review-card ${review.id}`}>
              <div className="review-image">
                <img src={review.image} alt={review.alt} />
              </div>
              <div className="review-content">
                <p className="review-text">"{review.text}"</p>
                {review.name && (
                  <div className="review-author">
                    <p className="author-name"><b>{review.name}</b></p>
                    <span className="author-role">{review.role}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          className={`arrow arrow-right ${!canScrollRight ? 'disabled' : ''}`}
          onClick={() => scrollByAmount(320)}
          disabled={!canScrollRight}
        >
          <img src={rightArrow} alt="right arrow" />
        </button>
      </div>
    </section>
  );
}
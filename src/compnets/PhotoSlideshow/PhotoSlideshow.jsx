// import React from "react";
// import { Slide } from "react-slideshow-image";
// import "./PhotoSlideshow.css";
// import "react-slideshow-image/dist/styles.css";

// const PhotoSlideshow = () => {
//   const images = [
//     "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//     "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
//     "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//   ];

//   const slideProperties = {
//     duration: 2000, // Duration for each slide (in milliseconds)
//     autoplay: true, // Autoplay the slideshow
//     transitionDuration: 500, // Duration of the transition (in milliseconds)
//     indicators: true, // Show indicators at the bottom
//     arrows: true, // Show navigation arrows
//   };

//   return (
//     <div className="slide-container">
//       <Slide {...slideProperties}>
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="each-slide-effect"
//             style={{ backgroundImage: `url(${image})` }}
//           ></div>
//         ))}
//       </Slide>
//     </div>
//   );
// };

// export default PhotoSlideshow;
import React, { useEffect, useState } from "react";
import "./PhotoSlideshow.css";

const images = [
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1400&q=80",
];

const PhotoSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      className="hero-section"
      aria-label="Promotional Hero Section"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">Explore the Best Deals in Your City</h1>
        <p className="hero-subtitle">
          Find top offers, discounts & local favorites — all in one place
        </p>
        {/* <button className="hero-btn">Browse Offers</button> */}
      </div>
    </section>
  );
};

export default PhotoSlideshow;

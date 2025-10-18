// import React from 'react'
// import Cow from '../Photos/Cow.png'
// import Krishna from '../Photos/Krishna.png'
// import RamNavami from '../Photos/Ram Navami.png'
// const Celebrations = () => {
//   return (
//     <div>
//       <h2>What we Celebrations</h2>
//       <h5>Sri Shiv Tatava Aasharam</h5>
//       <div>
//         <img src={Krishna} alt="Images" />
//         <h2>Janmashtami</h2>
//         <p>At Sri Ram Ashram and Gaushala Trust, we celebrate Janmashtami, the birth anniversary of Lord Krishna with great devotion.</p>
//         <button>
//             READ MORE
//         </button>
//       </div>
//       <div>
//         <img src={Cow} alt="Images" />
//         <h2>Gopashtami</h2>
//         <p>Every year, Gopashtami is observed at our organisation premises on the auspicious Shukla Ashtami of the month of Kartik. </p>
//         <button>
//             READ MORE
//         </button>
//       </div>
//       <div>
//         <img src={RamNavami} alt="Images" />
//         <h2>Ram Navami</h2>
//         <p>We joyfully celebrate Ram Navami on the ninth day of Chaitra Navaratri. It is a holy Hindu festival marking Lord Rama’s birth,</p>
//         <button>
//             READ MORE
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Celebrations

import React from "react";
import RamNavami from "../../Photos/RamNavami.jpg";
import GuruPurnima from "../../Photos/GuruPurnima.jpg";
import Deepavali from "../../Photos/Deepavali.jpg";
import "./Celebrations.css";

const Celebrations = () => {
  const festivals = [
    {
      id: 1,
      title: "Ram Navami",
      img: RamNavami,
      desc: "Ram Navami marks the divine birth of Lord Shri Ram. Our Ashram celebrates this holy day with bhajans, kirtans, and sacred yajnas, spreading peace and devotion.",
    },
    {
      id: 2,
      title: "Guru Purnima",
      img: GuruPurnima,
      desc: "On this sacred day, disciples offer gratitude to their Gurus. The Ashram organizes satsangs and spiritual discourses to honor the eternal Guru-Shishya tradition.",
    },
    {
      id: 3,
      title: "Deepavali",
      img: Deepavali,
      desc: "The festival of lights is celebrated with diyas, bhajans, and seva. Our Ashram illuminates hearts with love, knowledge, and the light of Sanatan Dharma.",
    },
  ];

  return (
    <section className="celebrations-container">
      <h2>Festivals & Celebrations at Our Ashram</h2>
      <p className="celebrations-intro">
        Each festival at the Ashram is celebrated with devotion, joy, and unity.
        We welcome devotees from all walks of life to join us in spreading peace
        and positivity.
      </p>

      <div className="celebrations-grid">
        {festivals.map((festival) => (
          <div key={festival.id} className="celebration-card">
            <img
              src={festival.img}
              alt={festival.title}
              className="celebration-image"
            />
            <div className="celebration-content">
              <h3>{festival.title}</h3>
              <p>{festival.desc}</p>
              <a href="url" className="read-more">
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Celebrations;

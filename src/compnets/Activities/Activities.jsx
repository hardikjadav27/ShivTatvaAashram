import React from "react";
import GausalaImg from "../../Photos/Gausala.jpg";
import TempleImg from "../../Photos/Temple.jpg";
import EducationImg from "../../Photos/Gurukul.jpg";
import FestivalImg from "../../Photos/Festival.jpg";
import PlantationImg from "../../Photos/Plantation.jpg";
import "./Activities.css";

const Activities = () => {
  return (
    <div className="activities-container">
      <header className="activities-header">
        <h1>Our Activities</h1>
        <p>Sri Ram Ashram and Gaushala Trust</p>
      </header>

      {/* Gausala */}
      <section className="activity">
        <div className="activity-content">
          <h2>Gausala (Cow Care)</h2>
          <p>
            Sri Ram Ashram and Gaushala Trust is devoted to protecting and
            nurturing <strong>Gaumata</strong> (holy cows). We provide shelter,
            food, and medical care for abandoned or injured cows. Our mission is
            to preserve the sacred bond between humans and cows, treating them
            with the same love and respect as mothers. Currently, we serve in
            multiple locations across Rajasthan, ensuring every cow lives with
            dignity and care.
          </p>
        </div>
        <img src={GausalaImg} alt="Gausala" className="activity-image" />
      </section>

      {/* Temple Construction */}
      <section className="activity reverse">
        <div className="activity-content">
          <h2>Temple Construction</h2>
          <p>
            Guided by the blessings of Lord Rama, our trust undertakes the
            construction and restoration of temples to uphold{" "}
            <em>Sanatan Dharma</em>. Temples are the heart of our community —
            spaces where faith, culture, and spiritual learning unite. Through
            the devotion and contributions of our supporters, we continue to
            build temples that stand as symbols of peace and devotion.
          </p>
        </div>
        <img src={TempleImg} alt="Temple" className="activity-image" />
      </section>

      {/* Gurukul Education */}
      <section className="activity">
        <div className="activity-content">
          <h2>Gurukul Education</h2>
          <p>
            We follow the <strong>ancient Gurukul tradition</strong> of holistic
            education, where students learn under the guidance of dedicated
            Gurus. The curriculum blends Vedic studies, Sanskrit, and moral
            values, fostering discipline, spirituality, and character building.
            Our mission is to preserve India’s timeless wisdom and inspire youth
            with cultural pride.
          </p>
        </div>
        <img
          src={EducationImg}
          alt="Gurukul Education"
          className="activity-image"
        />
      </section>

      {/* Festival Celebrations */}
      <section className="activity reverse">
        <div className="activity-content">
          <h2>Festival Celebrations</h2>
          <p>
            Festivals like <strong>Ram Navami, Janmashtami, Diwali,</strong> and
            <strong> Gopashtami</strong> are celebrated with devotion and joy at
            the Ashram. These celebrations include bhajans, kirtans, yagnas, and
            prasad distribution, bringing the community together in spiritual
            harmony and cultural unity.
          </p>
        </div>
        <img src={FestivalImg} alt="Festival" className="activity-image" />
      </section>

      {/* Tree Plantation */}
      <section className="activity">
        <div className="activity-content">
          <h2>Tree Plantation & Environment Care</h2>
          <p>
            Our trust organizes regular tree plantation drives and awareness
            programs to promote <strong>eco-conscious living</strong>. We
            believe that serving nature is serving God. By planting trees and
            maintaining cleanliness in temple premises, we aim to create a
            peaceful and sustainable environment for future generations.
          </p>
        </div>
        <img
          src={PlantationImg}
          alt="Tree Plantation"
          className="activity-image"
        />
      </section>
    </div>
  );
};

export default Activities;

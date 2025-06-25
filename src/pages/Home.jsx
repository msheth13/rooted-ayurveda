import plateImg from '../assets/page1-plate.jpg';
import '../index.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';


// This is my Home page, which introduces the site and sets the tone for the rest of the experience. 
// I used a calming image, a headline, and descriptive text to explain the purpose of "rooted.",  connecting modern users 
// with Ayurvedic traditions. I also added navigation cards to guide users to Recipes, Self-Care, the Dashboard, and Doshas.


function Home() {
  return (
    <>
      <div className="home-page">
        <div className="hero-section">
          <img
            src={plateImg}
            alt="Unsplash (https://unsplash.com/photos/wooden-ladle-and-chopping-board-with-ginger-during-daytime-vuDXJ60mJOA)"
            className="hero-image"
          />

          <div className="hero-text">
            <h1>Not everything needs a prescription. Some things just need roots.</h1>
            <p>
              In a world full of quick fixes and shiny packaging, <strong>rooted.</strong> brings you back to what’s real.
              This space blends age-old Ayurvedic wisdom with modern intention—sharing simple recipes, gentle self-care, and grounding rituals.
              It's not about trends. It's about tuning in, healing naturally, and remembering where it all began.
            </p>
          </div>
        </div>

        {/* Ayurveda Intro Section */}
        <div className="intro-section">
          <h2>What is Ayurveda?</h2>
          <p>
            Ayurveda, meaning "the science of life," is an ancient system of natural healing that originated in India over 5,000 years ago.
            It focuses on balance between body, mind, and environment—using herbs, food, and daily routines.
          </p>
          <p>
            Instead of masking symptoms, Ayurveda addresses the root cause of discomfort, offering gentle, sustainable practices tailored to your individual nature.
            It’s not just a health system; it’s a way of living.
          </p>
          <p>
            Whether it's through food, rituals, or rest, Ayurveda guides you back to balance—patiently and naturally.
          </p>
        </div>

        {/* Pick Your Path Section */}
        <div className="path-section">
          <h2>Pick your path</h2>
          <p className="path-intro">
            Take a peek at what’s inside—whether you’re here for a quick remedy, a cozy recipe, or a mindful routine.
          </p>

          <div className="path-cards">
            <Link to="/recipes" className="path-card-link">
              <div className="path-card">
                <h3>🌿 Recipes</h3>
                <p>Healing foods and easy drinks</p>
              </div>
            </Link>

            <Link to="/selfcare" className="path-card-link">
              <div className="path-card">
                <h3>🛁 Self-Care</h3>
                <p>Daily rituals & Ayurvedic habits</p>
              </div>
            </Link>

            <Link to="/dashboard" className="path-card-link">
              <div className="path-card">
                <h3>📊 Dashboard</h3>
                <p>Your personal space (mockup)</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Dosha Section */}
        <div className="dosha-intro-section">
          <h2>✨ Find Your Dosha</h2>
          <p>
            Curious about your Ayurvedic energy type? Learn what <strong>Vata</strong>, <strong>Pitta</strong>, or <strong>Kapha</strong> means—and how it shapes your wellness path.
          </p>
          <Link to="/doshas" className="dosha-button">Learn More →</Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />

    </>
  );
}

export default Home;

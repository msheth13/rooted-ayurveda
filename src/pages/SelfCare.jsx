import oilImg from '../assets/page3-oil-img.jpg';
import '../index.css'; 

// This page is all about daily Ayurvedic self-care habits. I kept it simple and calming to reflect the gentle tone of the practices. I also added short explanations and icons to make it feel more inviting.




function SelfCare() {
  return (
    <div className="selfcare-page">
      
      {/* Header Image */}
      <div className="selfcare-hero">
        <img
          src={oilImg}
          alt="Essential oils and flowers for Ayurvedic self-care – Unsplash (https://unsplash.com/photos/a-bottle-of-essential-oils-sitting-on-a-table-next-to-a-bunch-of-flowers-nKynHXxgEfE)"
          className="selfcare-hero-img"
        />
      </div>


      <h2>Daily Self-Care Rituals</h2>

      <div className="selfcare-intro">
        <p>
          Ayurveda encourages small daily rituals that help you stay grounded, balanced, and connected. Self-care isn’t just about luxury—it’s maintenance for your body, mind, and spirit.
        </p>
        <p>
          This page gathers gentle practices you can easily add into your routine. Some take just 5 minutes but make a big difference in how you feel throughout the day.
        </p>
        <p>
          Whether you start your morning with warm lemon water or wind down with a scalp massage, the Ayurvedic approach is all about listening to your body.
        </p>
        <p>
          Begin with what feels right. These aren’t rules—they’re invitations to reconnect with yourself a little more deeply each day.
        </p>
      </div>

      <div className="selfcare-list">
        <div className="selfcare-card">
          <h3>🪥 Tongue Scraping</h3>
          <p>Start the day by removing toxins from your tongue using a metal scraper. It freshens breath and stimulates digestion.</p>
        </div>

        <div className="selfcare-card">
          <h3>🫧 Oil Pulling</h3>
          <p>Swish sesame or coconut oil in your mouth for 5–10 minutes. This supports oral health and detoxification.</p>
        </div>

        <div className="selfcare-card">
          <h3>💆‍♀️ Abhyanga (Self-Massage)</h3>
          <p>Massage your body with warm oil before bathing. This calms the nervous system and nourishes the skin.</p>
        </div>

        <div className="selfcare-card">
          <h3>🌞 Morning Rituals</h3>
          <p>Waking early, hydrating with warm lemon water, and mindful breathing sets a calm tone for your day.</p>
        </div>
      </div>
    </div>
  );
}

export default SelfCare;



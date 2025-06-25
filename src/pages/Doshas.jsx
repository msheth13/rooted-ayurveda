import '../index.css'; 

//I used this page to introduce the three Doshas clearly and simply. I used separate cards and icons to visually explain each energy type. My goal was to make it feel easy to understand even if someone is new to Ayurveda.



function Doshas() {
  return (
    <div className="doshas-page">
      <h2>Know Your Dosha</h2>
      <p className="dosha-intro-text">
        In Ayurveda, a Dosha is your body’s natural energy or constitution. There are three primary Doshas—Vata, Pitta, and Kapha—each representing different blends of elements and functions in the body and mind. Understanding your Dosha can help guide your food, lifestyle, and daily routine for better balance.
      </p>

      <div className="dosha-cards-container">
        <div className="dosha-card vata">
          <h3>🌬️ Vata</h3>
          <p>Elements: Air + Space</p>
          <p>Energetic, creative, but can become anxious or scattered. Needs warmth, grounding, and routine.</p>
        </div>

        <div className="dosha-card pitta">
          <h3>🔥 Pitta</h3>
          <p>Elements: Fire + Water</p>
          <p>Driven, focused, but can overheat or get irritable. Needs cooling foods, calm, and kindness.</p>
        </div>

        <div className="dosha-card kapha">
          <h3>🌿 Kapha</h3>
          <p>Elements: Earth + Water</p>
          <p>Steady, caring, but can feel heavy or sluggish. Needs movement, stimulation, and lightness.</p>
        </div>
      </div>
    </div>
  );
}

export default Doshas;


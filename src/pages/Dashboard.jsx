import { useState } from 'react';
import '../index.css';
import Heading from '../components/Heading';
import Note from '../components/Note';

//Since this is a mockup page, I designed it to feel personal and supportive. I added a greeting, daily wellness cards, and a notes section. I used useState to show the current date and broke the layout into two columns to make it feel like a real dashboard.


function Dashboard() {
  const [date] = useState(new Date().toLocaleDateString());

  return (
    <div className="dashboard-page">
      <div className="dashboard-layout">
        <div className="dashboard-left">
          <p className="dashboard-date">📅 {date}</p>
          <h2>Hello, Mehreen 👋</h2>
          <p className="dashboard-sub">“Small habits make a big difference.”</p>

          <div className="dashboard-cards">
            <div className="dashboard-card">
              <h3>😊 Morning Tip</h3>
              <p>Start your day with warm water + lemon.</p>
            </div>
            <div className="dashboard-card">
              <h3>🪷 Self-Care</h3>
              <p>Try oil pulling for 5 minutes today.</p>
            </div>
            <div className="dashboard-card">
              <h3>🍵 Recipe Pick</h3>
              <p>Khichdi is perfect for grounding energy.</p>
            </div>
          </div>

          <div className="dashboard-note">
            <Heading text="📝 Notes to Self" />

          <Note>
            <textarea placeholder="Write a reminder or reflection..."></textarea>
          </Note>
          </div>
        </div>

        <div className="dashboard-right">
          <div className="dashboard-quote">
            <blockquote>
              “Let today be kind to your body, gentle on your mind, and nourishing to your soul.”
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

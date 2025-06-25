import '../index.css';
import storyImg from '../assets/whyrooted.jpg'; 
import Divider from '../components/Divider';


//This page explains why I chose the name “rooted.” I kept it personal by sharing my connection to Ayurveda through my mom. I used a story based tone to make it more reflective and meaningful.

function WhyRooted() {
  return (
    <div className="whyrooted-container-vertical">
      <img
        src={storyImg}
        alt="Top view of Ayurvedic herbs and spices – Freepik (https://www.freepik.com/free-photo/top-view-mint-cinnamon-with-spices-white-ingredients-leaves_9911397.htm)"
        className="whyrooted-img-centered"
      />


      {/* Divider line under the image */}
      <Divider />

      <div className="whyrooted-textbox">
        <h2>🌱 The story behind this name...</h2>
        <p>
          I chose the name <strong>rooted.</strong> because that’s what I hope this space becomes — a gentle reminder to pause, to reconnect, and to come back to yourself.
        </p>
        <p>
          It’s also deeply personal. My mom has always preferred Ayurveda over store-bought, chemical-filled products. Growing up, I watched her reach for turmeric, ajwain, and ginger before she’d even think about using medicine. Whether it was a simple home remedy or a grounding self-care routine, she taught me that healing often begins at home — and with nature.
        </p>
        <p>
          As I’ve grown older, I’ve noticed more people around me becoming curious about Ayurveda. This ancient practice, once tucked away in tradition, is making its way back into modern lives — and for good reason. It’s sustainable, intentional, and rooted in balance.
        </p>
        <p>
          “Rooted” is more than a name. It’s about staying connected — to your body, to the earth, and to the quiet wisdom passed down through generations. It’s a reminder that not everything needs a prescription. Sometimes, all we need is to return to the roots.
        </p>

        <blockquote className="whyrooted-quote">
          “We don’t always need something new. Sometimes, what’s old is exactly what we need.”
        </blockquote>
      </div>

    </div>
  );
}

export default WhyRooted;

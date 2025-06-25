import '../index.css';

function RecipeCard({ title, image, description, onClick }) {
  return (
    <div className="recipe-card" onClick={onClick}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default RecipeCard;

//I made this RecipeCard component to display recipe info using props. It makes the code cleaner and lets me reuse the layout with different recipe data.


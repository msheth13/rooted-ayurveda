import { useState } from 'react';
import khichdiImg from '../assets/page2-khichdi.jpg';
import turmericImg from '../assets/page2-milk.jpg';
import buttermilkImg from '../assets/page2-buttermilk.jpg';
import RecipeCard from '../components/RecipeCard';
import '../index.css';

//This Recipes page shows 3 Ayurvedic food options using props passed into a <RecipeCard /> component. 
// I used useState to track which recipe is selected and show its ingredients/instructions in a modal. 
// I wanted to create an interactive way to view recipes without leaving the page.


function Recipes() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const recipeDetails = {
    khichdi: {
      title: 'Khichdi',
      content: (
        <>
          <p><strong>Ingredients:</strong></p>
          <ul>
            <li>1/2 cup rice</li>
            <li>1/2 cup split yellow moong dal</li>
            <li>1 tsp ghee</li>
            <li>1/2 tsp cumin seeds</li>
            <li>1/2 tsp turmeric</li>
            <li>Salt to taste</li>
            <li>Water (3–4 cups)</li>
          </ul>
          <p><strong>Instructions:</strong></p>
          <ol>
            <li>Rinse rice and dal. In a pot, heat ghee and add cumin seeds.</li>
            <li>Add turmeric, rice, dal, salt, and water. Bring to boil.</li>
            <li>Simmer for 20–25 minutes until soft and mushy. Serve warm.</li>
          </ol>
        </>
      )
    },
    turmeric: {
      title: 'Turmeric Milk (Golden Milk)',
      content: (
        <>
          <p><strong>Ingredients:</strong></p>
          <ul>
            <li>1 cup milk (dairy or plant-based)</li>
            <li>1/2 tsp turmeric</li>
            <li>Pinch of black pepper</li>
            <li>1/4 tsp cinnamon</li>
            <li>Optional: grated ginger, honey</li>
          </ul>
          <p><strong>Instructions:</strong></p>
          <ol>
            <li>Heat milk in a saucepan and add all spices.</li>
            <li>Simmer for 5–7 minutes. Strain if needed.</li>
            <li>Add honey once slightly cooled. Sip warm.</li>
          </ol>
        </>
      )
    },
    buttermilk: {
      title: 'Buttermilk',
      content: (
        <>
          <p><strong>Ingredients:</strong></p>
          <ul>
            <li>1/2 cup plain yogurt</li>
            <li>1 cup water</li>
            <li>Pinch of cumin powder</li>
            <li>Grated ginger</li>
            <li>Chopped mint (optional)</li>
            <li>Salt to taste</li>
          </ul>
          <p><strong>Instructions:</strong></p>
          <ol>
            <li>Blend yogurt and water until smooth.</li>
            <li>Add spices and mix well.</li>
            <li>Chill and serve. Good for digestion and cooling.</li>
          </ol>
        </>
      )
    }
  };

  return (
    <div className="recipes-page">
      <h2>Ayurvedic Recipes</h2>

      <div className="recipes-intro">
        <p>
          Ayurveda believes that food is medicine. Each ingredient carries energy that can either ground, balance, or energize us.
        </p>
        <p>
          These recipes are not just about flavor, but also about function. Whether you’re feeling ungrounded, overheated, or sluggish—there’s a dish rooted in ancient wisdom to help bring you back to center.
        </p>
      </div>

      <div className="recipe-cards">
        <RecipeCard
          title="Khichdi"
          image={khichdiImg}
          description="Gentle on digestion and perfect for all doshas."
          onClick={() => setSelectedRecipe('khichdi')}
        />
        <RecipeCard
          title="Turmeric Milk"
          image={turmericImg}
          description="Anti-inflammatory and calming drink."
          onClick={() => setSelectedRecipe('turmeric')}
        />
        <RecipeCard
          title="Buttermilk"
          image={buttermilkImg}
          description="Cooling, hydrating, and great for digestion."
          onClick={() => setSelectedRecipe('buttermilk')}
        />
      </div>


      {/* Modal */}
      {selectedRecipe && (
        <div className="recipe-modal">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setSelectedRecipe(null)}>✖</button>
            <h3>{recipeDetails[selectedRecipe].title}</h3>
            {recipeDetails[selectedRecipe].content}
          </div>
        </div>
      )}
    </div>
  );
}

export default Recipes;

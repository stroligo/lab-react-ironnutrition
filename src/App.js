import './App.css';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [allFoods, setAllFoods] = useState(foods);

  return (
    <div className="App">
      <h1>Search</h1>
      <Search allFoods={allFoods} setAllFoods={setAllFoods} />
      <h1>Food Add</h1>
      <AddFoodForm allFoods={allFoods} setAllFoods={setAllFoods} />
      <h1>Food List</h1>
      <div
        className="area-food"
        style={{
          display: 'flex',
          wrap: 'wrap',
        }}
      >
        {allFoods.map((food) => {
          return <FoodBox food={food} />;
        })}
      </div>
    </div>
  );
}
export default App;

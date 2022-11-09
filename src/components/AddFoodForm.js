import { useState } from 'react';
import { Divider, Input } from 'antd';

// Iteration 4
function AddFoodForm({ allFoods, setAllFoods }) {
  const [form, setForm] = useState({
    name: '',
    calories: 0,
    image: '',
    servings: 0,
  });
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setAllFoods([...allFoods, form]);

    setForm({
      name: '',
      calories: 0,
      image: '',
      servings: 0,
    });
  }
  console.log(form);
  return (
    <form>
      <label>Name</label>
      <Input
        type="text"
        value={form.name}
        name="name"
        onChange={handleChange}
      />
      <label>Image</label>
      <Input
        type="text"
        value={form.image}
        name="image"
        onChange={handleChange}
      />
      <label>Calories</label>
      <Input
        type="number"
        value={form.calories}
        name="calories"
        onChange={handleChange}
      />
      <label>Servings</label>
      <Input
        type="number"
        value={form.servings}
        name="servings"
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Create
      </button>
    </form>
  );
}

export default AddFoodForm;

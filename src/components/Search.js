import { useState } from 'react';
import { Button, Input } from 'antd';

// Iteration 5
function Search({ allFoods, setAllFoods }) {
  const [form, setForm] = useState({
    name: '',
  });
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSearch(name) {
    let filteredFood = allFoods.filter((food) => {
      return food.name !== name;
    });
    setAllFoods(filteredFood);
  }

  return (
    <div>
      <label>Search</label>
      <Input
        type="text"
        value={form.name}
        name="name"
        onChange={handleChange}
      />
      <Button onClick={handleSearch()}>AQUI</Button>
      <div></div>
    </div>
  );
}

export default Search;

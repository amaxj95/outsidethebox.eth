import React, { useState } from 'react';

function ItemListForm({ onSubmit }) {
  const [items, setItems] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(items);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="List the items you need moved"
        value={items}
        onChange={(e) => setItems(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ItemListForm;

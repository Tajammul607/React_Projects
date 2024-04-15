import React, { useState } from 'react';

interface Item {
  id: number;
  name: string;
}

const MainApp: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [itemName, setItemName] = useState<string>('');

  const addItem = () => {
    if (itemName.trim() !== '') {
      const newItem: Item = {
        id: new Date().getTime(),
        name: itemName,
      };
      setItems([...items, newItem]);
      setItemName('');
    }
  };

  const deleteItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const updateItem = (id: number, newName: string) => {
    setItems(items.map(item => (item.id === id ? { ...item, name: newName } : item)));
  };

  return (
    <div>
      <h1>Main Application</h1>
      <input
        type="text"
        value={itemName}
        onChange={e => setItemName(e.target.value)}
        placeholder="Enter item name"
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
            <button onClick={() => updateItem(item.id, prompt('Enter new name') || '')}>
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainApp;

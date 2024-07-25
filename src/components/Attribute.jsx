import React from 'react';

const Attribute = ({ name, value, modifier, updateAttribute }) => {
  const increment = () => {
    updateAttribute(name, value + 1);
  };

  const decrement = () => {
    if (value > 0) {
      updateAttribute(name, value - 1);
    }
  };

  return (
    <div className="flex items-center justify-between p-2 border rounded">
      <span>{name}: {value} (Modifier: {modifier})</span>
      <div className="space-x-2">
        <button onClick={decrement} className="bg-red-500 text-white px-2 py-1 rounded">-</button>
        <button onClick={increment} className="bg-green-500 text-white px-2 py-1 rounded">+</button>
      </div>
    </div>
  );
};

export default Attribute;

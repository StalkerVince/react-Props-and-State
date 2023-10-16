import React from 'react';
import MenuItem from './MenuItem';

function MenuList({ foodItems }) {
  console.log(foodItems);
  return (
    <div>
      {foodItems.map((e) => (
        <MenuItem
          itemName={e.itemName}
          description={e.description}
          foodImage={e.foodImage}
          price={e.price}
          isFavorite={e.isFavorite}
        />
      ))}
    </div>
  );
}

export default MenuList;

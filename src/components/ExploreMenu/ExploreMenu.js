import React from 'react';
import "../ExploreMenu/Explore.css";
import { menuList } from '../MenuList';

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-test'>
      Discover delicious flavors from around the world — fresh, hot, and made with love.
      From cheesy pizzas to sizzling burgers, there’s something for every craving.
      </p>
      <div className='explore-menu-list'>
        {menuList.map((item, index) => (
          <div onClick={()=>setCategory(prev=>prev===item.menu?"All":item.menu)} key={index} className='explore-menu-list-items'>
            <img className={category===item.menu?"active":""} src={item.menu_image} alt={item.menu} />
            <p>{item.menu}</p>
          </div>
        ))}
        {console.log(category)}
      </div>
      <hr/>
    </div>
  );
}

export default ExploreMenu;

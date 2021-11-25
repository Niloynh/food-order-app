import React from 'react';
import {Data} from '../data/data';
import MenuItem from '../components/MenuItem';
import '../Style/Menu.css';
const Menu = () => {
    return (
        <div className="menu">
            <h1 className="menuTitle">Our Menu</h1>
            <div className="menuTitle">
                <div className="menuList">
                    {Data.map((menuItem, key) =>{return (<MenuItem 
                    key={key} 
                    image={menuItem.image}
                    name={menuItem.name}
                    price={menuItem.price}

                    />
                    )})}
                </div>
            </div>
        </div>
    );
};

export default Menu;
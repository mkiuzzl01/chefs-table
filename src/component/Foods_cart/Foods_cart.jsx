import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Food_cart from '../Food_cart/Food_cart';

const Foods_cart = props => {
    const [foods, setFoods] = useState([]);
    useEffect(()=>{
        fetch('Recipes.json')
        .then(Response=> Response.json())
        .then(data=> setFoods(data));
    },[])
    return (
        <div className='lg:w-3/4 grid grid-cols-1 lg:grid-cols-2'>
            {
                foods.map(food =><Food_cart 
                    key={food.recipe_id}
                    food={food}
                ></Food_cart>)
            }
        </div>
    );
};

Foods_cart.propTypes = {
    
};

export default Foods_cart;
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Food_cart from '../Foods_cart/Food_cart/Food_cart';

const Foods_cart = ({wantToCook}) => {
    const [foods, setFoods] = useState([]);
    
    useEffect(()=>{
        fetch('Recipes.json')
        .then(Response=> Response.json())
        .then(data=> setFoods(data))
    },[])
    return (
        <div className='lg:w-3/4 grid grid-cols-1 lg:grid-cols-2'>
            {
                foods.map(food =><Food_cart 
                    key={food.recipe_id}
                    wantToCook={wantToCook}
                    food={food}
                ></Food_cart>)
            }
        </div>
    );
};

Foods_cart.propTypes = {
    wantToCook:PropTypes.func.isRequired
};

export default Foods_cart;
import { MdAccessTime } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import PropTypes from "prop-types";

const Foot_cart = ({food,wantToCook}) => {
  const {calories,ingredients,preparing_time,recipe_image,recipe_name,short_description} = food;
  const items =  ingredients.slice(0,3);
  return (
    <div className="m-3">
      <div className="card bg-base-100 shadow-xl">
        <figure className="p-6 pt-10">
          <img
            src={recipe_image}
            alt={recipe_name}
            className="rounded-xl w-50"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{recipe_name}</h2>
          <p>{short_description}</p>
          <div className="border-y-2">
            <h1 className="text-xl">Ingredient: {ingredients.length}</h1>

              {
                items.map((ingredient,idx)=> 
                <div key={idx}>
                  <ul className="list-disc">
                    <li>{ingredient}
                    
                    </li>
                  </ul>
                </div>
                )
              }
          </div>
          <div className="flex justify-between space-x-4">
            <div className="flex justify-center items-center space-x-2">
              <span><MdAccessTime /></span><span>{preparing_time} minutes</span>
            </div>
            <div className="flex justify-center items-center space-x-2">
              <span><FaFire /></span><span>{calories} Calories</span>
            </div>
          </div>
          <div className="card-actions">
            <button
             onClick={()=>wantToCook(food)}
             className="btn bg-[#0BE58A] rounded-full"
             >Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Foot_cart.propTypes = {
  food:PropTypes.object.isRequired,
  wantToCook:PropTypes.func.isRequired
};

export default Foot_cart;

import PropTypes from "prop-types";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Want_to_cook = ({ foods }) => {
  const [prepFood, setPerpFood] = useState([]);

  const preparing = (food) => {
    const newPrepFood = [...prepFood, food];
    setPerpFood(newPrepFood);

    const index = foods.indexOf(food);
    if (index > -1) {
      foods.splice(index, 1);
    }
    toast.success('Currently Cooking Added')
  };
  return (
    <div className="lg:w-3/2 text-center border-2 rounded-2xl p-4">
      <div>
        <h1 className="text-2xl font-semibold border-b-2 p-3 lg:mx-8">
          Want to cook: {foods.length}
        </h1>
        <table className="table">
          <thead>
           <tr>
           <th></th>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
           </tr>
          </thead>
          <tbody>
          {foods.map((food,idx) => (
            <tr key={food.recipe_id}>
            <td>{idx + 1}</td>
              <td>{food.recipe_name}</td>
              <td>{food.preparing_time} Minutes</td>
              <td>{food.calories} Calories</td>
              <td><button
                onClick={() => preparing(food)}
                className="btn bg-[#0BE58A] rounded-full">
                Preparing
              </button></td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      <div>
        <h1 className="text-2xl font-semibold border-b-2 p-3 lg:mx-8">
          Currently cooking: {prepFood.length}
        </h1>
        <table className="table">
          <thead>
            <tr>
            <th></th>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
            </tr>
          </thead>
        <tbody>
          {prepFood.map((food,idx) => (
            <tr key={food.recipe_id}>
              <td>{idx + 1}</td>
              <td>{food.recipe_name}</td>
              <td>{food.preparing_time} minutes</td>
              <td>{food.calories} calories</td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td></td>
            <td className="text-lg font-semibold">
              Total Minutes: {prepFood.reduce((p, c) => p + c.preparing_time, 0)}
            </td>
            <td className="text-lg font-semibold">
              Total Calories: {prepFood.reduce((p, c) => p + c.calories, 0)}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

Want_to_cook.propTypes = {
  foods: PropTypes.array,
};

export default Want_to_cook;

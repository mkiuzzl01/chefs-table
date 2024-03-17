
import PropTypes from 'prop-types';
import { useState } from 'react';

const Want_to_cook = ({foods}) => {
    const [prepFood,setPerpFood] = useState([]);
    const preparing = (f)=>{
        console.log('hello',f);
    }
    return (
        <div className='lg:w-3/2 text-center'>
           <div>
           <h1 className='text-2xl font-semibold'>Want to cook: {foods.length}</h1>
            <table className='table'>
                <tr>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                </tr>
                  {
                    foods.map((food)=>
                   <tr key={food.recipe_id}>
                    <td>{food.recipe_name}</td>
                    <td>{food.preparing_time}</td>
                    <td>{food.calories}</td>
                    <button onClick={()=>preparing(foods)} className='btn bg-[#0BE58A] rounded-full'>Preparing</button>
                   </tr>
                    )
                   }
            </table>
           </div>
           <div>
           <h1 className='text-2xl font-semibold'>Currently cooking:</h1>
            <table className='table'>
                <tr>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                </tr>
                <tr>

                </tr>
            </table>
           </div>
        </div>
    );
};

Want_to_cook.propTypes = {
    foods:PropTypes.array,
};

export default Want_to_cook;
import React from 'react';
import PropTypes from 'prop-types';

const Want_to_cook = props => {
    return (
        <div className='lg:w-3/2 text-center'>
           <div>
           <h1 className='text-2xl font-semibold'>Want to cook:</h1>
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
    
};

export default Want_to_cook;
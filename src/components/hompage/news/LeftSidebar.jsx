import React from 'react';

const LeftSidebar = ({ category }) => {
    return (
        <div>
            <ul>
                <li className=' bg-slate-100 p-2 rounded-md font-bold text-center' key={category.category_id}>
                    {category.category_name}
                </li>
            </ul>
        </div >
    );
};
export default LeftSidebar;
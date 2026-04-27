import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({ categories, activeId }) => {
    return (
        <div>
            <ul>

            </ul>

            <p>All Categories</p>

            <ul className=' flex flex-col gap-3'>
                {categories.news_category.map((category) => (
                    <li className={`${activeId === category.category_id && 'bg-slate-100'} rounded-md font-bold text-center cursor-pointer`} key={category.category_id}>
                        <Link href={`/category/${category.category_id}`} className=' block  p-2'>{category.category_name}</Link>
                    </li>
                ))}
            </ul>
        </div >
    );
};
export default LeftSidebar;
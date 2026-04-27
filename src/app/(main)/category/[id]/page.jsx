import LeftSidebar from '@/components/hompage/news/LeftSidebar';
import NewsCard from '@/components/hompage/news/NewsCard';
import RightSidebar from '@/components/hompage/news/RightSidebar';
import { GetAllCategories, GetByCategoryId } from '@/lib/data';
import React from 'react';



const NewsCategryPage = async ({ params }) => {
    const { id } = await params;
    const categories = await GetAllCategories();
    const news = await GetByCategoryId(id);
    console.log(news, 'news')

    return (
        <div className='grid grid-cols-12 container gap-3 mx-auto'>

            <div className='col-span-3 p-2'>
                <LeftSidebar categories={categories} activeId={id} />

            </div>

            <div className='col-span-6'>
                news by category
                {
                    news.length > 0 ? news.map((n) => (
                        <NewsCard key={n._id} news={n} />
                    )) : (<h1>No new found</h1>)
                }
            </div>

            <div className='col-span-3'>
                <RightSidebar />
            </div>

        </div>
    );
};

export default NewsCategryPage;
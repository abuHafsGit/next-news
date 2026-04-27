import LeftSidebar from "@/components/hompage/news/LeftSidebar";


const GetAllCategories = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json();
  return data.data;
};

const HomePage = async () => {
  const categories = await GetAllCategories();

  return (
    <div className='grid grid-cols-12 container gap-3 mx-auto'>

      <div className='col-span-3 bg-gray-400 p-2'>
        <p>All Categories</p>

        <ul className=' flex flex-col gap-3'>
          {categories.news_category.map((category) => (
            <LeftSidebar key={category.category_id} category={category} />
          ))}
        </ul>

      </div>

      <div className='col-span-6 bg-red-300'>
        all news
      </div>

      <div className='col-span-3 bg-amber-300'>
        social icon
      </div>

    </div>
  );
};

export default HomePage;

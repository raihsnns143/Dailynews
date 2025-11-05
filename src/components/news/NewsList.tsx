'use client'

import React, { useEffect } from 'react'
import NewsCard, { NewsItem } from '../shared/NewsCard';

const NewsList = () => {
    const [news, setNews] = React.useState<NewsItem[]>([]);
    //const [search, setSearch] = React.useState<string>('');
    // const [category, setCategory] = React.useState<string>();

    // 🔄 API থেকে ডেটা লোড করা হচ্ছে
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await fetch('/news.json');
                const data = await res.json();
                setNews(data); // 👈 news state set
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);

    return (

        <div>
            <div className='flex justify-between items-center  py-6'>
                <form>
                    <input type="search"
                        placeholder='Search'
                        className='border border-gray-800 rounded-lg px-2 py-2 w-full sm:w-64
                         focus:outline-none focus:ring-2 focuse:ring-gray-800'
                    />
                </form>

                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-700">
                
                </label>
                <select
                    name="category"
                    id="category"
                    defaultValue=""
                    className="border border-gray-800 rounded-lg px-2 py-2 w-full sm:w-64 
                    focus:outline-none focus:ring-2 focuse:ring-gray-800"
                >
                    <option value="" disabled>
                        Select News
                    </option>
                    <option value="technology">Technology</option>
                    <option value="science">Science</option>
                    <option value="health">Health</option>
                    <option value="education">Education</option>
                    <option value="sports">Sports</option>
                    <option value="business">Business</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="lifestyle">Lifestyle</option>
                    <option value="travel">Travel</option>
                    <option value="food">Food</option>
                </select>




            </div>
            {/* api data new card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-6">
                {news.map((item) => (
                    <NewsCard key={item.id} item={item} />
                ))}
            </div>
        </div>

    );
};

export default NewsList;

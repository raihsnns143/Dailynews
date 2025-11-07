'use client'

import React, { useEffect, useState } from 'react'
import NewsCard, { NewsItem } from '../shared/NewsCard';

const NewsList = () => {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [search, setSearch] = useState<string>('');
    const [category, setCategory] = useState<string>('');

    // Fetch news.json data
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await fetch('/news.json');
                const data: NewsItem[] = await res.json();
                setNews(data);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };
        fetchNews();
    }, []);

    // Filter logic
    const filteredNews = news.filter(item => {
        const matchSearch =
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.description.toLowerCase().includes(search.toLowerCase());

        const matchCategory = category ? item.category === category : true;

        return matchSearch && matchCategory;
    });

    return (
        <div>
            {/* Search + Category */}
            <div className='flex flex-col sm:flex-row justify-between items-center gap-4 py-6 px-4'>
                <input
                    type="search"
                    placeholder='Search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='border border-gray-300 rounded-lg px-3 py-2 w-full sm:w-64
                    focus:outline-none focus:ring-2 focus:ring-gray-400'
                />

                <select
                    name="category"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full sm:w-64 
                    focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                    <option value="">All Categories</option>
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

            {/* News Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-6">
                {filteredNews.length > 0 ? (
                    filteredNews.map(item => (
                        <NewsCard key={item.id} item={item} />
                    ))
                ) : (
                    <p className="text-gray-500 col-span-full text-center">No news found.</p>
                )}
            </div>
        </div>
    );
};

export default NewsList;

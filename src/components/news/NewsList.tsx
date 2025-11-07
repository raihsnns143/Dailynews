'use client'

import React, { useEffect, useState } from 'react'
import NewsCard, { NewsItem } from '../shared/NewsCard';

const NewsList = () => {

    const [news, setNews] = useState<NewsItem[]>([]);
    const [search, setSearch] = useState<string>('');
    const [category, setCategory] = useState<string>('');

    // fetch json data
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await fetch('/news.json');
                const data = await res.json();
                setNews(data);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);

    // filter logic
    const filteredNews = news.filter(item => {
        const matchSearch =
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.description.toLowerCase().includes(search.toLowerCase());

        const matchCategory = category ? item.category === category : true;

        return matchSearch && matchCategory;
    });


    return (
        <div className="max-w-5xl mx-auto px-4 py-6">

            {/* Search + Category */}
            <div className='flex flex-col sm:flex-row justify-between items-center gap-4 mb-6'>
                <input
                    type="search"
                    placeholder='Search news...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='border border-gray-300 rounded-lg px-3 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-gray-300'
                />

                <select
                    name="category"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-gray-300"
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

            {/* Vertical News List */}
            <div className="space-y-6">
                {filteredNews.map(item => (
                    <NewsCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default NewsList;

'use client'

import React, { useEffect, useState, useRef } from 'react';
import NewsCard from '../shared/NewsCard';
import { NewsItem } from '@/types/news';
import clsx from 'clsx';
import { FaSearch } from 'react-icons/fa';

const NewsList = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [search, setSearch] = useState<string>('');
  const [category, setCategory] = useState<string>('News');
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Fetch news.json
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

  const categories: string[] = ['News', ...Array.from(new Set(news.map(item => item.category)))];

  const filteredNews = news.filter(item => {
    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());

    const matchCategory = category === 'News' || item.category === category;

    return matchSearch && matchCategory;
  });

  // Toggle search bar
  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) setTimeout(() => searchRef.current?.focus(), 100);
  };

  // Collapse search when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="py-6 px-4 max-w-7xl mx-auto">

      {/* Search Bar */}
      <div ref={wrapperRef} className="flex items-center mb-4">
        <div
          className={clsx(
            "flex items-center border border-gray-300 rounded-full px-3 py-1 transition-all duration-300",
            searchOpen ? "w-64 sm:w-80" : "w-10 cursor-pointer"
          )}
          onClick={handleSearchToggle}
        >
          <FaSearch className="text-gray-500" />
          {searchOpen && (
            <input
              ref={searchRef}
              type="text"
              placeholder="Search news..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="ml-2 w-full outline-none text-sm placeholder-gray-400"
            />
          )}
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto sm:overflow-x-visible whitespace-nowrap mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={clsx(
              "inline-block px-3 py-1 rounded-full text-xs sm:text-sm border flex-shrink-0 transition",
              category === cat
                ? "bg-red-600 text-white border-red-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-red-50"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.length > 0 ? (
          filteredNews.map(item => (
            <NewsCard
              key={item.id}
              item={item}
              className="hover:shadow-lg transition-shadow duration-300"
            />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">No news found.</p>
        )}
      </div>
    </div>
  );
};

export default NewsList;

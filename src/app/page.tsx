'use client';

import { useEffect, useState, useRef } from "react";
import Banner from "@/components/shared/Banner";
import NewsCard from "@/components/shared/NewsCard";
import NewsLetter from "@/components/shared/NewsLetter";
import clsx from "clsx";
import { NewsItem } from "@/types/news";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [search, setSearch] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("News");
  const [visible, setVisible] = useState<number>(6);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/news.json")
      .then(res => res.json())
      .then((data: NewsItem[]) => setNews(data))
      .catch(err => console.error("Failed to fetch news:", err));
  }, []);

  const categories: string[] = ["News", ...Array.from(new Set(news.map(item => item.category)))];

  const filteredNews = news.filter(item => {
    const matchesCategory = categoryFilter === "News" || item.category.toLowerCase() === categoryFilter.toLowerCase();
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularNews = news.filter(item => item.rating.rate > 4.5);
  const trendingNews = news.filter(item => item.rating.count > 100);

  const loadMore = () => setVisible(prev => prev + 6);

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
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">

      {/* Search Icon + Expandable Search */}
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

      {/* Category Pills - Compact BBC style */}
      <div className="flex items-center gap-2 overflow-x-auto sm:overflow-x-visible whitespace-nowrap mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoryFilter(cat)}
            className={clsx(
              "inline-block px-3 py-1 rounded-full text-xs font-medium border transition flex-shrink-0",
              categoryFilter === cat
                ? "bg-red-600 text-white border-red-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-red-50"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Banner */}
      <Banner />

      {/* Latest News */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6">Latest News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.slice(0, visible).map(item => (
            <NewsCard
              key={item.id}
              item={item}
              className="transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:scale-105 duration-300"
            />
          ))}
        </div>
        {visible < filteredNews.length && (
          <div className="text-center mt-6">
            <button
              onClick={loadMore}
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors"
            >
              Load More
            </button>
          </div>
        )}
      </section>

      {/* Popular News */}
      {popularNews.length > 0 && (
        <section className="my-12">
          <h2 className="text-2xl font-bold mb-6">Popular News</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularNews.map(item => (
              <NewsCard
                key={item.id}
                item={item}
                className="transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:scale-105 duration-300"
              />
            ))}
          </div>
        </section>
      )}

      {/* Trending News */}
      {trendingNews.length > 0 && (
        <section className="my-12">
          <h2 className="text-2xl font-bold mb-6">Trending News</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingNews.map(item => (
              <NewsCard
                key={item.id}
                item={item}
                className="transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:scale-105 duration-300"
              />
            ))}
          </div>
        </section>
      )}

      {/* Newsletter */}
      <NewsLetter />
    </div>
  );
};

export default Home;

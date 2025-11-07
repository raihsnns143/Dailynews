"use client";

import { useEffect, useState } from "react";
import Banner from "@/components/shared/Banner";
import NewsCard from "@/components/shared/NewsCard";
import NewsLetter from "@/components/shared/NewsLetter";
import { NewsItem } from "@/types/news";

const Home = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [visible, setVisible] = useState(6);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  // Filtered News
  const filteredNews = news.filter((item) => {
    const matchesCategory = categoryFilter
      ? item.category.toLowerCase() === categoryFilter.toLowerCase()
      : true;
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularNews = news.filter((item) => item.rating.rate > 4.5);
  const trendingNews = news.filter((item) => item.rating.count > 100);

  const loadMore = () => setVisible((prev) => prev + 6);

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <Banner />

      {/* Search & Filter */}
      <div className="my-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <input
          type="text"
          placeholder="Search news..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-md px-4 py-2 w-full sm:w-1/2"
        />
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="border rounded-md px-4 py-2"
        >
          <option value="">All Categories</option>
          {[...new Set(news.map((item) => item.category))].map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Latest News */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6">Latest News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.slice(0, visible).map((item) => (
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
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
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
            {popularNews.map((item) => (
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
            {trendingNews.map((item) => (
              <NewsCard
                key={item.id}
                item={item}
                className="transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:scale-105 duration-300"
              />
            ))}
          </div>
        </section>
      )}

      <NewsLetter />
    </div>
  );
};

export default Home;

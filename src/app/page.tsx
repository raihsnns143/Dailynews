"use client";
import { useEffect, useState } from "react";
import Banner from "@/components/shared/Banner";
import NewsCard from "@/components/shared/NewsCard";
import NewsLetter from "@/components/shared/NewsLetter";
import { NewsItem } from "@/types/news";

const Home = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div className="py-12">
      <Banner />

      <div className="my-12">
        <h2 className="text-2xl font-bold mb-8">Latest News</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.slice(0, 3).map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>

      <NewsLetter />
    </div>
  );
};

export default Home;

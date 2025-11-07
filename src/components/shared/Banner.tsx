'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Banner: React.FC = () => {
  const router = useRouter();
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const fetchNews = async () => {
      try {
        const res = await fetch('/news.json');
        if (!res.ok) throw new Error('Failed to fetch news');

        const data: NewsItem[] = await res.json();
        if (!data.length) return;

        setNewsList(data);
        // randomize start index
        const startIndex = Math.floor(Math.random() * data.length);
        setIndex(startIndex);

        interval = setInterval(() => {
          // fade out current
          setFade(false);

          // after fade‑out, change index & fade in
          setTimeout(() => {
            setIndex((prev) => (prev + 1) % data.length);
            setFade(true);
          }, 500); // match CSS duration
        }, 4000); // 4 seconds per slide
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();

    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  const news = newsList[index];
  if (!news) {
    return (
      <div className="text-center py-20 text-gray-500">
        Loading news...
      </div>
    );
  }

  const handleReadMore = () => {
    router.push(`/news/${news.id}`);
  };

  return (
    <div className="relative bg-gray-50 py-8 sm:py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
        {/* Text Section */}
        <div className={clsx(
          "space-y-3 md:space-y-5 text-center md:text-left transition-opacity duration-500",
          fade ? "opacity-100" : "opacity-0"
        )}>
          <span className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">
            Latest News
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            {news.title}
          </h1>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            {news.description}
          </p>
          <Button
            variant="default"
            className="px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base mt-2"
            onClick={handleReadMore}
          >
            Read More
          </Button>
        </div>

        {/* Image Section */}
        <div className={clsx(
          "relative w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg transition-opacity duration-500",
          fade ? "opacity-100" : "opacity-0"
        )}>
          <Image
            src={news.image}
            alt={news.title}
            fill
            className="object-cover rounded-lg"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

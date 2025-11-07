'use client'

import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

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

const Banner = () => {
    const router = useRouter();
    const [news, setNews] = useState<NewsItem | null>(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await fetch('/news.json');
                const data: NewsItem[] = await res.json();
                setNews(data[0]);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };
        fetchNews();
    }, []);

    if (!news) return null;

    const handleReadMore = () => {
        router.push(`/news/${news.id}`);
    };

    return (
        <div className="relative bg-gray-50 py-8 sm:py-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
                
                {/* Text */}
                <div className="space-y-3 md:space-y-5 text-center md:text-left">
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

                {/* Image */}
                <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        className="object-cover rounded-lg"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-lg"></div>
                </div>

            </div>
        </div>
    );
};

export default Banner;

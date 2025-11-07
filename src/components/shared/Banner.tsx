import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Banner = () => {
    const router = useRouter();

    const handleReadMore = () => {
        // Example: navigate to news page
        router.push('/news'); 
        // Or if you want a specific article:
        // router.push('/news/1');
    };

    return (
        <div className="relative bg-amber-100 py-8 md:py-10 lg:py-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 lg:gap-12">
                
                {/* Image Section */}
                <div className="relative w-full h-56 md:h-72 lg:h-80 rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src="https://images.unsplash.com/photo-1753010835622-41014195864a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="OpenAI Banner"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-lg"></div>
                </div>

                {/* Content Section */}
                <div className="space-y-3 md:space-y-4 text-center md:text-left">
                    <h4 className="text-sm md:text-sm font-medium text-blue-600 uppercase tracking-wide">
                        Technology
                    </h4>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                        OpenAI Is Growing Fast and Burning Through Piles of Money
                    </h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        OpenAI monthly revenue hit US$300 million in August, up 1,700% since early 2023, 
                        and the company expects about $3.7 billion in annual sales this year.
                        <br className="hidden md:block" />
                        Around 350 million people — up from 100 million in March — used its services each month as of June.
                    </p>
                    <Button
                        variant="default"
                        className="px-5 py-2 text-sm md:text-base mt-2 md:mt-3"
                        onClick={handleReadMore} // ✅ make it functional
                    >
                        Read More
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;

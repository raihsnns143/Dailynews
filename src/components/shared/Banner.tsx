import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';

const Banner = () => {
    return (
        <div className='bg-amber-100 py-8 md:py-12 lg:py-16'> {/* বিভিন্ন স্ক্রিন সাইজের জন্য প্যাডিং */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-16'> {/* কন্টেইনার এবং রেসপনসিভ গ্যাপ */}
                
                {/* 🖼️ Image Section - আরও রেসপনসিভ করা হলো */}
                <div className='relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl'> {/* Image কন্টেইনার */}
                    <Image
                        src="https://images.unsplash.com/photo-1753010835622-41014195864a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="alif"
                        fill // ✅ 'fill' প্রপ ব্যবহার করা হলো, যাতে ইমেজ কন্টেইনারের পুরো জায়গা নেয়
                        className="object-cover" // ✅ ইমেজ যাতে কন্টেইনারের মধ্যে সুন্দরভাবে ফিট হয়
                        priority // ✅ ব্যানার ইমেজ হওয়ায় priority যোগ করা হলো
                    />
                </div>

                {/* 📝 Content Section - রেসপনসিভ টেক্সট সাইজ */}
                <div className='space-y-4 md:space-y-6'>
                    <h4 className='text-sm md:text-base font-medium text-gray-900'>Technology</h4> {/* রেসপনসিভ টেক্সট সাইজ */}
                    <h2 className='text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900'> {/* রেসপনসিভ টাইটেল সাইজ */}
                        OpenAI Is Growing Fast and Burning Through Piles of Money
                    </h2>
                    <p className='text-base md:text-lg text-gray-700 leading-relaxed'> {/* রেসপনসিভ প্যারাগ্রাফ সাইজ */}
                        OpenAI monthly revenue hit us$300 million in August, up 1,700% since the beginning of 2023, and the company expects about $3.7 billion in annual sales this year, according to financial documents reviewed by The New York Times
                        <br className='hidden md:inline'></br> {/* ছোট স্ক্রিনে লাইন ব্রেক লুকানো */}
                        <br className='hidden md:inline'></br> {/* ছোট স্ক্রিনে লাইন ব্রেক লুকানো */}
                        OpenAI estimates that its revenue will balloon to copy1.6 billion next year. OpenAI revenue in August more than tripled from a year earlier, according to the documents, and about 350 million people - up from around 100 million in March of this year - used its services each month as of June.
                    </p>
                    <Button variant='default' className='px-6 py-3 text-base md:text-lg'>Read More</Button> {/* বাটন সাইজ */}
                </div>
            </div>
        </div>
    );
};

export default Banner;
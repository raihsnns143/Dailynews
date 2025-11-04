import { notFound } from 'next/navigation';
import Image from 'next/image';
// import { Button } from '@/components/ui/button'; 

// ডেটা স্ট্রাকচারের জন্য ইন্টারফেস (ঠিক আছে)
interface NewsItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// ✅ এরর ফিক্স: Page Props-এর জন্য type ব্যবহার করা হলো (যাতে বিল্ড এরর না আসে)
type NewsPageProps = {
  params: { [key: string]: string }; // জেনিরিক টাইপ ব্যবহার করা হলো
};


// Page Component
export default async function NewsPage({ params }: NewsPageProps) {
  
  // params অবজেক্ট থেকে slug ডি-স্ট্রাকচার করা
  const { slug } = params; 
  
  // API কল
  const res = await fetch(`https://fakestoreapi.com/products/${slug}`); 

  if (!res.ok) {
    return notFound();
  }

  const item: NewsItem = await res.json();

  // Description Auto-expansion logic (ঠিক আছে)
  const expandedDescription =
    item.description.length > 500
      ? item.description
      : Array(5).fill(item.description).join(' ');

  return (
    <div className="min-h-screen bg-background mt-8">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-xl shadow-xl overflow-hidden min-h-[80vh]">
          
          {/* 🖼️ Image Section */}
          <div className="flex justify-center items-center bg-gray-50 p-8">
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={400}
              className="rounded-xl object-contain h-96 w-auto transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>

          {/* 📄 Content Section */}
          <div className="flex flex-col justify-between p-8 space-y-6">
            <div>
              <p className="text-sm font-medium text-indigo-500 uppercase tracking-wide mb-2">
                {item.category}
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                {item.title}
              </h1>
              <p className="text-gray-700 text-base leading-relaxed max-w-prose">
                {expandedDescription}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                {/* মূল্য এবং রেটিং ডিসপ্লে করা */}
                {/* <span className="text-2xl font-semibold text-green-600">৳{item.price}</span> */}
                {/* <span className="text-sm text-gray-500">
                  ⭐ {item.rating.rate} ({item.rating.count} reviews)
                </span> */}
              </div>
              
              {/* বাটন (যদি Button কম্পোনেন্ট থাকে তবে Uncomment করুন) */}
              {/* <Button className="w-full md:w-auto px-6 py-2 text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors duration-200">
                🛒 Add to Cart
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
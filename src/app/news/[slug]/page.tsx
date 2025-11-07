import Image from 'next/image';

// 🟢 Type definition for News Item
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

// 🟢 Props type
type NewsPageProps = {
  params: { slug: string };
};

export default async function NewsPage({ params }: NewsPageProps) {
  const { slug } = params;

  // ✅ Use correct base URL in production or local
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || 'https://www.raihans.shop';

  const url = `${baseUrl}/news.json`;
  console.log('Fetching news from:', url);

  let data: NewsItem[] = [];

  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
    data = await res.json();
  } catch (error) {
    console.error('❌ Fetch error:', error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600 text-lg">Failed to load news.</p>
      </div>
    );
  }

  // ✅ Match item by slug (id)
  const item = data.find((n) => n.id.toString() === slug);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-700 text-xl">News not found.</p>
      </div>
    );
  }

  // ✅ Expand description if short
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
              src={item.image || '/placeholder.png'} // fallback image
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
          </div>
        </div>
      </div>
    </div>
  );
}

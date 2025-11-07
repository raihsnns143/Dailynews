import Image from 'next/image';
import Link from 'next/link';

export interface NewsItem {
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

interface NewsCardProps {
  item: NewsItem;
  className?: string;
}

const NewsCard = ({ item, className = "" }: NewsCardProps) => {
  return (
    <div className={`flex flex-col sm:flex-row border-b pb-4 hover:shadow-lg transition-shadow duration-300 ${className}`}>
      
      {/* Image */}
      <div className="flex-shrink-0 mb-3 sm:mb-0 sm:mr-4">
        <Link href={`/news/${item.id}`}>
          <Image
            src={item.image}
            alt={item.title}
            width={250}
            height={150}
            className="w-full sm:w-56 h-36 object-cover rounded cursor-pointer hover:scale-105 transition-transform duration-200"
            priority
          />
        </Link>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {item.title}
          </h2>

          <p className="text-gray-700 text-sm mb-2 line-clamp-3">
            {item.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
          <span>{item.rating.rate} ⭐ ({item.rating.count})</span>
          <Link href={`/news/${item.id}`}>
            <button className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm transition-colors duration-200">
              Read More
            </button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default NewsCard;

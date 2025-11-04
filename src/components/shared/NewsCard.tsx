import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export interface NewsItem {
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

interface NewsCardProps {
  item: NewsItem;
}

const NewsCard = ({ item }: NewsCardProps) => {
  return (
    <div className="max-w-xs w-full border p-4 rounded-md shadow-md mx-auto">
      <Link href={`/news/${item.id}`} className="block overflow-hidden">
        <div className="flex justify-center">
          <Image
            src={item.image}
            alt={item.title}
            width={200}
            height={180}
            className="h-48 rounded cursor-pointer hover:scale-105 transition-transform duration-200"
            priority
          />
        </div>
      </Link>

      <div className="flex flex-col flex-grow p-2">
        <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
          {item.title}
        </h2>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>

        <Link href={`/news/${item.id}`}>
          <Button className="w-full py-2 text-sm font-medium">
            Read More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;

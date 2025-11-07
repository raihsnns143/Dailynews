import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { NewsItem } from "@/types/news";

interface NewsCardProps {
  item: NewsItem;
  className?: string;
}

const NewsCard = ({ item, className = "" }: NewsCardProps) => {
  return (
    <div
      className={clsx(
        "flex flex-col sm:flex-row bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 border border-gray-100",
        className
      )}
    >
      {/* Image */}
      <div className="relative w-full sm:w-56 h-48 sm:h-36 flex-shrink-0">
        <Link href={`/news/${item.id}`}>
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
            priority
          />
        </Link>
      </div>

      {/* Content */}
      <div className="flex-1 p-3 sm:p-4 flex flex-col justify-between">
        <div>
          {/* Category badge */}
          <span className="inline-block text-red-600 border border-red-600 text-xs sm:text-sm px-2 py-0.5 rounded-full mb-1 font-medium">
            {item.category.toUpperCase()}
          </span>

          {/* Title */}
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
            {item.title}
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-sm sm:text-base line-clamp-3">
            {item.description}
          </p>
        </div>

        {/* Read More */}
        <div className="mt-2 flex items-center justify-between">
          <Link href={`/news/${item.id}`}>
            <span className="text-red-600 text-sm sm:text-base font-medium hover:underline cursor-pointer">
              Read More
            </span>
          </Link>

          {/* Optional rating */}
          <span className="text-gray-400 text-xs sm:text-sm">
            ⭐ {item.rating.rate} ({item.rating.count})
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

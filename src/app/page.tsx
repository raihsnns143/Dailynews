import Banner from "@/components/shared/Banner";
import NewsCard from "@/components/shared/NewsCard";
import NewsLetter from "@/components/shared/NewsLetter";
import { NewsItem } from "@/types/news";

const Home = async() => {
  const data = await fetch("https://fakestoreapi.com/products")
  const news = await data.json();
  console.log(news);
  return (
    <div className="py-12">
     <Banner></Banner>

     <div className="my-12">
      <h2  className="text-2xl font-bold mb-8">Latest News</h2>
     </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {
        news.slice(0,3).map((item: NewsItem) => (
         <NewsCard key={item.id} item={item} />

        ))
      }
     </div>
     <NewsLetter></NewsLetter>
    </div>
    
  );
}
export default Home;

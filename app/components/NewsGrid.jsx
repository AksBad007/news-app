import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { UserAuth } from "@/lib/provider";
import ArticleReader from "./ArticleReader";

const NewsGrid = () => {
  const initialReaderState = {
    selected: false,
    article: null,
  };
  const { user } = UserAuth()
  const { pageNumber, view } = useSelector((state) => state.pageNumberReducer);
  const [news, setNews] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(initialReaderState);

  useEffect(() => {
    if (user)
      fetch(
        `https://newsapi.org/v2/everything?q=Apple&page=${pageNumber}&pageSize=10&sortBy=popularity&apiKey=${process.env.NEXT_PUBLIC_NEWS_API}`
      )
        .then((res) => res.json())
        .then((res) => setNews((prev) => [...prev, ...res.articles]))
        .catch((err) => console.error(err));
  }, [pageNumber, user]);

  return (
    <section className={`mt-12 ${view} gap-8 lg:grid-cols-2`}>
      {user && news.map((article, id) => (
        <figure
          key={id}
          className="md:flex mb-12 bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 cursor-pointer"
          onClick={() => setSelectedArticle({ selected: true, article })}
        >
          <img
            className={`md:w-${view !== 'list' ? 32 : 64} md:h-${view !== 'list' ? 32 : 64} w-24 h-24 ${view !== 'list' && 'my-auto' } mx-auto md:rounded-xl`}
            src={article.urlToImage || "https://via.placeholder.com/400x250"}
            alt="news banner"
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <h2>{article.title}</h2>
              <p className="text-lg font-medium">{article.description}</p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                {article.author}
              </div>
            </figcaption>
          </div>
        </figure>
      ))}

      {selectedArticle.selected && <ArticleReader article={selectedArticle.article} onClose={() => setSelectedArticle(initialReaderState)} />}
    </section>
  );
};

export default NewsGrid;

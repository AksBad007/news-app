"use client";
import { useDispatch } from "react-redux";
import NewsGrid from "./components/NewsGrid";
import { loadMore } from "@/lib/NewsSlice";
import { UserAuth } from "@/lib/provider";

export default function Home() {
  const { user } = UserAuth();
  const dispatch = useDispatch();

  const loadMoreArticles = () => dispatch(loadMore());

  return (
    <main className="p-4">
      <div className="container mx-auto px-4 py-8">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our News App</h1>
          <p className="text-lg mb-8">
            Get the latest news from around the world.
          </p>
          {!user && <p>Sign in to see latest news.</p>}
        </section>

        <NewsGrid />

        <div className="flex justify-center">
          {user && (
            <button
              onClick={loadMoreArticles}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </main>
  );
}

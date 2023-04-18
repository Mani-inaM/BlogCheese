import ArticleCard from "@/components/blog/article-card";
import Advertisement from "@/components/common/advertisement";
import CategoriesStatistic from "@/components/common/categories-statistic";
import ContactBanner from "@/components/common/contact-banner";
import Hero from "@/components/common/hero";
import Layout from "@/components/common/layout";
import SearchTags from "@/components/common/search-tags";
import Heading from "@/components/ui/heading";
import { useEffect, useState } from "react";

export type Article = {
  content: string;
  id: number;
  author: any;
  postAuthorId: number;
  postDateTime: string;
  title: string;
};

export default function HomePage() {
  const [data, setData] = useState<Article[]>([]);

  useEffect(() => {
    async function fetchPopularArticles() {
      const response = await fetch("http://localhost:5200/Post/GetAllPosts");
      setData(await response.json());
    }
    fetchPopularArticles();
  }, []);

  return (
    <Layout>
      <Hero articles={data} />
      <section className={"container flex gap-20 py-20"}>
        <div className={"container flex gap-[100px]"}>
          <div className={"w-full max-w-[855px]"}>
            <Heading label="recently posted" />
            <div className={"mt-[55px] flex flex-col gap-12"}>
              {data.map((article) => (
                <ArticleCard
                  key={article.id}
                  author={article.author}
                  dateAdded={article.postDateTime}
                  excerpt={article.content}
                  minutesToRead={5}
                  title={article.title}
                />
              ))}
            </div>
          </div>
          <div className={"flex flex-col gap-7"}>
            <div className={"mb-[80px]"}>
              <Advertisement />
            </div>
            <div className={"mb-[80px]"}>
              <CategoriesStatistic />
            </div>
            <SearchTags />
          </div>
        </div>
      </section>
    </Layout>
  );
}

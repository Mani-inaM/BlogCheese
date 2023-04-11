import ArticleCard from "@/components/blog/article-card";
import PopularCard from "@/components/blog/popular-card";
import Heading from "@/components/ui/heading";
import { Article } from "@/pages";

interface Props {
  articles: Article[];
}

export default function Hero(props: Props) {
  const { articles } = props;
  return (
    <section className={"bg-primary/10 py-20"}>
      <div className={"container flex gap-[50px]"}>
        <div className={"w-full max-w-[885px]"}>
          <Heading label="Featured This Month" />
          <div className={"mt-[60px] flex flex-col gap-12"}>
            {articles.map((article) => (
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
          <Heading label="Popular posts" />
          {articles.map((article) => (
            <PopularCard
              key={article.id}
              title={article.title}
              author={article.author}
              readingTime={5}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

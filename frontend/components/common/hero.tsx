import ArticleCard from "@/components/blog/article-card";
import PopularCard from "@/components/blog/popular-card";
import Heading from "@/components/ui/heading";
import Advertisement from "@/components/common/advertisement";
import CategoriesStatistic from "@/components/common/categories-statistic";
import SearchTags from "@/components/common/search-tags";

export default function Hero() {
  return (
    <section className={"bg-primary/10 py-20"}>
      <div className={"container flex gap-[50px]"}>
        <div className={"w-full max-w-[885px]"}>
          <Heading label="Featured This Month" />
          <div className={"mt-[60px] flex flex-col gap-12"}>
            <ArticleCard
              category="Travel"
              title="I Created a Developer Rap Video - Here's What I Learned from it. Check it out"
              dateAdded="02 december 2022"
              minutesToRead={3}
              author="Jesica koli"
              excerpt="Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp"
            />
            <ArticleCard
              category="Travel"
              title="I Created a Developer Rap Video - Here's What I Learned from it. Check it out"
              dateAdded="02 december 2022"
              minutesToRead={3}
              author="Jesica koli"
              excerpt="Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp"
            />
          </div>
        </div>
        <div className={"flex flex-col gap-7"}>
          <Heading label="Popular posts" />
          <PopularCard
            category="Travel"
            readingTime={3}
            author="Jenny kiaa"
            title="set video playback speed with javascript version"
          />
          <PopularCard
            category="Travel"
            readingTime={3}
            author="Jenny kiaa"
            title="set video playback speed with javascript version"
          />
        </div>
      </div>
    </section>
  );
}

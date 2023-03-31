import ArticleCard from "@/components/blog/article-card";
import ContactBanner from "@/components/common/contact-banner";
import Hero from "@/components/common/hero";
import Heading from "@/components/ui/heading";
import Advertisement from "@/components/common/advertisement";
import CategoriesStatistic from "@/components/common/categories-statistic";
import SearchTags from "@/components/common/search-tags";
import PopularCard from "@/components/blog/popular-card";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className={"container flex gap-20 py-20"}>
        <div className={"container flex gap-[100px]"}>
        <div className={"w-full max-w-[855px]"}>
          <Heading label="recently posted" />
          <div className={"mt-[55px] flex flex-col gap-12"}>
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
            <ContactBanner />
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
            <div className={'mb-[80px]'}>
              <Advertisement/>
            </div>
            <div className={'mb-[80px]'}>
              <CategoriesStatistic/>
            </div>
            <SearchTags/>
          </div>
        </div>
      </section>
    </>
  );
}


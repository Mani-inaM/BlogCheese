import { MdOutlineDateRange } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";

interface ArticleCardProps {
  category: string;
  title: string;
  dateAdded: string;
  minutesToRead: number;
  author: string;
  excerpt: string;
}

export default function ArticleCard(args: ArticleCardProps) {
  const { author, excerpt, category, dateAdded, minutesToRead, title } = args;
  return (
    <article className={"max-w-[615px]"}>
      <div
        className={
          "bg-primary/20 rounded-[3px] mb-2 max-w-[50px] flex items-center justify-center h-[20px] text-xs text-[#666]"
        }
      >
        {category}
      </div>
      <h2 className={"font-semibold text-2xl"}>{title}</h2>
      <div className={"flex items-center text-xs mt-[20px] text-[#777] gap-3"}>
        <span>{author}</span>|
        <span className={"flex items-center gap-1"}>
          <MdOutlineDateRange />
          {dateAdded}
        </span>
        |
        <span className={"flex items-center gap-1"}>
          <BiTimeFive />
          {minutesToRead} Min. To Read
        </span>
      </div>
      <p className={"mt-4 text-[#555]"}>
        Did you come here for something in particular or just general
        Riker-bashing? And blowing into maximum warp
      </p>
    </article>
  );
}

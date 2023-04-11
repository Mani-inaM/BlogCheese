import { BiTimeFive } from "react-icons/bi";
import { MdOutlineDateRange } from "react-icons/md";

interface ArticleCardProps {
  title: string;
  dateAdded: string;
  minutesToRead: number;
  author: string;
  excerpt: string;
}

export default function ArticleCard(args: ArticleCardProps) {
  const { author, excerpt, dateAdded, minutesToRead, title } = args;
  return (
    <article className={"max-w-[615px]"}>
      <h2 className={"text-2xl font-semibold"}>{title}</h2>
      <div className={"mt-[20px] flex items-center gap-3 text-xs text-[#777]"}>
        <span>{author}</span>|
        <span className={"flex items-center gap-1"}>
          <MdOutlineDateRange />
          {new Date(dateAdded).toLocaleDateString()}
        </span>
        |
        <span className={"flex items-center gap-1"}>
          <BiTimeFive />
          {minutesToRead} Min. To Read
        </span>
      </div>
      <p className={"mt-4 text-[#555]"}>{excerpt}</p>
    </article>
  );
}

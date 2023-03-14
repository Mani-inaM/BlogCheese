import { BiTimeFive } from "react-icons/bi";

interface PopularCardProps {
  title: string;
  readingTime: number;
  author: string;
  category: string;
}

export default function PopularCard(args: PopularCardProps) {
  const { title, readingTime, author, category } = args;
  return (
    <article className={"bg-white p-6"}>
      <div
        className={
          "bg-primary/20 rounded-[3px] mb-3 max-w-[50px] flex items-center justify-center h-[20px] text-xs text-[#666]"
        }
      >
        {category}
      </div>
      <h2 className={"font-semibold text-lg capitalize"}>{title}</h2>
      <div className={"flex items-center text-xs mt-4 text-[#777] gap-3"}>
        <span className={"capitalize"}>{author}</span>|
        <span className={"flex items-center gap-1"}>
          <BiTimeFive />
          {readingTime} Min. To Read
        </span>
      </div>
    </article>
  );
}

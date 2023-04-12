import { BiTimeFive } from "react-icons/bi";

interface PopularCardProps {
  title: string;
  readingTime: number;
  author: string;
}

export default function PopularCard(args: PopularCardProps) {
  const { title, readingTime, author } = args;
  return (
    <article className={"bg-white p-6"}>
      <h2 className={"text-lg font-semibold capitalize"}>{title}</h2>
      <div className={"mt-4 flex items-center gap-3 text-xs text-[#777]"}>
        <span className={"capitalize"}>{author}</span>|
        <span className={"flex items-center gap-1"}>
          <BiTimeFive />
          {readingTime} Min. To Read
        </span>
      </div>
    </article>
  );
}

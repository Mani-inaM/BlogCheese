import Link from "next/link";
import { AiOutlineForm } from "react-icons/ai";
export default function ContactBanner() {
  return (
    <div className={"bg-primary/20 rounded-[10px] py-[55px] flex"}>
      <div className={"mx-auto"}>
        <h3 className={"text-[#222] text-2xl font-semibold"}>
          Share your knowledge with our readers
        </h3>
        <Link
          className={
            "flex transition hover:bg-primary/50 hover:shadow hover:border-0 hover:text-secondary mx-auto border border-primary rounded-[6px] text-lg justify-center max-w-[235px] h-[45px] items-center gap-2 mt-6 text-primary"
          }
          href={"/"}
        >
          <AiOutlineForm /> Contact us
        </Link>
      </div>
    </div>
  );
}

import Logo from "@/components/icons/logo";
import Link from "next/link";
export default function Header() {
  return (
    <nav className={"h-[80px] bg-primary/30 flex items-center text-secondary"}>
      <div className={"container flex items-center justify-between"}>
        <ul className={"flex gap-10 font-medium"}>
          <Link
            href={"/"}
            className={"hover:text-black transition hover:underline"}
          >
            Home
          </Link>
          <Link
            href={"/"}
            className={"hover:text-black transition hover:underline"}
          >
            About
          </Link>
          <Link
            href={"/"}
            className={"hover:text-black transition hover:underline"}
          >
            Categories
          </Link>
        </ul>
        <Logo />
      </div>
    </nav>
  );
}

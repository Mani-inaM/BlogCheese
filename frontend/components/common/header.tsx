import Logo from "@/components/icons/logo";
import Link from "next/link";
export default function Header() {
  return (
    <nav className={"flex h-[80px] items-center bg-primary/30 text-secondary"}>
      <div className={"container flex items-center justify-between"}>
        <ul className={"flex gap-10 font-medium"}>
          <Link
            href={"/"}
            className={"transition hover:text-black hover:underline"}
          >
            Home
          </Link>
          <Link
            href={"/"}
            className={"transition hover:text-black hover:underline"}
          >
            About
          </Link>
          <Link
            href={"/categories"}
            className={"transition hover:text-black hover:underline"}
          >
            Categories
          </Link>
          <Link
            href={"/faq"}
            className={"transition hover:text-black hover:underline"}
          >
            FAQ
          </Link>
        </ul>
        <Logo />
      </div>
    </nav>
  );
}

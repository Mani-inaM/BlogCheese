import Logo from "@/components/icons/logo";
import { useLocalStorage } from "@mantine/hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function Header() {
  const [value, setValue] = useLocalStorage({
    key: "loggedUser",
  });

  const [loggedUser, setLoggedUser] = useState({
    username: "",
  });

  useEffect(() => {
    if (!value) return;
    const user = JSON.parse(value);
    setLoggedUser(user);
  }, [value]);

  const router = useRouter();

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
        <div className="flex items-center gap-4">
          {loggedUser.username ? (
            <div className="flex gap-2">
              <span>{loggedUser.username}</span>
              <button
                onClick={() => {
                  setValue(
                    JSON.stringify({
                      username: "",
                    })
                  );
                  router.push("/");
                }}
              >
                Log out
              </button>
            </div>
          ) : (
            <Link href={"/login"}>Login</Link>
          )}
          <Logo />
        </div>
      </div>
    </nav>
  );
}

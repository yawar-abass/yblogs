import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  const headerClass =
    "flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10";

  return (
    <header className={headerClass}>
      <Link href="/">
        <div className="flex items-center justify-between">
          <div className="mr-3">Yblogs</div>
        </div>
      </Link>

      <Link href="/admin" className="">
        <Button className="cursor-pointer">Admin</Button>
      </Link>
    </header>
  );
};

export default Header;

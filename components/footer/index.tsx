// import { AppThemeSwitcher } from "@/components/theme";

import Link from "next/link";

import { Button } from "../ui/button";

const Footer = () => {
  return (
    <div className="flex w-full items-center justify-between pt-2">
      <Button size={"icon"} className="hover:bg-gray-3" asChild>
        <Link href="">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="none" className="text-muted dark:text-muted ">
            <path
              d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </Button>
      <div className="text-muted text-small">{/* <AppThemeSwitcher /> */}</div>
    </div>
  );
};

export { Footer };

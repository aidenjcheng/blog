import { Breadcrumb } from "@/components/breadcrumb";
import { Button } from "@/components/ui/button";

import { SquarePen } from "lucide-react";
import { Link } from "next-view-transitions";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <div className="flex items-center justify-between">
        <Breadcrumb />
        <Link href="/write">
          <Button variant="ghost" size="icon">
            <SquarePen className="h-4 w-4" />
          </Button>
        </Link>
      </div>
      {children}
    </React.Fragment>
  );
}

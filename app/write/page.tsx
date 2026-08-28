import { Breadcrumb } from "@/components/breadcrumb";
import { ImageUpload } from "@/components/image-upload";

import { Input } from "@base-ui/react/input";
import * as React from "react";

export default function Write() {
  return (
    <React.Fragment>
      <Breadcrumb />
      <div className="h-full">
        <div className="mt-10 flex h-full flex-col">
          <div className="mt-1 mb-2 flex gap-2 text-muted ">
            <ImageUpload />
          </div>
          <div className="h-full">
            <Input type="text" placeholder="Title" className="w-full bg-white-a1 font-medium text-[14px] outline-none" />{" "}
          </div>
        </div>

        <textarea placeholder="Content" className="h-screen w-full resize-none bg-white-a1 text-[14px] outline-none" />
      </div>
    </React.Fragment>
  );
}

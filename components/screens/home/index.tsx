import { Footer } from "@/components/footer";
import Logo, { TrajectionIcon, VocaboIcon } from "@/components/logo/logo";
import { Posts } from "@/components/posts";
import { PreviewLink } from "@/components/previewlink/preview-link";

import * as React from "react";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export default function Home() {
  return (
    <>
      <div className="flex justify-between">
        <div className="text-lg">
          <Logo className="w-12 h-12" />
          <h1>
            <strong>Aiden Cheng</strong> is a software engineer
          </h1>
          <p className="text-muted mt-5">
            I'm Aiden Cheng, a high school student in{" "}
            <PreviewLink component={<img src="./assets/imgs/md.png" />}>
              Maryland
            </PreviewLink>
            . For over 3 years, I've developed a passion for blending aesthetic
            design with functionality. As a UI/UX designer and engineer, I've
            honed my skills in creating interfaces that are not only visually
            appealing but also user-friendly.
          </p>
          <p className="text-muted">
            I spent my formative years founding various projects, including{" "}
            <PreviewLink
              href="https://trajection.vercel.app"
              component={<img src="./assets/imgs/trajection.png" />}
              icon={
                <TrajectionIcon className="w-7 border rounded-md p-1.5 h-7 dark:border-border bg-white-a1 dark:text-foreground" />
              }
            >
              Trajection
            </PreviewLink>{" "}
            — a college essay consultant that grades your essays and provides
            feedback.
          </p>
          <p className="text-muted">
            I'm also working on{" "}
            <a className="inline-flex items-center gap-1 text-foreground">
              Vocabo
              <VocaboIcon className="w-7 border rounded-md p-1.5 h-7 dark:border-border bg-white-a1" />
            </a>
            —a learning platform for students to expand their vocabulary, which
            I plan to release this summer.
          </p>
          <p className="text-muted">
            I'm also in the works of creating{" "}
            <a className="text-foreground">Codelings </a>
            —a non-profit organization that teaches middle school students web
            development with real world applications.
          </p>
        </div>
      </div>
      <Spacer />
      <Posts category="guides" />
      <Posts category="thoughts" />
      <Spacer />
      <Footer />
    </>
  );
}

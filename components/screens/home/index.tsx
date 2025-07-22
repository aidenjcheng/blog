import { Category } from "@/components/category";
import { Footer } from "@/components/footer";
import { TrajectionIcon, VocaboIcon } from "@/components/logo/logo";
import { Posts } from "@/components/posts";
import { PreviewLink } from "@/components/previewlink/preview-link";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export default function Home() {
  return (
    <>
      <div className="flex justify-between">
        <div className=" text-base">
          {/* <Logo className="w-12 h-12" /> */}
          <h1 className="text-base">Aiden Cheng</h1>
          <p className="text-base text-gray-8">Last updated July 20th, 2025</p>

          <p className=" mt-5">
            i'm aiden cheng, a high school student in{" "}
            <PreviewLink
              component={<img src="./assets/imgs/md.png" alt="maryland map" />}
            >
              maryland
            </PreviewLink>
            . for over 3 years, i've developed a passion for blending aesthetic
            design with functionality. as a ui/ux designer and engineer, i've
            honed my skills in creating interfaces that are not only visually
            appealing but also user-friendly.
          </p>
          <p className="">
            i spent my formative years founding various projects, including{" "}
            <PreviewLink
              href="https://trajection.vercel.app"
              component={
                <img src="./assets/imgs/trajection.png" alt="trajection logo" />
              }
              icon={
                <TrajectionIcon className="h-7 w-7 rounded-md border bg-white-a1 p-1.5 dark:border-border dark:text-foreground" />
              }
            >
              trajection
            </PreviewLink>{" "}
            — a college essay consultant that grades your essays and provides
            feedback.
          </p>
          <p className="">
            i'm also working on{" "}
            <span className="inline-flex items-center gap-1 text-foreground">
              vocabo
              <VocaboIcon className="h-7 w-7 rounded-md border bg-white-a1 p-1.5 dark:border-border" />
            </span>
            —a learning platform for students to expand their vocabulary, which
            i plan to release this summer.
          </p>
          <p className="">
            i'm also in the works of creating{" "}
            <span className="text-foreground">codelings </span>
            —a non-profit organization that teaches middle school students web
            development with real world applications.
          </p>
        </div>
      </div>
      <Spacer />
      <Posts category="wall" />
      <Category category="projects" />
      <Category category="thoughts" />

      {/* <Spacer /> */}
      <Footer />
    </>
  );
}

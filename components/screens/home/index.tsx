import { Category } from "@/components/category";
import { Footer } from "@/components/footer";
import { ProjectThumbnail } from "@/components/project-thumbnail";
import { formatter } from "@/lib/formatter";
import { getPosts } from "@/lib/mdx";

const Spacer = () => <div style={{ marginTop: "24px" }} />;
const contentRoutes = ["examples", "projects", "thoughts", "wall"];

export default function Home() {
  const lastUpdated = contentRoutes
    .flatMap((route) => getPosts(route))
    .reduce<Date | null>((latest, post) => {
      const updated = new Date(post.time.updated);

      return latest === null || updated > latest ? updated : latest;
    }, null);

  return (
    <div className="flex w-full flex-1 flex-col gap-20">
      <div className="flex justify-between">
        <div className=" text-base">
          {/* <Logo className="w-12 h-12" /> */}
          <h1 className="text-base">Aiden Cheng</h1>
          <p className="text-base text-muted">
            Last updated {lastUpdated ? formatter.date(lastUpdated) : "—"}
          </p>

          <p className=" mt-5">I'm a high school student on the east coast. I like to code and design software</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col">

        <Spacer />
        {/* <Posts category="wall" /> */}
        {/*<Category category="projects" />
        <Category category="thoughts" />*/}
        <ProjectThumbnail category="projects" />

         <Spacer />
        <Footer />
      </div>
    </div>
  );
}

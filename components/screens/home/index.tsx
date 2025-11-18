import { Category } from "@/components/category";
import { Footer } from "@/components/footer";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-20">
      <div className="flex justify-between">
        <div className=" text-base">
          {/* <Logo className="w-12 h-12" /> */}
          <h1 className="text-base">Aiden Cheng</h1>
          <p className="text-base text-muted">Last updated July 20th, 2025</p>

          <p className=" mt-5">Hi, I'm a high school student on the east coast. I like to code and design things</p>
        </div>
      </div>
      <div>
        <Spacer />
        {/* <Posts category="wall" /> */}
        <Category category="projects" />
        <Category category="thoughts" />

        {/* <Spacer /> */}
        <Footer />
      </div>
    </div>
  );
}

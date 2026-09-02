import { earlyFollowers } from "@/app/(posts)/wall/data";

export function WallOfNames() {
  return (
    <div className="flex w-full flex-col gap-1">
      {[...earlyFollowers].reverse().map((name, index) => (
        <a key={name} href={`https://instagram.com/${name}`} target="_blank" className="border-border border-b py-3" rel="noreferrer">
          {name} {index === 0 && "❤️"}
        </a>
      ))}
    </div>
  );
}

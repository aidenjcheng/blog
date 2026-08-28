import type { Post } from "@/types/post";

import { readFileSync, readdirSync } from "node:fs";
import { basename, extname, join } from "node:path";

import matter from "gray-matter";

function readFile(filePath: string): Post | null {
  try {
    const rawContent = readFileSync(filePath, "utf-8");
    const { data, content } = matter(rawContent);

    const slug = basename(filePath, extname(filePath));

    return {
      ...data,
      slug,
      content,
    } as Post;
  } catch (error) {
    console.error(`Failed to read or parse the file at ${filePath}:`, error);
    return null;
  }
}

function getFiles(dir: string): string[] {
  try {
    return readdirSync(dir).filter((file) => extname(file) === ".mdx");
  } catch (error) {
    console.error(`Failed to read directory at ${dir}:`, error);
    return [];
  }
}

export function getPosts(directory: string): Post[] {
  const postsDirectory = join(process.cwd(), "app", "(posts)", directory, "posts");

  return getFiles(postsDirectory)
    .map((file) => readFile(join(postsDirectory, file)))
    .filter((post): post is Post => post !== null);
}

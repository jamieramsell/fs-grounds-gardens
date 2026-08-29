import fs from "node:fs";
import matter from "gray-matter";
import path from "node:path";
import { z } from "zod";

/**
 * Reads a content collection from `content/<folder>`, validating every `.md`
 * file's front matter against the given schema.
 * @param folder - the collection's folder name under `content/` (e.g. "gallery")
 * @param schema - the zod schema that each file's front matter must satisfy
 * @returns an array of validated items, typed to the schema
 * @remarks Server/build-time only — it reads the file system.
 */
export default function loadCollection<T>(
  folder: string,
  schema: z.ZodType<T>,
): T[] {
  // Construct @/content/{folder}/ path using project root
  const root = process.cwd();
  const folderPath = path.join(root, "content", folder);

  // A collection folder may be absent (git doesn't track empty folders),
  // so treat a missing folder as an empty collection rather than crashing.
  if (!fs.existsSync(folderPath)) {
    return [];
  }

  // Retrieve all .md files
  let files = fs.readdirSync(folderPath);
  files = files.filter((filename) => filename.endsWith(".md"));

  // Map each file onto its schema
  const collectionItems = files.map((filename) => {
    const filePath = path.join(folderPath, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    // Zod ignores keys it doesn't recognise, so this works for collections with and without a declared body attribute
    return schema.parse({ ...data, body: content });
  });

  return collectionItems;
}

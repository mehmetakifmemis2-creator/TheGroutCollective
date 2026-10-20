import fs from "node:fs/promises";
import path from "node:path";
import * as prettier from "prettier";

// Dosyaları doğrudan okuyarak OneDrive içindeki dosyaları da biçimlendirir.
const root = process.cwd();
const checkOnly = process.argv.includes("--check");
const extensions = /\.(?:tsx?|[cm]?js|json|css|ya?ml|md)$/;
const sourceDirectories = new Set(["src", "scripts", ".github"]);
const skippedFiles = new Set(["package-lock.json", "next-env.d.ts"]);
const config = await prettier.resolveConfig(path.join(root, "package.json"));

async function collectFiles(directory = root) {
  const result = [];

  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    const stat = await fs.stat(file);

    if (stat.isDirectory()) {
      if (directory !== root || sourceDirectories.has(entry.name)) {
        result.push(...(await collectFiles(file)));
      }
    } else if (extensions.test(entry.name) && !skippedFiles.has(entry.name)) {
      result.push(file);
    }
  }

  return result;
}

const unformatted = [];
const files = await collectFiles();

for (const file of files) {
  const source = await fs.readFile(file, "utf8");
  const formatted = await prettier.format(source, { ...config, filepath: file });

  if (source !== formatted) {
    unformatted.push(path.relative(root, file));
    if (!checkOnly) await fs.writeFile(file, formatted);
  }
}

if (checkOnly && unformatted.length) {
  console.error("Biçimlendirme gereken dosyalar:\n" + unformatted.join("\n"));
  process.exitCode = 1;
} else {
  console.log(
    `${files.length} dosya ${checkOnly ? "kontrol edildi" : "biçimlendirildi"}.`,
  );
}

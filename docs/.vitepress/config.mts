import { defineConfig } from "vitepress";
import mathjax3 from "markdown-it-mathjax3";
import { readdirSync, readFileSync } from "node:fs";
import { basename, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const docsRoot = dirname(fileURLToPath(import.meta.url));

function noteItems(directory: string) {
  const folder = join(docsRoot, "..", directory);
  return readdirSync(folder)
    .filter((file) => file.endsWith(".md"))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => {
      const source = readFileSync(join(folder, file), "utf8");
      const heading = source.match(/^#\s+(.+)$/m)?.[1]?.trim();
      const slug = basename(file, ".md");
      return {
        text: heading ?? slug,
        link: `/${directory}/${slug}`,
      };
    });
}

export default defineConfig({
  title: "QIST Notes",
  description:
    "Foundational notes on quantum mechanics, quantum computing, and quantum information science and technology.",
  base: "/qist-notes/",
  cleanUrls: true,
  markdown: { config: (md) => md.use(mathjax3) },
  themeConfig: {
    siteTitle: "QIST Notes",
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Quantum Mechanics",
        link: "/quantum-mechanics-notes/02-the-birth-of-quantum-mechanics",
      },
      {
        text: "Quantum Computing",
        link: "/quantum-computing-and-information-notes/01-why-quantum-computing",
      },
    ],
    sidebar: {
      "/quantum-mechanics-notes/": [
        {
          text: "Quantum Mechanics",
          items: noteItems("quantum-mechanics-notes"),
        },
      ],
      "/quantum-computing-and-information-notes/": [
        {
          text: "Quantum Computing & Information",
          items: noteItems("quantum-computing-and-information-notes"),
        },
      ],
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/aadityarshah",
      },
    ],
    search: { provider: "local" },
    outline: "deep",
    footer: {
      message: "Notes authored and maintained by Aaditya Shah.",
      copyright: "Copyright © Aaditya Shah",
    },
  },
});

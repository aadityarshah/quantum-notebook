import { cp, mkdir, rm } from "node:fs/promises";

const mappings = [
  ["quantum-mechanics-notes", "docs/quantum-mechanics-notes"],
  [
    "quantum-computing-and-information-notes",
    "docs/quantum-computing-and-information-notes",
  ],
  ["assets", "docs/assets"],
];

for (const [source, destination] of mappings) {
  await rm(destination, { recursive: true, force: true });
  await mkdir(destination, { recursive: true });
  await cp(source, destination, { recursive: true });
}

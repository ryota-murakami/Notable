import type { Note } from "@/types/note"

export const defaultNotes: Note[] = [
  {
    id: "1",
    title: "Web dev Wiki Sub",
    content: "<h1>Web dev Wiki Sub</h1><p>Welcome to your development wiki!</p>",
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
    parentId: null,
    tags: ["wiki", "development"],
  },
  {
    id: "2",
    title: "Learning",
    content: "<h2>Learning Resources</h2><p>Collect your learning resources here.</p>",
    createdAt: "2023-01-02T00:00:00.000Z",
    updatedAt: "2023-01-02T00:00:00.000Z",
    parentId: "1",
    tags: ["learning", "resources"],
  },
  {
    id: "3",
    title: "Appwrite",
    content:
      "<h2>Appwrite</h2><p>Appwrite is an open-source platform for building applications at any scale, using your preferred programming languages and tools.</p><p><a href='https://appwrite.io/docs'>https://appwrite.io/docs</a></p>",
    createdAt: "2023-01-03T00:00:00.000Z",
    updatedAt: "2023-01-03T00:00:00.000Z",
    parentId: "1",
    tags: ["appwrite", "backend"],
  },
  {
    id: "4",
    title: "Payload",
    content:
      "<h2>Payload CMS</h2><p>Payload CMS | Node & React TypeScript Headless CMS</p><p>Payload is an open-source, headless CMS and application framework built with TypeScript, Node.js, and React.</p><p><a href='https://payloadcms.com/'>https://payloadcms.com/</a></p>",
    createdAt: "2023-01-04T00:00:00.000Z",
    updatedAt: "2023-01-04T00:00:00.000Z",
    parentId: "1",
    tags: ["payload", "cms"],
  },
]

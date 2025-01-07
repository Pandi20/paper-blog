import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "blogs",
        label: "Blogs",
        path: "src/content/blog",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
            searchable: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author"
          },
          {
            type: "datetime",
            name: "pubDatetime",
            label: "Publication Date",
            ui: {
              "dateFormat": "YYYY-MM-DD",
              "timeFormat": "HH:mm:ss"
            }
          },
          {
            type: "string",
            name: "slug",
            label: "slug"
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured"
          },
          {
            type: "string",
            list: true,
            name: "tags",
            label: "Tags"
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              "component": "textarea"
            }
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "Author",
        label: "Author",
        path: "src/pages",
        fields:[
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ]
      },
    ],
  },
});
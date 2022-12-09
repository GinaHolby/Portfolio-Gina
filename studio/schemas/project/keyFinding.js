export default {
  name: "keyFinding",
  title: "Key finding",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Key Finding",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};

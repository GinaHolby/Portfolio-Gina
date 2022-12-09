export default {
    name: "reflection",
    title: "Reflection",
    type: "object",
    fields: [
      {
        name: "title",
        title: "Reflection",
        type: "string",
      },
      {
        name: "description",
        title: "Description",
        type: "array",
        of: [{ type: "block" }],
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
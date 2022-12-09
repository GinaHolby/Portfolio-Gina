export default {
    name: "solution",
    title: "Solution",
    type: "object",
    fields: [
      {
        name: "title",
        title: "Solution",
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
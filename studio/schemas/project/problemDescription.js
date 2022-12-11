export default {
  name: "problemmDescription",
  title: "problem Descriptions",
  type: "object",
  fields: [
    {
      name: "tmp",
      title: "beskrivelse",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      tmp: "tmp",
    },
    prepare({ tmp }) {
      const display = tmp?.[0]?.children?.[0]?.text
      return { title: display };
    },
  },
};

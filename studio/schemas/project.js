export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "projectTitle",
      title: "Project Title",
      type: "string",
    },
    {
      name: "shortProjectDescription",
      title: "Short Project Description",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "projectTitle",
        maxLength: 96,
      },
    },
    {
      name: "hero_image",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    //* PROBLEMS
    {
      name: "problemTitle",
      title: "Problem Title",
      type: "string",
    },
    {
      name: "problemDescription",
      title: "Description of the Problem",
      type: "array",
      of: [
        {
          title: "HiHi",
          name: "hehe",
          type: "object",
          fields: [{ name: "tmp", title: "tittel", type: "blockContent" }],
        },
      ],
    },
    /* {
      name: "problemDescriptionn",
      title: "Description of the Problem",
      type: "blockContent",
    }, */
    //* Key Findings
    {
      name: "keyFindings",
      title: "Key Findings",
      type: "array",
      of: [{ type: "keyFinding" }],
    },
    /* //* SOLUTIONS
      {
        name: "solutionTitle",
        title: "Solutions Title",
        type: "string",
      },
      {
        name: "solutionDescription",
        title: "Description of the Solution",
        type: "blockContent",
      },
      {
        name: "solutions",
        title: "Solutions",
        type: "array",
        of: [{ type: "solution" }],
      },
      //*TODO legge inn en link til figam fil og prototype
      //*TODO Design process Dubble Dimond
      //TODO Results
      //* REFLECTIONS
      {
        name: "reflectionTitle",
        title: "Reflection Title",
        type: "string",
      }, */
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};

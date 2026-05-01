const Testimonial = {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      title: "Text",
      name: "text",
      type: "string",
      validation: (rule: { required: () => any; }) => rule.required(),
    },
    {
      title: "Author",
      name: "author",
      type: "string",
    },
  ],
}

export default Testimonial;
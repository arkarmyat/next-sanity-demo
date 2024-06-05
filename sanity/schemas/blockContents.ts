// RichTextEditor.js
import { UserIcon } from "@sanity/icons";

const blocks = {
  name: "blockContent",
  title: "Content",
  type: "array",
  of: [
    {
      type: "block",
      marks: {
        annotations: [
          {
            name: "link",
            type: "object",
            title: "link",
            fields: [
              {
                name: "url",
                type: "url",
              },
            ],
          },
          {
            name: "internalLink",
            type: "object",
            title: "Internal link",
            icon: UserIcon,
            /* fields: [
              {
                name: "reference",
                type: "reference",
                to: [
                  { type: "person" },
                  // other types you may want to link to
                ],
              },
            ], */
          },
        ],
      },
    },
  ],
};

export default blocks;

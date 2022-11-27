import React from "react";
import get from "lodash/get";
import { Typography } from "@strapi/design-system/Typography";
import RepeatableCell from "./RepeatableCell";

const addColumnToTableHook = ({ displayedHeaders, layout }) => {
  // Skip if the content type does not have a component in its schema
  if (Object.keys(layout.components) === 0) {
    return {
      displayedHeaders,
      layout,
    };
  }

  // Retrieve all components field
  const componentsAttributes = Object.entries(
    layout.contentType.attributes
  ).filter((entry) => {
    const [, { type }] = entry;

    return type === "component";
  });

  // Create the components list layout
  const componentsToDisplay = componentsAttributes.map((attribute) => {
    const [attributeName, { type, component, repeatable }] = attribute;

    // Retrieve the mainField of the component. The one that is used in the edit view to know which field we want to display
    const mainFieldName = get(
      layout,
      ["components", component, "settings", "mainField"],
      ""
    );
    // Retrieve the mainField schema in order to apply custom rendering in case it's a date, number....
    const mainFieldSchema = get(
      layout,
      ["components", component, "attributes", mainFieldName],
      {}
    );

    const metadatas = {
      ...get(layout, ["contentType", "metadatas", attributeName, "list"]),
      mainField: { name: mainFieldName, schema: mainFieldSchema },
    };

    const schema = {
      key: `__${attributeName}_key__`,
      name: attributeName,
      fieldSchema: { type, component, repeatable },
      metadatas,
      cellFormatter: (data) => {
        if (repeatable) {
          return (
            <RepeatableCell data={data[attributeName]} metadatas={metadatas} />
          );
        }

        return (
          <Typography
            style={{ maxWidth: "252px", cursor: "pointer" }}
            textColor="neutral800"
            ellipsis
          >
            {data[attributeName]?.[mainFieldName] || "-"}
          </Typography>
        );
      },
    };

    return schema;
  });

  return {
    displayedHeaders: [...displayedHeaders, ...componentsToDisplay],
    layout,
  };
};

export default addColumnToTableHook;

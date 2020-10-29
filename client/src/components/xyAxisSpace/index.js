import React from "react";
import { Box } from "@material-ui/core";

export default ({ isXAxis = true }) => {
  const space = isXAxis ? { width: 15 } : { height: 15 };

  return (
    <Box component="div" style={space}>
      {" "}
    </Box>
  );
};

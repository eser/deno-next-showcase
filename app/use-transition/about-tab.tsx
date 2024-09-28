import React from "react";
import { Text } from "@radix-ui/themes";

export function AboutTab() {
  return (
    <>
      <Text as="div" mb="4">
        This tab demonstrates a simple content.
      </Text>
      <span className="loading-infinity"></span>
    </>
  );
}

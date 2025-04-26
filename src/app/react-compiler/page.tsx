"use client";

import React, { useState } from "react";
import { Box, Button, Flex, Grid, Heading, Text } from "@radix-ui/themes";

function CalculateComplex() {
  const data = Date.now();

  return <Text as="div" suppressHydrationWarning={true}>{data}</Text>;
}

function CalculateComplexNoMemo() {
  "use no memo";
  const data = Date.now();

  return <Text as="div" suppressHydrationWarning={true}>{data}</Text>;
}

export default function Page() {
  const [leftSide, setLeftSide] = useState(1);
  const [rightSide, setRightSide] = useState(1);

  return (
    <Flex flexGrow="1" align="center" justify="center" asChild>
      <main>
        <Box className="~max-w-xs/4xl p-4">
          <Flex direction="column" gap="4">
            <Heading as="h1" className="~text-lg/4xl">
              Deno 2, Next 15 and React 19 Showcase
            </Heading>
            <Heading as="h2" mb="6" className="~text-base/2xl">
              React Compiler Demo
            </Heading>

            <Grid columns="2" rows="1fr 40px" gap="4">
              <Flex direction="column" align="center" justify="end">
                {new Array(leftSide).fill(null).map((_, index) => <CalculateComplex key={index} />)}
              </Flex>
              <Flex direction="column" align="center" justify="end">
                {new Array(rightSide).fill(null).map((_, index) => <CalculateComplexNoMemo key={index} />)}
              </Flex>
              <Flex align="center" justify="center">
                <Button onClick={() => setLeftSide((n: number) => n + 1)} size="3" variant="soft">
                  Add memoed
                </Button>
              </Flex>
              <Flex align="center" justify="center">
                <Button onClick={() => setRightSide((n: number) => n + 1)} size="3" variant="soft">
                  Add non-memoed
                </Button>
              </Flex>
            </Grid>
          </Flex>
        </Box>
      </main>
    </Flex>
  );
}

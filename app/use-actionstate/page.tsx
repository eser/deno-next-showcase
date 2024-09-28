"use client";

import React, { useActionState } from "react";
import { Box, Button, Flex, Heading, Kbd, Spinner, Text, TextField } from "@radix-ui/themes";
import { sendMessageAction } from "./action.ts";

function formatDate(date: Date): string {
  const formatted = date.toISOString();

  return formatted.substring(11, formatted.length - 1);
}

export default function Page() {
  const [state, action, isPending] = useActionState(sendMessageAction, []);

  return (
    <Flex flexGrow="1" align="center" justify="center" asChild>
      <main>
        <Box className="~max-w-xs/4xl p-4">
          <Flex direction="column" gap="4">
            <Heading as="h1" className="~text-lg/4xl">
              Deno 2, Next 15 and React 19 Showcase
            </Heading>
            <Heading as="h2" mb="6" className="~text-base/2xl">
              useActionState() Demo
            </Heading>

            <Flex direction="column" gap="2" asChild>
              <form action={action}>
                <div>
                  {state.map((entry: [Date, string], _index: number) => (
                    <Text as="div">
                      {/* time */}
                      <Kbd>{formatDate(entry[0])}</Kbd>
                      {/* message */}
                      <Text ml="2">{entry[1]}</Text>
                    </Text>
                  ))}
                </div>

                <TextField.Root type="text" name="message" placeholder="Message" required={true} size="3" />

                <Button type="submit" disabled={isPending} variant="soft" size="3">
                  {isPending && <Spinner />}
                  Send
                </Button>
              </form>
            </Flex>
          </Flex>
        </Box>
      </main>
    </Flex>
  );
}

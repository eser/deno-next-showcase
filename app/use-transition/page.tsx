"use client";

import React, { useState, useTransition } from "react";
import { Box, Flex, Heading, Spinner, TabNav } from "@radix-ui/themes";
import { AboutTab } from "./about-tab.tsx";
import { PostsTab } from "./posts-tab.tsx";

export default function Page() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState("about");

  function selectTabBlocking(nextTab: string) {
    setTab(nextTab);
  }

  function selectTabNonblocking(nextTab: string) {
    startTransition(() => {
      setTab(nextTab);
    });
  }

  return (
    <Flex flexGrow="1" align="center" justify="center" asChild>
      <main>
        <Box className="~max-w-xs/4xl p-4">
          <Flex direction="column" gap="4">
            <Heading as="h1" className="~text-lg/4xl">
              Deno 2, Next 15 and React 19 Showcase
            </Heading>
            <Heading as="h2" mb="6" className="~text-base/2xl">
              useTransition() Demo
            </Heading>

            <TabNav.Root>
              <TabNav.Link active={tab === "about"} onClick={() => selectTabBlocking("about")}>
                About
              </TabNav.Link>
              <TabNav.Link active={tab === "posts1"} onClick={() => selectTabBlocking("posts1")}>
                Posts (blocking)
              </TabNav.Link>
              <TabNav.Link active={tab === "posts2"} onClick={() => selectTabNonblocking("posts2")}>
                Posts (non-blocking)
                {isPending && <Spinner ml="2" size="1" />}
              </TabNav.Link>
            </TabNav.Root>

            {tab === "about" && <AboutTab />}
            {tab === "posts1" && <PostsTab prefix="Blocking posts" />}
            {tab === "posts2" && <PostsTab prefix="Non-blocking posts" />}
          </Flex>
        </Box>
      </main>
    </Flex>
  );
}

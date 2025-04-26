import React, { Suspense } from "react";
import { Box, Flex, Heading, Skeleton } from "@radix-ui/themes";
import { ItemCount } from "./items.tsx";

export default function Page() {
  return (
    <Flex flexGrow="1" align="center" justify="center" asChild>
      <main>
        <Box className="~max-w-xs/4xl p-4">
          <Flex direction="column" gap="4">
            <Heading as="h1" className="~text-lg/4xl">
              Deno 2, Next 15 and React 19 Showcase
            </Heading>
            <Heading as="h2" mb="6" className="~text-base/2xl">
              use() Demo
            </Heading>

            <ul className="font-mono ~text-base/xl">
              <li>
                <Suspense fallback={<Skeleton>loading posts...</Skeleton>}>
                  <ItemCount kind="posts" delay={4500} />
                </Suspense>
              </li>
              <li>
                <Suspense fallback={<Skeleton>loading comments...</Skeleton>}>
                  <ItemCount kind="comments" delay={3000} />
                </Suspense>
              </li>
              <li>
                <Suspense fallback={<Skeleton>loading albums...</Skeleton>}>
                  <ItemCount kind="albums" delay={1500} />
                </Suspense>
              </li>
              <li>
                <Suspense fallback={<Skeleton>loading photos...</Skeleton>}>
                  <ItemCount kind="photos" delay={2500} />
                </Suspense>
              </li>
              <li>
                <Suspense fallback={<Skeleton>loading todos...</Skeleton>}>
                  <ItemCount kind="todos" delay={1250} />
                </Suspense>
              </li>
              <li>
                <Suspense fallback={<Skeleton>loading users...</Skeleton>}>
                  <ItemCount kind="users" delay={1750} />
                </Suspense>
              </li>
            </ul>
          </Flex>
        </Box>
      </main>
    </Flex>
  );
}

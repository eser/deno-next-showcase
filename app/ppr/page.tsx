import { Badge, Box, DataList, Flex, Heading, Skeleton } from "@radix-ui/themes";
import { Suspense } from "react";

// Original code:
// https://github.com/leerob/next-self-host/blob/main/app/streaming/page.tsx

// Soon, Next.js will automatically see this is dynamic
// from the Promise, so we won't need to config!
export const dynamic = "force-dynamic";

async function fetchData(id: number) {
  await new Promise((resolve) => setTimeout(resolve, id * 1000));
  return (
    <div>
      Data loaded after <Badge>{id} second{id > 1 ? "s" : ""}</Badge>
    </div>
  );
}

async function AsyncDataComponent({ id }: { id: number }) {
  const data = await fetchData(id);
  return (
    <DataList.Item align="center">
      <DataList.Label minWidth="88px">Content {id}</DataList.Label>
      <DataList.Value>{data}</DataList.Value>
    </DataList.Item>
  );
}

function LoadingCard({ id }: { id: number }) {
  return (
    <DataList.Item align="center">
      <DataList.Label minWidth="88px">Content {id}</DataList.Label>
      <DataList.Value>
        <Skeleton width="204px">Loading</Skeleton>
      </DataList.Value>
    </DataList.Item>
  );
}

export default function Streaming() {
  return (
    <Flex flexGrow="1" align="center" justify="center" asChild>
      <main>
        <Box className="~max-w-xs/4xl p-4">
          <Flex direction="column" gap="4">
            <Heading as="h1" className="~text-lg/4xl">
              Deno 2, Next 15 and React 19 Showcase
            </Heading>
            <Heading as="h2" mb="6" className="~text-base/2xl">
              Partial Prerendering Demo
            </Heading>

            <DataList.Root>
              <Suspense fallback={<LoadingCard id={1} />}>
                <AsyncDataComponent id={1} />
                <Suspense fallback={<LoadingCard id={2} />}>
                  <AsyncDataComponent id={2} />
                  <Suspense fallback={<LoadingCard id={3} />}>
                    <AsyncDataComponent id={3} />
                    <Suspense fallback={<LoadingCard id={4} />}>
                      <AsyncDataComponent id={4} />
                      <Suspense fallback={<LoadingCard id={5} />}>
                        <AsyncDataComponent id={5} />
                      </Suspense>
                    </Suspense>
                  </Suspense>
                </Suspense>
              </Suspense>
            </DataList.Root>
          </Flex>
        </Box>
      </main>
    </Flex>
  );
}

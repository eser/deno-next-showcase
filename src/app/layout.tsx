import React from "react";
import type { Metadata } from "next";
import { Bree_Serif, Roboto, Roboto_Mono } from "next/font/google";

import { Box, Flex, Theme, ThemePanel } from "@radix-ui/themes";
import "./globals.css";

import { Footer } from "./footer.tsx";

const fontBreeSerif = Bree_Serif({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-bree-serif",
  display: "swap",
  preload: true,
});

const fontRoboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  preload: true,
});

const fontRobotoMono = Roboto_Mono({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Deno 2, Next 15 and React 19 Showcase by eser.live",
  description: "Playground app for Deno 2, Next.js 15 and React 19 features",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout(props: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" className={`${fontBreeSerif.variable} ${fontRoboto.variable} ${fontRobotoMono.variable}`}>
      <body>
        <Theme accentColor="orange" grayColor="slate" radius="medium" scaling="110%" asChild>
          <Flex direction="column">
            <Box asChild>
              {props.children}
            </Box>
            <Box asChild>
              <Footer />
            </Box>
            <ThemePanel defaultOpen={false} />
          </Flex>
        </Theme>
      </body>
    </html>
  );
}

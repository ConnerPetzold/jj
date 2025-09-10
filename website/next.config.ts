import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";
import { join } from "path";

const withMDX = createMDX();

const config: NextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  output: "export",
  reactStrictMode: true,
  turbopack: {
    root: join(__dirname, ".."),
  },
};

export default withMDX(config);

import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['jsx', 'js', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
});

export default withMDX(nextConfig);

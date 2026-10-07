const isGitHubPages = process.env.GITHUB_ACTIONS || process.env.GITHUB_PAGES;
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  ...(isGitHubPages && repo ? { basePath: `/${repo}`, assetPrefix: `/${repo}/` } : {})
};

export default nextConfig;

import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    // distDir: 'out',
    // trailingSlash: true,
};

export default withNextVideo(nextConfig);
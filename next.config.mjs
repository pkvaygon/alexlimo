import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    // distDir: 'out',
    // trailingSlash: true,
        env: {
            SQUARE_APP_ID: "sq0idp-yUoS3szuMW-V0xJXrUVMQw",
            SQUARE_TOKEN: "EAAAFK_MhgmwTTDWuoPRjabTTP-aEKJAr-HjqMHR4V-p_7GscBdmX4SD0_s2OesS",
            SQUARE_LOCATION_ID: "LNYGHVD6G2M5T",
          },
};

export default withNextVideo(nextConfig);
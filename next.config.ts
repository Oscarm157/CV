import type { NextConfig } from "next";
import { withBotId } from "botid/next/config";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
};

export default withBotId(nextConfig);

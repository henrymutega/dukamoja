import { createRequire } from "module";
const require = createRequire(import.meta.url);
const config = require("./config");

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DB_URI: config.DB_URI,
        API: config.API
    }
};

export default nextConfig;

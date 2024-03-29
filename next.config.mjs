/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  env: {
    URL_API: 'https://api.mercadolibre.com/',
    CLIENT_SECRET: 'lnj2XyE6sAFfAONJKq6HJP6pEKzQWaMh',
    CLIENT_ID: '1434917487896468',
    ACCESS_TOKEN: 'APP_USR-12345678-031820-X-12345678'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'http2.mlstatic.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
};

export default nextConfig;

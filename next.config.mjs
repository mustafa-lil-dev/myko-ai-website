export default {
  async redirects() { return [{ source: '/ai', destination: '/features/ai', permanent: true }]; },
  images: { formats: ['image/avif', 'image/webp'] },
};

import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://nextjs-training-eight-fawn.vercel.app/product',
      lastModified: new Date(),
    },
    {
      url: 'https://nextjs-training-eight-fawn.vercel.app/cart',
      lastModified: new Date(),
    },
    {
      url: 'https://nextjs-training-eight-fawn.vercel.app/order',
      lastModified: new Date(),
    },
    {
      url: 'https://nextjs-training-eight-fawn.vercel.app/login',
      lastModified: new Date(),
    },
    {
      url: 'https://nextjs-training-eight-fawn.vercel.app/register',
      lastModified: new Date(),
    },
  ];
}

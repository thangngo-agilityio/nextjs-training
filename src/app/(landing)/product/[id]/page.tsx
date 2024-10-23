import { Metadata } from 'next';
import { Box } from '@chakra-ui/react';

// Apis
import { getProductDetail, getProducts } from '@/apis';

// Component
import { OverviewSection, ProductDetail } from '@/ui';
import { Suspense } from 'react';
import { SkeletonProductDetail } from '@/components';

type TProductDetailPage = {
  params: { id: string };
};

export const generateStaticParams = async () => {
  const { data = [] } = await getProducts();

  return data.map(({ id }) => ({
    id: id.toString(),
  }));
};

export const generateMetadata = async ({
  params: { id },
}: TProductDetailPage): Promise<Metadata> => {
  const { data } = await getProductDetail(id);

  if (!data) {
    return {};
  }

  const { name, image } = data;

  return {
    title: name,
    description:
      'This is the Product Detail page in a comprehensive e-commerce web application designed to facilitate online shopping.',

    keywords: name,
    openGraph: {
      title: name,
      description:
        'This is the Product Detail page in a comprehensive e-commerce web application designed to facilitate online shopping.',
      type: 'article',
      url: `https://nextjs-training-9355.vercel.app/product/${id}`,
      images: [
        {
          url: image[0],
          width: 700,
          height: 300,
          alt: name,
        },
      ],
    },
  };
};

const ProductDetailPage = ({ params }: TProductDetailPage) => (
  <Box>
    <OverviewSection title="Product detail" />
    <Suspense fallback={<SkeletonProductDetail />}>
      <ProductDetail params={params} />
    </Suspense>
  </Box>
);

export default ProductDetailPage;

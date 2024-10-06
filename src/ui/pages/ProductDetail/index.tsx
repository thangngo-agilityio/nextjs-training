'use client';

import { Box, Flex } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

// Components
import { HeadingSection, ImageProduct, ProductInfo } from '@/components';
const Header = dynamic(() => import('@/layouts/Header'));
const OverviewSection = dynamic(() => import('@/ui/section/Overview'));

type TProductDetail = {
  image: string[];
  name: string;
  price: number;
  description: string;
  category: string;
};

const ProductDetail = ({
  category,
  image,
  name,
  price,
  description,
}: TProductDetail) => (
  <>
    <Header />
    <OverviewSection title="Product detail" />
    <Box px="67px" pb="910px">
      <HeadingSection title={category} />
      <Flex flexDir="row" gap="42px">
        <ImageProduct image={image} alt={name} />
        <ProductInfo title={name} price={price} description={description} />
      </Flex>
    </Box>
  </>
);

export default ProductDetail;

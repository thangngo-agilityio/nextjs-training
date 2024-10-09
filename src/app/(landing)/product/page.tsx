// Apis
import { getProducts } from '@/apis';

// Pages
import { ProductPage } from '@/ui';

type TProductPage = {
  searchParams: {
    name?: string;
    id?: string;
  };
};

const Product = async ({ searchParams }: TProductPage) => {
  const { name = '', id = '' } = searchParams || {};

  const queryConfig = {
    name: name,
    id: id,
  };
  const { data: productList } = await getProducts(queryConfig);
  return (
    <>
      <ProductPage productList={productList} />
    </>
  );
};

export default Product;

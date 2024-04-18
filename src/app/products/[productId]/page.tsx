import ProductReviews from './reviews/page';

type Props = {
    params: {
      productId: string;
    }
  }
  
  export default function ProductDetails({ params }: Props) {
    const { productId } = params;
  
    return (
      <div>
        <h1>Details about product {productId}</h1>
        <ProductReviews params={params} />
      </div>
    );
  }
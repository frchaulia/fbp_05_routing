import Link from 'next/link';
import ReviewDetails from './[reviewsId]/page';

type Props = {
  params: {
    productId: string;
  }
}

export default function ProductReviews({ params }: Props) {
  const { productId } = params;
  const reviewsIds = ['1', '2', '3']; // Daftar ID review

  return (
    <div>
      <h2>Reviews for product {productId}</h2>
      <ul>
        {reviewsIds.map(reviewsId => (
          <li key={reviewsId}>
            <Link href={`/products/${productId}/reviews/${reviewsId}`}>Review {reviewsId}</Link>
            <ReviewDetails params={{ productId, reviewsId }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
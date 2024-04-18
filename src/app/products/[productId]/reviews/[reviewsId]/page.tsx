type Props = {
    params: {
      productId: string;
      reviewsId: string;
    }
  }
  
  export default function ReviewDetails({ params }: Props) {
    const { productId, reviewsId } = params;
  
    return (
      <div>
        <h3>Review {reviewsId} for product {productId}</h3>
        <p>This is the content of the review.</p>
      </div>
    );
  }
import Link from 'next/link';

export default function ProductList() {
  const productIds = ['1', '2', '3']; // Daftar ID produk

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {productIds.map(productId => (
          <li key={productId}>
            <Link href={`/products/${productId}`}>Product {productId}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
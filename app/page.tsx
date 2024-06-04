import { Suspense } from 'react';
import {
  RecommendedProducts,
  RecommendedProductsSkeleton,
} from '#/components/recommended-products';
import { Reviews, ReviewsSkeleton } from '#/components/reviews';
import { SingleProduct } from '#/components/single-product';
import { Ping } from '#/components/ping';
import Link from 'next/link';
import CacheData from '#/components/cache-data';

export default function Page() {
  return (
    <div className="space-y-8 lg:space-y-14">
      <SingleProduct />

      <Ping />

      <Suspense fallback={<RecommendedProductsSkeleton />}>
        <RecommendedProducts />
      </Suspense>

      <Ping />

      <Link href="/test">Go to test page</Link>

      <Suspense fallback={<p>Caching test</p>}>
        <p>cache data 1</p>
        <CacheData />
      </Suspense>
      <Suspense fallback={<p>Caching test</p>}>
        <p>cache data 2</p>
        <CacheData />
      </Suspense>
      <Suspense fallback={<p>Caching test</p>}>
        <p>cache data 3</p>
        <CacheData />
      </Suspense>

      <Suspense fallback={<ReviewsSkeleton />}>
        <Reviews />
      </Suspense>
    </div>
  );
}

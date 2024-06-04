import CacheData from '#/components/cache-data';
import Link from 'next/link';
import React, { Suspense } from 'react';

const TestPage = () => {
  return (
    <div>
      <Link href="/">Go to back home</Link>

      <p>This is test page</p>

      <Suspense fallback={<p>cahing test</p>}>
        <CacheData />
      </Suspense>
    </div>
  );
};

export default TestPage;

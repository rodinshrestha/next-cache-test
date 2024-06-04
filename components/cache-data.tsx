import { unstable_cache } from 'next/cache';
import { headers } from 'next/headers';
import React from 'react';

const getData = unstable_cache(() => {
  return fetch('https://next-cache-test-nine.vercel.app/api/test', {
    headers: { 'Content-Type': 'application/json' },
  })
    .then(async (res) => {
      const resp = await res.json();

      return resp;
    })
    .catch(() => 'Error');
});

const CacheData = async () => {
  const data = await getData();

  headers();

  return (
    <div>
      <p>random Number:{data.data} </p>
    </div>
  );
};

export default CacheData;

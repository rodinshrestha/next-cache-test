import { headers } from 'next/headers';
import React from 'react';

const CacheData = async () => {
  const data = await fetch('https://next-cache-test-nine.vercel.app/api/test', {
    headers: { 'Content-Type': 'application/json' },
  })
    .then(async (res) => {
      const resp = await res.json();

      return resp;
    })
    .catch(() => 'Error');

  headers();

  return (
    <div>
      <p>random Number:{data.data} </p>
    </div>
  );
};

export default CacheData;

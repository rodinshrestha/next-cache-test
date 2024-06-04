import { unstable_cache } from 'next/cache';
import { headers } from 'next/headers';
import React from 'react';

const getData = unstable_cache(() => {
  return fetch('https://random-data-api.com/api/v2/users')
    .then(async (res) => {
      const resp = await res.json();

      return resp;
    })
    .catch(() => 'Error');
});

const CacheData = async () => {
  headers();
  const data = await getData();

  return (
    <div>
      <p>random Number:{data?.id || 'N/A'} </p>
    </div>
  );
};

export default CacheData;

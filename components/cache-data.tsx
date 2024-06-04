import { unstable_cache } from 'next/cache';
import { cookies } from 'next/headers';
import React from 'react';

const getData = () => {
  return fetch('https://random-data-api.com/api/v2/users', {
    next: {
      revalidate: 600,
    },
  })
    .then(async (res) => {
      const resp = await res.json();

      return resp;
    })
    .catch(() => 'Error');
};

const CacheData = async () => {
  const cookie = cookies();
  const data = await getData();
  console.log(cookie, '@@@');

  return (
    <div>
      <p>random Number:{data?.id || 'N/A'} </p>
    </div>
  );
};

export default CacheData;

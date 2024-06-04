import { headers } from 'next/headers';
import React from 'react';

const CacheData = async () => {
  const data = await fetch('http://localhost:3000/api/test', {
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

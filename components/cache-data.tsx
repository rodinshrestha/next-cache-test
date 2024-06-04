import { getCacheData } from '#/utils/cache';
import { headers } from 'next/headers';
import React from 'react';

const CacheData = () => {
  return (
    <div>
      {' '}
      <p>random Number: {getCacheData()}</p>
    </div>
  );
};

export default CacheData;

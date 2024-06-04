'use server';
import { unstable_cache } from 'next/cache';
import { headers } from 'next/headers';

const getRandomInteger = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
};

export const getCacheData = () => {
  headers();
  return unstable_cache(() => {
    return Promise.resolve(getRandomInteger(1, 5));
  });
};

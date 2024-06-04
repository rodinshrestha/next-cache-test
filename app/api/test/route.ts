import type { NextApiRequest, NextApiResponse } from 'next';

const getRandomInteger = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
};

export function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    // res.status(200).json({ result: getRandomInteger(1, 10) })
    //  return new Response(`${getRandomInteger(1, 10)}`, {status: 200})
    return new Response(JSON.stringify({ data: getRandomInteger(1, 10) }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' });
  }
}

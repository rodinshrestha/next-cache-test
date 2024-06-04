const getRandomInteger = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
};

export function GET() {
  return new Response(JSON.stringify({ data: getRandomInteger(1, 10) }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

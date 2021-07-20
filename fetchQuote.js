import fetch from 'node-fetch';

const fetchQuote = async () => {
  const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes');
  const body = await res.json();

  return body[1];
};

export default fetchQuote;
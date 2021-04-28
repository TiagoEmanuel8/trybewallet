const fetchAPIWallet = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const coin = await response.json();
  return coin;
};

export default fetchAPIWallet;
